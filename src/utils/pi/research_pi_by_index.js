"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.get_result_pi_by_index = exports.get_sum_of_slice = exports.get_slice = void 0;
const sum_calculator_1 = require("../sum_calculator");
const get_pi_1 = __importDefault(require("./get_pi"));
const thousands_calculator_1 = require("../thousands_calculator");
const get_slice = (pi, start, end) => pi.slice(start, end);
exports.get_slice = get_slice;
const get_sum_of_slice = (slice) => (0, sum_calculator_1.get_sum_of_numbers)(slice);
exports.get_sum_of_slice = get_sum_of_slice;
const get_result_pi_by_index = (start, end) => {
    const slice = (0, exports.get_slice)((0, get_pi_1.default)().pi, start, end);
    const sum = (0, exports.get_sum_of_slice)(slice);
    const thousands = (0, thousands_calculator_1.calculate_thousands)(sum.toString());
    return {
        start,
        end,
        slice,
        sum,
        thousands
    };
};
exports.get_result_pi_by_index = get_result_pi_by_index;
