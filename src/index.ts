class Human {
    public name: string;
    public age: number;
    public gender: string;
    constructor(name: string, age: number, gender: string) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    };
};

const hubert = new Human("이석환", 22, "male");




interface Human {
    name: string,
    age: number,
    gender: string
}

const person = {name: "이석환", age: 22, gender: "male"};
const greet = (person: Human): string => {
    return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}`;
};

console.log(greet(hubert));

export {};