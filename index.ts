const greet = (name: string, age: number, gender: string): string => {
    return `Hello ${name}, you are ${age}, you are a ${gender}`;
};

console.log(greet("이석환", 23, "male"));

export {};