import * as fs from 'mz/fs';
import {split_expression} from "../general";
import {get_gematria} from "../gematria/gematria";
import {check_results_pi_bereshit} from "../bereshit/pi_bereshit";
export async function read_file(path:string):Promise<string> {
    try {
        return await fs.readFile(path, {encoding: "utf8"})
    }
    catch (e) {
        console.log(e)
        return ""
    }
}


export function split_to_sentences(text:string) {
    const sentence_pattern = /[\\.!\?]/;
    return split_expression(text, sentence_pattern);
}


export const book = async (path:string, bookName?:string) => {
   const data = await read_file(path);
   const results = split_to_sentences(data).map(sentence => {
        return check_results_pi_bereshit(sentence, bookName)
    });
    const positive_results = results.filter(item => [item.result_1.result, item.result_2.result, item.result_3.result, item.result_4.result].some(i => i));
    const every_positive = results.filter(item => [item.result_1.result, item.result_2.result, item.result_3.result, item.result_4.result].every(i => i));
    const count_positive_results = () => {
        const array = [];
        positive_results.forEach(result => {
            let count = 0;
            if(result.result_2.result) count++;
            if(result.result_1.result) count++;
            if(result.result_3.result) count++;
            if(result.result_4.result) count++;
            if(count >= 2) array.push(result);
        })
        return array
    }

    const more_than_one_found = count_positive_results();
    console.log({positive: positive_results.length, total_results: results.length, more_than_one_found, every:every_positive})
    return {
        positive_results,
    };
}
