"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get_sum_of_numbers_multiple_by_self = exports.get_sum_of_numbers = void 0;
const general_1 = require("./general");
const get_sum_of_numbers = (numbers_as_string) => {
    const splitNumbers = (0, general_1.transform_string_to_split_int)(numbers_as_string);
    return splitNumbers.reduce((prev, cur) => prev + cur, 0);
};
exports.get_sum_of_numbers = get_sum_of_numbers;
const get_sum_of_numbers_multiple_by_self = (numbers_as_string) => {
    const splitNumbers = (0, general_1.transform_string_to_split_int)(numbers_as_string);
    return splitNumbers.reduce((prev, cur) => prev + (cur * cur), 0);
};
exports.get_sum_of_numbers_multiple_by_self = get_sum_of_numbers_multiple_by_self;
