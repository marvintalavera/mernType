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
// DEPENDENCIES
const destinations = require('express').Router();
const { Destination } = require('../models');
// FIND ALL DESTINATIONS
destinations.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const foundDestinations = yield Destination.findAll();
        res.status(200).json(foundDestinations);
    }
    catch (Error) {
        console.log(Error);
        res.status(500).send('Oh no, could not find destinations');
    }
}));
// FIND A DESTINATION
destinations.get('/:name', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const foundDestination = yield Destination.findOne({
            where: { name: req.params.name }
        });
        res.status(200).json(foundDestination);
    }
    catch (Error) {
        console.log(Error);
        res.status(500).send('Oh no, could not find destination');
    }
}));
// CREATE A DESTINATION
destinations.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newDestination = yield Destination.create(req.body);
        res.status(200).json({
            message: 'Successfully created a new destination',
            data: newDestination
        });
    }
    catch (Error) {
        res.status(500).json(Error);
    }
}));
// UPDATE A DESTINATION
destinations.put('/:name', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedDestination = yield Destination.update(req.body, {
            where: {
                name: req.params.name
            }
        });
        res.status(200).json({
            message: `Successfully updated ${updatedDestination} Destination`
        });
    }
    catch (Error) {
        res.status(500).json(Error);
    }
}));
// DELETE A DESTINATION
destinations.delete('/:name', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedDestination = yield Destination.destroy({
            where: {
                name: req.params.name
            }
        });
        res.status(200).json({
            message: `Successfully deleted ${deletedDestination}`
        });
    }
    catch (Error) {
        res.status(500).json(Error);
    }
}));
// EXPORT
module.exports = destinations;
