var express = require('express');
var router = express.Router();
var AmbulanteService = require('../services/service.ambulante');

/* GET customer listing. */
router.get('/', async function (req, res, next) {
    res.json({ error: "Invalid Customer UID." });
});

/* adds a new customer to the list */
router.post('/', async (req, res, next) => {
    const body = req.body;
    console.log(body);

    try {
        const ambulante = await AmbulanteService.create(body);

        if (body.guid != null) {
            ambulante.guid = body.guid;
        }

        res.cookie('guid', ambulante.guid, { maxAge: 900000, httpOnly: true });

        // created the customer! 
        console.log(ambulante)
        return res.status(201).json({ ambulante: ambulante });
    }
    catch (err) {
        if (err.name === 'ValidationError') {
            return res.status(400).json({ error: err.message });
        }

        // unexpected error
        return next(err);
    }
});

/* retrieves a customer by uid */
router.get('/:id', async (req, res, next) => {
    try {
        const ambulante = await AmbulanteService.retrieve(req.params.id);

        return res.json({ ambulante: ambulante });
    }
    catch (err) {
        // unexpected error
        return next(err);
    }
});

/* updates the customer by uid */
router.put('/:id', async (req, res, next) => {
    try {
        const ambulante = await AmbulanteService.update(req.params.id, req.body);

        return res.json({ ambulante: ambulante });
    }
    catch (err) {
        // unexpected error
        return next(err);
    }
});

/* removes the customer from the customer list by uid */
router.delete('/:id', async (req, res, next) => {
    try {
        const ambulante = await AmbulanteService.delete(req.params.id);

        return res.json({ success: true });
    }
    catch (err) {
        // unexpected error
        return next(err);
    }
});

module.exports = router;