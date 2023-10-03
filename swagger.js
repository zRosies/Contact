const { env } = require('process');

const swaggerAutogen = require('swagger-autogen')();

    const doc = {
    info: {
        title: 'My API',
        description: 'My first API Documentarion',
    },
    host: process.env.PORT,
    schemes: ['http'],
    };

    const outputFile = './swagger';
    const endpointsFiles = ['./routes/routes.js'];



swaggerAutogen(outputFile, endpointsFiles, doc);