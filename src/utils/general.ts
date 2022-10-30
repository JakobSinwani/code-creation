import {get_gematria} from "./gematria/gematria";

export const split_expression = (text: string, separator: string | RegExp = "") => text.split(separator);
export const BERESHIT_VERSE = "בראשית ברא אלהים את השמים ואת הארץ"
export const transform_string_to_split_int = (numbers_as_string: string) => [...numbers_as_string].map(Number)
export const transform_string_to_int_without_split = (numbers_as_string: string[]) => numbers_as_string.map(Number)
export const get_sum_from_array_of_numbers = (array_of_numbers:number[]) => array_of_numbers.reduce((prev:number, acc:number)=> acc + prev, 0);
export const get_last_item_of_array = (array:any[]) => array.slice(-1).pop()
export const initials_fractionate_by_items = (initials:string[]) =>
    get_gematria(join_array(initials)).regular / initials.length
export const join_array = (array: string []| number [], separator = "") => array.join(separator)
export const get_multiple_by_self = (numbers_as_string:string) => {
   const array_of_numbers = transform_string_to_split_int(numbers_as_string)
   return  array_of_numbers.reduce((prev, cur)=>prev + (Math.pow(cur,cur)) ,0);
}
