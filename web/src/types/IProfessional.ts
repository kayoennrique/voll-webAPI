import IAddress from "./IAddress";

export default interface IProfessional {
    nome: string,
    crm: string,
    imagem: string,
    especialidade: string,
    possuiPlanoSaude: boolean,
    senha: string,
    planoSaude: string[],
    estaAtivo: boolean,
    email: string,
    telefone: string,
    endereco: IAddress
}