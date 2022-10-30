"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const hebrew_letters_1 = __importDefault(require("./hebrew_letters"));
const arrabic_letters_1 = __importDefault(require("./arrabic_letters"));
const english_letters_1 = __importDefault(require("./english_letters"));
const dictionary = Object.assign(Object.assign(Object.assign({}, hebrew_letters_1.default), arrabic_letters_1.default), english_letters_1.default);
exports.default = dictionary;
