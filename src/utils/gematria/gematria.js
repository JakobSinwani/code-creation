"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.get_gematria = exports.get_supported_letters_pattern = exports.drop_not_legal_charts = exports.calculate_gematria = exports.get_initials = exports.map_initials = void 0;
const dictionary_1 = __importDefault(require("../dictionary"));
const general_1 = require("../general");
const map_initials = (split_array) => split_array.map((l) => l.charAt(0)).reverse();
exports.map_initials = map_initials;
const get_initials = (expression) => (0, exports.map_initials)((0, general_1.split_expression)(expression, " "));
exports.get_initials = get_initials;
const calculate_gematria = (split_text) => {
    let small = 0;
    let regular = 0;
    let index = 0;
    let absolute_index = 0;
    const calculate = (t) => {
        //@ts-ignore
        small += dictionary_1.default[t].small;
        regular += dictionary_1.default[t].regular;
        index += dictionary_1.default[t].index;
        absolute_index += dictionary_1.default[t].absolute_index;
    };
    split_text.forEach(calculate);
    return { small, regular, absolute_index, index };
};
exports.calculate_gematria = calculate_gematria;
const drop_not_legal_charts = (expression) => expression.replace((0, exports.get_supported_letters_pattern)(), "");
exports.drop_not_legal_charts = drop_not_legal_charts;
const get_supported_letters_pattern = () => /[^a-zA-Zא-תا-غ]+/g;
exports.get_supported_letters_pattern = get_supported_letters_pattern;
const get_gematria = (expression) => (0, exports.calculate_gematria)((0, general_1.split_expression)((0, exports.drop_not_legal_charts)(expression)));
exports.get_gematria = get_gematria;
