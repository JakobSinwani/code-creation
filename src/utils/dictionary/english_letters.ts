const english_letters = {
    "A": {
        "small": 1,
        "regular": 1,
        "index": 1,
        "absolute_index": 1,
        "key": "א"
    },
    B: {
        "small": 2,
        "regular": 2,
        "index": 2,
        "absolute_index": 2,
        "key": "ב"
    },
    "C": {
        "small": 3,
        "regular": 3,
        "index": 3,
        "absolute_index": 3,
        "key": "ג"
    },
    "D": {
        "small": 4,
        "regular": 4,
        "index": 4,
        "absolute_index": 4,
        "key": "ד"
    },
    "E": {
        "small": 5,
        "regular": 5,
        "index": 5,
        "absolute_index": 5,
        "key": "ה"
    },
    "F": {
        "small": 6,
        "regular": 6,
        "index": 6,
        "absolute_index": 6,
        "key": "ו"
    },
    "G": {
        "small": 7,
        "regular": 7,
        "index": 7,
        "absolute_index": 7,
        "key": "ז"
    },
    "H": {
        "small": 8,
        "regular": 8,
        "index": 8,
        "absolute_index": 8,
        "key": "ח"
    },
    "I": {
        "small": 9,
        "regular": 9,
        "index": 9,
        "absolute_index": 9,
        "key": "ט"
    },
    "J": {
        "small": 1,
        "regular": 10,
        "index": 10,
        "absolute_index": 10,
        "key": "י"
    },
    "K": {
        "small": 2,
        "regular": 20,
        "index": 11,
        "absolute_index": 11,
        "key": "כ"
    },
    "L": {
        "small": 3,
        "regular": 30,
        "index": 12,
        "absolute_index": 12,
        "key": "ל"
    },
    "M": {
        "small": 4,
        "regular": 40,
        "index": 13,
        "absolute_index": 13,
        "key": "מ"
    },
    "N": {
        "small": 5,
        "regular": 50,
        "index": 14,
        "absolute_index": 14,
        "key": "נ"
    },
    "O": {
        "small": 6,
        "regular": 60,
        "index": 15,
        "absolute_index": 15,
        "key": "ס"
    },
    "P": {
        "small": 7,
        "regular": 70,
        "index": 16,
        "absolute_index": 16,
        "key": "ע"
    },
    "Q": {
        "small": 8,
        "regular": 80,
        "index": 17,
        "absolute_index": 17,
        "key": "פ"
    },
    "R": {
        "small": 9,
        "regular": 90,
        "index": 18,
        "absolute_index": 18,
        "key": "צ"
    },
    "S": {
        "small": 1,
        "regular": 100,
        "index": 19,
        "absolute_index": 19,
        "key": "ק"
    },
    "T": {
        "small": 2,
        "regular": 200,
        "index": 20,
        "absolute_index": 20,
        "key": "ר"
    },
    "U": {
        "small": 3,
        "regular": 300,
        "index": 21,
        "absolute_index": 21,
        "key": "ש"
    },
    "V": {
        "small": 4,
        "regular": 400,
        "index": 22,
        "absolute_index": 22,
        "key": "ת"
    },
    "W": {
        "small": 5,
        "regular": 500,
        "index": 23,
        "absolute_index": 23,
        "key": "ת"
    },
    "X": {
        "small": 6,
        "regular": 600,
        "index": 24,
        "absolute_index": 24,
        "key": "ת"
    },    "Y": {
        "small": 7,
        "regular": 700,
        "index": 25,
        "absolute_index": 25,
        "key": "ת"
    },
    "Z": {
        "small": 8,
        "regular": 800,
        "index": 26,
        "absolute_index": 26,
        "key": "ת"
    },
    "a": {
        "small": 1,
        "regular": 1,
        "index": 1,
        "absolute_index": 1,
        "key": "א"
    },
    b: {
        "small": 2,
        "regular": 2,
        "index": 2,
        "absolute_index": 2,
        "key": "ב"
    },
    "c": {
        "small": 3,
        "regular": 3,
        "index": 3,
        "absolute_index": 3,
        "key": "ג"
    },
    "d": {
        "small": 4,
        "regular": 4,
        "index": 4,
        "absolute_index": 4,
        "key": "ד"
    },
    "e": {
        "small": 5,
        "regular": 5,
        "index": 5,
        "absolute_index": 5,
        "key": "ה"
    },
    "f": {
        "small": 6,
        "regular": 6,
        "index": 6,
        "absolute_index": 6,
        "key": "ו"
    },
    "g": {
        "small": 7,
        "regular": 7,
        "index": 7,
        "absolute_index": 7,
        "key": "ז"
    },
    "h": {
        "small": 8,
        "regular": 8,
        "index": 8,
        "absolute_index": 8,
        "key": "ח"
    },
    "i": {
        "small": 9,
        "regular": 9,
        "index": 9,
        "absolute_index": 9,
        "key": "ט"
    },
    "j": {
        "small": 1,
        "regular": 10,
        "index": 10,
        "absolute_index": 10,
        "key": "י"
    },
    "k": {
        "small": 2,
        "regular": 20,
        "index": 11,
        "absolute_index": 11,
        "key": "כ"
    },
    "l": {
        "small": 3,
        "regular": 30,
        "index": 12,
        "absolute_index": 12,
        "key": "ל"
    },
    "m": {
        "small": 4,
        "regular": 40,
        "index": 13,
        "absolute_index": 13,
        "key": "מ"
    },
    "n": {
        "small": 5,
        "regular": 50,
        "index": 14,
        "absolute_index": 14,
        "key": "נ"
    },
    "o": {
        "small": 6,
        "regular": 60,
        "index": 15,
        "absolute_index": 15,
        "key": "ס"
    },
    "p": {
        "small": 7,
        "regular": 70,
        "index": 16,
        "absolute_index": 16,
        "key": "ע"
    },
    "q": {
        "small": 8,
        "regular": 80,
        "index": 17,
        "absolute_index": 17,
        "key": "פ"
    },
    "r": {
        "small": 9,
        "regular": 90,
        "index": 18,
        "absolute_index": 18,
        "key": "צ"
    },
    "s": {
        "small": 1,
        "regular": 100,
        "index": 19,
        "absolute_index": 19,
        "key": "ק"
    },
    "t": {
        "small": 2,
        "regular": 200,
        "index": 20,
        "absolute_index": 20,
        "key": "ר"
    },
    "u": {
        "small": 3,
        "regular": 300,
        "index": 21,
        "absolute_index": 21,
        "key": "ש"
    },
    "v": {
        "small": 4,
        "regular": 400,
        "index": 22,
        "absolute_index": 22,
        "key": "ת"
    },
    "w": {
        "small": 5,
        "regular": 500,
        "index": 23,
        "absolute_index": 23,
        "key": "ת"
    },
    "x": {
        "small": 6,
        "regular": 600,
        "index": 24,
        "absolute_index": 24,
        "key": "ת"
    },
    "y": {
        "small": 7,
        "regular": 700,
        "index": 25,
        "absolute_index": 25,
        "key": "ת"
    },
    "z": {
        "small": 8,
        "regular": 800,
        "index": 26,
        "absolute_index": 26,
        "key": "ת"
    },
}

export default english_letters;
