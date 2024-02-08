import { makeObservable, observable, action } from "mobx";

interface IUser {
  email: string,
  token: string
}

class AuthenticStore {
  isAuthenticated = false;
  usuario: IUser = { email: "", token: "" };

  constructor() {
    makeObservable(this, {
      isAuthenticated: observable,
      usuario: observable,
      login: action,
      logout: action
    })
  }

  login({ email, token }: IUser) {
    this.isAuthenticated = true;
    this.usuario = { email, token };
  }

  logout() {
    this.isAuthenticated = false;
    this.usuario = { email: "", token: "" }
  }
}

const authenticStore = new AuthenticStore();

export default authenticStore;