const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'My API',
        description: 'API Documentation for User Management'
    },
    host: 'localhost:5000',
    schemes: ['http'],
    tags: [
        {
            name: "User",
            description: "Endpoints related to user management"
        },
        {
            name: "Subscription",
            description: "Endpoints related to user subscriptions"
        }
    ]
};

const outputFile = './swagger-output.json';
const routes = ['./routes/*'];

swaggerAutogen(outputFile, routes, doc);
