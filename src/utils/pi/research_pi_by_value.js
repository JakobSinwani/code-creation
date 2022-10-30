"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get_slice_of_value = exports.get_index_of_value = void 0;
const get_index_of_value = (pi, value) => pi.indexOf(value) + 1;
exports.get_index_of_value = get_index_of_value;
const get_slice_of_value = (pi, index) => pi.slice(0, index);
exports.get_slice_of_value = get_slice_of_value;
