const express = require('express');
const sha256 = require('./utils/sha256');
const streebog = require('./utils/streebog');

const router = express.Router();

/** 
 * @swagger
 * /hash/sha256:
 *   get:
 *      summary: Hash value with sha256
 *      parameters:
 *          - in: query
 *            name: value
 *            required: true
 *            description: string to hash
 *            schema:
 *              type: string
 *      responses:
 *          200:
 *              description: value hashed succesfully
 *              content:
 *                  application/json:
 *                       type: object
 *                       properties:
 *                          hash: string
 *                          description: hashed string
 *          400:
 *              description: no value in request query
*/
router.get('/hash/sha256', (req, res) => {
    const value = req.query.value;
    if (value === undefined) {
        res.status(400).json({ error: 'No value in request query'});
        return;
    }
    const hash = sha256(value);
    res.status(200).json({ hash })
})

/** 
 * @swagger
 * /hash/streebog:
 *   get:
 *      summary: Hash value with streebog
 *      parameters:
 *          - in: query
 *            name: value
 *            required: true
 *            description: string to hash
 *            schema:
 *              type: string
 *      responses:
 *          200:
 *              description: value hashed succesfully
 *          400:
 *              description: no value in request query
*/
router.get('/hash/streebog', (req, res) => {
    const value = req.query.value;
    if (value === undefined) {
        res.status(400).json({ error: 'No value in request query'});
        return;
    }
    const hash = streebog(value);
    res.status(200).json({ hash })
})

module.exports = router;