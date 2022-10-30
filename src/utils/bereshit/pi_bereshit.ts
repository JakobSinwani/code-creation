import {get_multiple_by_self, initials_fractionate_by_items} from "../general";
import {get_gematria, get_initials} from "../gematria/gematria";
import {get_result_pi_by_index} from "../pi/research_pi_by_index";

export const get_initials_fractionate_by_letters = (expression: string) =>
    initials_fractionate_by_items(get_initials(expression))

export default function calculate_pi_bereshit(sentence: string, bookName: string) {
    const bookGematria = get_gematria(bookName);
    const sentenceGematria = get_gematria(sentence);
    const initials_of_sentence = get_initials(sentence)
    const initials_fractionate_by_letters = get_initials_fractionate_by_letters(sentence)
    const slice_by_book_name_regular = get_result_pi_by_index(0, bookGematria.regular)
    const slice_by_book_name_small = get_result_pi_by_index(0, bookGematria.small)
    const slice_by_book_name_small_after_regular = get_result_pi_by_index(bookGematria.regular, (bookGematria.regular + bookGematria.small))
    const get_multiple_by_self_of_small_slice = get_multiple_by_self(get_result_pi_by_index(0, sentenceGematria.small).slice)
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
    }
}

const create_result = (received:string | number, expected : string | number) => {
    const result = received === expected;
    return {
        expected,
        received,
        result
    }
}

export const check_results_pi_bereshit = (sentence: string, bookName: string) => {
    const {
        sentenceGematria,
        bookGematria,
        initials_of_sentence,
        sentence_words_length,
        sentence_length,
        initials_fractionate_by_letters,
        slice_by_book_name_regular,
        slice_by_book_name_small,
        slice_by_book_name_small_after_regular,
        get_multiple_by_self_of_small_slice
    } = calculate_pi_bereshit(sentence, bookName);

    const result_1 = create_result(sentenceGematria.regular, slice_by_book_name_regular.sum);
    const result_2 = create_result(sentenceGematria.small, slice_by_book_name_small.sum);
    const result_3 = create_result(sentenceGematria.small, slice_by_book_name_small_after_regular.sum);
    const result_4 = create_result(initials_fractionate_by_letters.toString().slice(0,4), "3.14");
    return {
        sentence,
        bookName,
        sentenceGematria,
        bookGematria,
        result_1,
        result_2,
        result_3,
        result_4
    }
}
