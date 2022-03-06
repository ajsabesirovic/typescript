// PRIMITIVE TYPES
let age: number = 20;
age = 15

let username:string;
let isInstructor: boolean;

// MORE COMPLEX TYPES

let hobbies : string[];
hobbies = ['a','b']
let hobbies : boolean[];
let hobbies : number[];

let person: any;

let person: {
    name: string,
    age:number
}

person = {
    name : 'AJSA',
    age: 17
}

let people: {
    name: string,
    age: number
}[];

// TYPE INFERENCE
let course = 'javascript crash course'
// course = 2


// TYPE UNION
let kurs : string|number = 'js'
kurs = 7
// kurs =[]
 

// TYPE ALIAS
type Person = {
    name: string;
    age: number
}

let pers : Person


//GENERICS
function insert <T>(array: T[], value: T){
    const newArr = [value,...array]
    return newArr;
};


let updatedArr = insert([1,2,3],2)