const dat_swagger_options = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "DAT",
        version: "1.0.0",
      },
      servers: [
        {
          url: `http://localhost:1922/api`,
          description: "Local server",
        },
        {
          url: `https://localhost:1922/api`,
          description: "Local server",
        },
      ],
    },
    apis: ["./dat_api_docs/*.js"], // files containing annotations as above
  };

  

  module.exports.JS_SWAGGER = {
    dat_swagger_options
  }