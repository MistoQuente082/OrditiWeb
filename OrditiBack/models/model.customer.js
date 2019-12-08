class CustomerModel {
    constructor(name, email, local, produto) {
        this.name = name;
        this.email = email;
        this.local = local;
        this.produto = produto;
        this.uid = null;
    }
}

module.exports = CustomerModel;