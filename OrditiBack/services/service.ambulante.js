const AmbulanteModel = require("../models/model.ambulante");
let Validator = require('fastest-validator');


let ambulantes = {};
let counter = 0;

/* create an instance of the validator */
let AmbulanteValidator = new Validator();

/* use the same patterns as on the client to validate the request */
let namePattern = /([A-Za-z\-\’])*/;

/* customer validator shema */
const ambulanteVSchema = {
    guid: { type: "string", min: 3 },
    cpf: { type: "string", min: 1, max: 50 },
    nome: { type: "string", min: 1, max: 50, pattern: namePattern },
    email: { type: "email", max: 75 },
    local: { type: "string", min: 5 },
    produto: { type: "string", min: 2, max: 50 }
};

/* static customer service class */
class AmbulanteService {
    static create(data) {
        var vres = AmbulanteValidator.validate(data, ambulanteVSchema);

        /* validation failed */
        if (!(vres === true)) {
            let errors = {}, item;

            for (const index in vres) {
                item = vres[index];

                errors[item.field] = item.message;
            }

            throw {
                name: "ValidationError",
                message: errors
            };
        }

        let ambulante = new AmbulanteModel(data.cpf, data.nome, data.email, data.local, data.produto);

        ambulante.uid = data.cpf;

        ambulantes[ambulante.uid] = ambulante;

        return ambulante;
    }

    static retrieve(uid) {
        if (ambulante[uid] != null) {
            return ambulante[uid];
        }
        else {
            throw new Error('Unable to retrieve a customer by (uid:' + uid + ')');
        }
    }

    static update(uid, data) {
        if (ambulantes[uid] != null) {
            const ambulante = ambulantes[uid];

            Object.assign(ambulante, data);
        }
        else {
            throw new Error('Unable to retrieve a customer by (uid:' + cuid + ')');
        }
    }

    static delete(uid) {
        if (ambulantes[uid] != null) {
            delete ambulantes[uid];
        }
        else {
            throw new Error('Unable to retrieve a customer by (uid:' + cuid + ')');
        }
    }
}

module.exports = AmbulanteService;