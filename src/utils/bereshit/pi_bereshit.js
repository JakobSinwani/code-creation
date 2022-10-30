"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.check_results_pi_bereshit = exports.get_initials_fractionate_by_letters = void 0;
const general_1 = require("../general");
const gematria_1 = require("../gematria/gematria");
const research_pi_by_index_1 = require("../pi/research_pi_by_index");
const get_initials_fractionate_by_letters = (expression) => (0, general_1.initials_fractionate_by_items)((0, gematria_1.get_initials)(expression));
exports.get_initials_fractionate_by_letters = get_initials_fractionate_by_letters;
function calculate_pi_bereshit(sentence, bookName) {
    const bookGematria = (0, gematria_1.get_gematria)(bookName);
    const sentenceGematria = (0, gematria_1.get_gematria)(sentence);
    const initials_of_sentence = (0, gematria_1.get_initials)(sentence);
    const initials_fractionate_by_letters = (0, exports.get_initials_fractionate_by_letters)(sentence);
    const slice_by_book_name_regular = (0, research_pi_by_index_1.get_result_pi_by_index)(0, bookGematria.regular);
    const slice_by_book_name_small = (0, research_pi_by_index_1.get_result_pi_by_index)(0, bookGematria.small);
    const slice_by_book_name_small_after_regular = (0, research_pi_by_index_1.get_result_pi_by_index)(bookGematria.regular, (bookGematria.regular + bookGematria.small));
    const get_multiple_by_self_of_small_slice = (0, general_1.get_multiple_by_self)((0, research_pi_by_index_1.get_result_pi_by_index)(0, sentenceGematria.small).slice);
    return {
        bookName,
        sentence,
        initials_fractionate_by_letters,
        slice_by_book_name_regular,
        slice_by_book_name_small,
        slice_by_book_name_small_after_regular,
        get_multiple_by_self_of_small_slice,
        initials_of_sentence,
        sentence_words_length: initials_of_sentence.length,
        sentence_length: sentence.length,
        bookGematria,
        sentenceGematria
    };
}
exports.default = calculate_pi_bereshit;
const create_result = (received, expected) => {
    const result = received === expected;
    return {
        expected,
        received,
        result
    };
};
const check_results_pi_bereshit = (sentence, bookName) => {
    const { sentenceGematria, bookGematria, initials_of_sentence, sentence_words_length, sentence_length, initials_fractionate_by_letters, slice_by_book_name_regular, slice_by_book_name_small, slice_by_book_name_small_after_regular, get_multiple_by_self_of_small_slice } = calculate_pi_bereshit(sentence, bookName);
    const result_1 = create_result(sentenceGematria.regular, slice_by_book_name_regular.sum);
    const result_2 = create_result(sentenceGematria.small, slice_by_book_name_small.sum);
    const result_3 = create_result(sentenceGematria.small, slice_by_book_name_small_after_regular.sum);
    const result_4 = create_result(initials_fractionate_by_letters.toString().slice(0, 4), "3.14");
    return {
        sentence,
        bookName,
        sentenceGematria,
        bookGematria,
        result_1,
        result_2,
        result_3,
        result_4
    };
};
exports.check_results_pi_bereshit = check_results_pi_bereshit;
