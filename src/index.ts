const person = {name: "이석환", age: 22, gender: "male"};
const greet = (name: string, age: number, gender: string): string => {
    return `Hello ${name}, you are ${age}, you are a ${gender}`;
};

console.log(greet(person));

export {};