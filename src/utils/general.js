"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get_multiple_by_self = exports.join_array = exports.initials_fractionate_by_items = exports.get_last_item_of_array = exports.get_sum_from_array_of_numbers = exports.transform_string_to_int_without_split = exports.transform_string_to_split_int = exports.BERESHIT_VERSE = exports.split_expression = void 0;
const gematria_1 = require("./gematria/gematria");
const split_expression = (text, separator = "") => text.split(separator);
exports.split_expression = split_expression;
exports.BERESHIT_VERSE = "בראשית ברא אלהים את השמים ואת הארץ";
const transform_string_to_split_int = (numbers_as_string) => [...numbers_as_string].map(Number);
exports.transform_string_to_split_int = transform_string_to_split_int;
const transform_string_to_int_without_split = (numbers_as_string) => numbers_as_string.map(Number);
exports.transform_string_to_int_without_split = transform_string_to_int_without_split;
const get_sum_from_array_of_numbers = (array_of_numbers) => array_of_numbers.reduce((prev, acc) => acc + prev, 0);
exports.get_sum_from_array_of_numbers = get_sum_from_array_of_numbers;
const get_last_item_of_array = (array) => array.slice(-1).pop();
exports.get_last_item_of_array = get_last_item_of_array;
const initials_fractionate_by_items = (initials) => (0, gematria_1.get_gematria)((0, exports.join_array)(initials)).regular / initials.length;
exports.initials_fractionate_by_items = initials_fractionate_by_items;
const join_array = (array, separator = "") => array.join(separator);
exports.join_array = join_array;
const get_multiple_by_self = (numbers_as_string) => {
    const array_of_numbers = (0, exports.transform_string_to_split_int)(numbers_as_string);
    return array_of_numbers.reduce((prev, cur) => prev + (Math.pow(cur, cur)), 0);
};
exports.get_multiple_by_self = get_multiple_by_self;
