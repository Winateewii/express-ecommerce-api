var express = require('express');
const products = require('./routes/products')
const cors  = require('cors')

module.exports = async (app) => {

    app.use(express.json({ limit: '1mb' }));
    app.use(express.urlencoded({ extended: true, limit: '1mb' }));
    app.use(cors());
    app.use(express.static(__dirname + '/public'))

    //swagger
    const swaggerUI = require('swagger-ui-express');
    const YAML = require('yamljs')

    // Load the Swagger YAML file
    const swaggerDocument = YAML.load('./src/docs/swagger.yaml')

    // Setup Swagger UI
    app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument))
    app.use('/products', products)


}