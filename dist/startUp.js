"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
class StartUp {
    constructor() {
        this.app = express();
        this.routes();
    }
    routes() {
        this.app.route('/').get((req, res) => {
            res.send({ versao: '0.0.1' });
        });
    }
}
exports.default = new StartUp();
