"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// DEPENDENCIES
const continents = require('express').Router();
const db = require('../models');
const { Destination } = db;
// FIND ALL DESTINATIONS ON SAME CONTINENT
continents.get('/:continent_name', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const listDestinations = yield Destination.findAll({
            where: { continent_name: req.params.continent_name }
        });
        res.status(200).json(listDestinations);
    }
    catch (Error) {
        console.log(Error);
        res.status(500).send('Oh no, could not find destinations');
    }
}));
// EXPORT
exports.default = continents;
