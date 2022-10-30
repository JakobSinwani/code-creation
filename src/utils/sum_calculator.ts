import {transform_string_to_split_int} from "./general";

export const get_sum_of_numbers = (numbers_as_string:string) => {
    const splitNumbers = transform_string_to_split_int(numbers_as_string);
    return splitNumbers.reduce((prev, cur)=> prev + cur,0)
}
export const get_sum_of_numbers_multiple_by_self = (numbers_as_string:string) => {
    const splitNumbers = transform_string_to_split_int(numbers_as_string);
    return splitNumbers.reduce((prev, cur) => prev + (cur * cur), 0);
}
