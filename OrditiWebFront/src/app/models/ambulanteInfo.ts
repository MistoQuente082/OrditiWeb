export class AmbulanteInfoModel {
    guid: string;
    uid: string;
    nome: string;
    email: string;
    local: string;
    produto: string;
    cpf: string;

    constructor(obj: any = null) {
        if (obj != null) {
            Object.assign(this, obj);
        }
    }
}