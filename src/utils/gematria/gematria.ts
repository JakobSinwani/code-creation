import dictionary from '../dictionary'
import {split_expression} from "../general";
export const map_initials = (split_array:string[]) => split_array.map((l) => l.charAt(0)).reverse();
export const get_initials = (expression:string) => map_initials(split_expression(expression, " "));
export const calculate_gematria = (split_text:string[]) => {
    let small = 0
    let regular = 0
    let index = 0
    let absolute_index = 0
    const calculate = (t:string) => {
        //@ts-ignore
        small += dictionary[t].small; regular += dictionary[t].regular; index += dictionary[t].index; absolute_index += dictionary[t].absolute_index
    }
    split_text.forEach(calculate)
    return {small, regular, absolute_index, index}
}

export const drop_not_legal_charts = (expression:string) =>
    expression.replace(get_supported_letters_pattern(), "")

export const get_supported_letters_pattern = () => /[^a-zA-Zא-תا-غ]+/g

export const get_gematria = (expression:string) => calculate_gematria(split_expression(drop_not_legal_charts(expression)))

