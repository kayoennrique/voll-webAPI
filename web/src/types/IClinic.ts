import IAddress from "./IAddress";

export default interface IClinic {
  email: string,
  nome: string,
  senha: string,
  endereco: IAddress
}
