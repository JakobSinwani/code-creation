import hebrew_dictionary from "./hebrew_letters";
import arrabic_dictionary from "./arrabic_letters";
import english_letters from "./english_letters";

export type Letter = {
    [letter:string]: {
        small: number;
        regular: number;
        index: number;
        absolute_index: number;
        key?:string
    };
};
const dictionary:Letter = {...hebrew_dictionary,...arrabic_dictionary, ...english_letters}

export default dictionary;
