import {get_sum_of_numbers} from "../sum_calculator";
import get_pi from "./get_pi";
import {calculate_thousands} from "../thousands_calculator";

export const get_slice = (pi:string, start:number,end:number) => pi.slice(start,end);

export const get_sum_of_slice = (slice:string) => get_sum_of_numbers(slice);

export const get_result_pi_by_index = (start:number, end:number) => {
    const slice = get_slice(get_pi().pi,start, end);
    const sum = get_sum_of_slice(slice);
    const thousands = calculate_thousands(sum.toString());
    return {
        start,
        end,
        slice,
        sum,
        thousands
    }
}
