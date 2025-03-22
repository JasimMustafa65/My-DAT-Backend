const express = require("express");
const dotenv = require("dotenv");
const userRoutes = require("./routes/user.js");
const planRoutes = require("./routes/plans.js");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger-output.json");
const { sequelize } = require("./sequelize/models/index"); 
const cors = require("cors");
const swaggerJsDoc = require("swagger-jsdoc");
const { JSONB } = require("sequelize");
const { JS_SWAGGER } = require("./dat_api_docs/index.js");
const path = require("path");

dotenv.config();

const app = express();
app.use(express.json());

const staticApp = path.join(__dirname, "client");
app.use("/app", express.static(staticApp));
app.get("/app/*", (req, res) => {
  res.sendFile(path.join(staticApp, "index.html"));
});

app.use(cors());

const main_rout = "/api";

// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
const ev_swaggerDocs = swaggerJsDoc(JS_SWAGGER.dat_swagger_options);
app.use("/api-docs", swaggerUi.serveFiles(ev_swaggerDocs, {}), swaggerUi.setup(ev_swaggerDocs));
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const PORT = process.env.PORT || 5000;

app.use(main_rout, userRoutes);
app.use(main_rout, planRoutes);

app.get("/running", (req, res) => {
  res.send("Sequelize API is running...");
});

sequelize
  .sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`🚀 Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => console.error("❌ Database sync failed:", err));
