class AmbulanteModel {
    constructor(cpf, nome, email, local, produto, ) {
        this.nome = nome;
        this.email = email;
        this.local = local;
        this.produto = produto;
        this.cpf = cpf;
        this.uid = null;
    }
}

module.exports = AmbulanteModel;