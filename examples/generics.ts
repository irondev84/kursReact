/* Generics */

const arr1 = [123, 123, 123];
const arr2 = ["ala", "ma", "kota"];
const arr3 = [123, "ma", []];

const x = arr1[0]; // number


// function takeFirstNumber(arr: number[]): number { return arr[0] }
// function takeFirstString(arr: string[]): string { return arr[0] }

function takeFirst<T>(arr: T[]): T { return arr[0] }


const first1 = takeFirst<number>([123, 123, 123]) // number
const first2 = takeFirst(['a', 'b'])
const first3: boolean = takeFirst([true])


function zapamietaj<const T>(v: T) {
    return function odczytaj() {
        return v
    }
}
const domkniecie = zapamietaj('placki')
const result = domkniecie() 