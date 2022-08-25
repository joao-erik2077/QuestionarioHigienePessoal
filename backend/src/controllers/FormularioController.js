const mysql = require('./../database/database');

class FormularioController {

    insert(req, res) {
        res.set('Access-Control-Allow-Origin', 'http://localhost:4200');

        console.log(req);

        if (req.body.p1 === null || req.body.p2 === null || req.body.p3 === null || req.body.p4 === null || req.body.p5 === null) {
            return res.status(400).send({
                'error': 'Missing values'
            });
        }

        const query = `INSERT INTO formulario VALUES(${req.body.p1}, ${req.body.p2}, ${req.body.p3}, ${req.body.p4}, ${req.body.p5})`;
        mysql.exec(query, (err) => {
            if (err) {
                return res.status(500).send({
                    'error': err.code
                });
            }

            return res.status(201).send({
                'post': req.body
            });
        });
    }
}

module.exports = new FormularioController();