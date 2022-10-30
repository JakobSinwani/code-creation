"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.book = exports.split_to_sentences = exports.read_file = void 0;
const fs = __importStar(require("mz/fs"));
const general_1 = require("../general");
const pi_bereshit_1 = require("../bereshit/pi_bereshit");
function read_file(path) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return yield fs.readFile(path, { encoding: "utf8" });
        }
        catch (e) {
            console.log(e);
            return "";
        }
    });
}
exports.read_file = read_file;
function split_to_sentences(text) {
    const sentence_pattern = /[\\.!\?]/;
    return (0, general_1.split_expression)(text, sentence_pattern);
}
exports.split_to_sentences = split_to_sentences;
const book = (path, bookName) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield read_file(path);
    const results = split_to_sentences(data).map(sentence => {
        return (0, pi_bereshit_1.check_results_pi_bereshit)(sentence, bookName);
    });
    const positive_results = results.filter(item => [item.result_1.result, item.result_2.result, item.result_3.result, item.result_4.result].some(i => i));
    const every_positive = results.filter(item => [item.result_1.result, item.result_2.result, item.result_3.result, item.result_4.result].every(i => i));
    const count_positive_results = () => {
        const array = [];
        positive_results.forEach(result => {
            let count = 0;
            if (result.result_2.result)
                count++;
            if (result.result_1.result)
                count++;
            if (result.result_3.result)
                count++;
            if (result.result_4.result)
                count++;
            if (count >= 2)
                array.push(result);
        });
        return array;
    };
    const more_than_one_found = count_positive_results();
    console.log({ positive: positive_results.length, total_results: results.length, more_than_one_found, every: every_positive });
    return {
        positive_results,
    };
});
exports.book = book;
