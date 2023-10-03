const swaggerAutogen = require('swagger-autogen')();

    const doc = {
    info: {
        title: 'My API',
        description: 'My first API Documentarion',
    },
    host: 'localhost:7070',
    schemes: ['http'],
    };

    const outputFile = './swagger';
    const endpointsFiles = ['./routes/routes.js'];



swaggerAutogen(outputFile, endpointsFiles, doc);