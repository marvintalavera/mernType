"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// DEPENDENCIES
require('dotenv').config();
const PORT = process.env.PORT;
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const cors_1 = __importDefault(require("cors"));
const sequelize_1 = require("sequelize");
const destinations_controller_1 = __importDefault(require("../controllers/destinations_controller"));
const continent_controllers_1 = __importDefault(require("../controllers/continent_controllers"));
//middleware
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use(express_1.default.urlencoded({ extended: false }));
// SEQUELIZE CONNECTION
const sequelize = new sequelize_1.Sequelize(process.env.PG_URI);
// ROOT
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to Express Excusions'
    });
});
// CONTROLLERS
app.use('/destinations', destinations_controller_1.default);
app.use('/continents', continent_controllers_1.default);
//404 Page
app.get('*', (req, res) => {
    res.send('404'); // we can add page for this later
});
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});
module.exports = app;
