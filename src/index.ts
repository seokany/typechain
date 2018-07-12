interface Human {
    name: string,
    age: number,
    gender: string
}

const person = {name: "이석환", age: 22, gender: "male"};
const greet = (person: Human): string => {
    return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}`;
};

console.log(greet(person));

export {};