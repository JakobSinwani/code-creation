import {
    get_last_item_of_array,
    get_sum_from_array_of_numbers,
    split_expression,
    transform_string_to_int_without_split
} from "./general";

export const numberWithCommas = (number_as_string:string) => {
    return number_as_string.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
export const split_thousands = (number_as_string_with_commas:string) => split_expression(number_as_string_with_commas, ",")

export const get_total_of_thousands = (number_as_string:string) => get_sum_from_array_of_numbers(transform_string_to_int_without_split(split_thousands(numberWithCommas(number_as_string))));

export const calculate_thousands = (number_as_string:string):number[] => {
    const thousands:number[] = []
    if(number_as_string.length < 4) return thousands;
    const total_of_thousands = get_total_of_thousands(number_as_string)
    thousands.push(total_of_thousands);
    while (get_last_item_of_array(thousands) >= 1000){
      thousands.push(get_total_of_thousands(get_last_item_of_array(thousands).toString()))
    }
    return thousands;
}
