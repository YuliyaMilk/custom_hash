const express = require('express');
const app = express();
const port = 3001;

const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const router = require('./routes');

const cors = require('cors');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Custom hash',
            version: '1.0.0',
        }
    },
    servers: [
        {
            url: 'http://localhost:3001',
            description: 'Dev',
        }
    ],
    apis: ['./routes.js']
}

const openapiSpecification = swaggerJsdoc(options);

app.use(express.json());
app.use(cors({ origin: '*' }));
app.use('/docs', swaggerUi.serve, swaggerUi.setup(openapiSpecification));

app.use('/', router);

app.listen(port, () => {
    console.log(`Server started on port: ${port}`)
})