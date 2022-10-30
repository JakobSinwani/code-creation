"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculate_thousands = exports.get_total_of_thousands = exports.split_thousands = exports.numberWithCommas = void 0;
const general_1 = require("./general");
const numberWithCommas = (number_as_string) => {
    return number_as_string.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
exports.numberWithCommas = numberWithCommas;
const split_thousands = (number_as_string_with_commas) => (0, general_1.split_expression)(number_as_string_with_commas, ",");
exports.split_thousands = split_thousands;
const get_total_of_thousands = (number_as_string) => (0, general_1.get_sum_from_array_of_numbers)((0, general_1.transform_string_to_int_without_split)((0, exports.split_thousands)((0, exports.numberWithCommas)(number_as_string))));
exports.get_total_of_thousands = get_total_of_thousands;
const calculate_thousands = (number_as_string) => {
    const thousands = [];
    if (number_as_string.length < 4)
        return thousands;
    const total_of_thousands = (0, exports.get_total_of_thousands)(number_as_string);
    thousands.push(total_of_thousands);
    while ((0, general_1.get_last_item_of_array)(thousands) >= 1000) {
        thousands.push((0, exports.get_total_of_thousands)((0, general_1.get_last_item_of_array)(thousands).toString()));
    }
    return thousands;
};
exports.calculate_thousands = calculate_thousands;
