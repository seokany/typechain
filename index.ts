const name = "이석환",
    age = 22,
    gender = "male";

const greet = (name, age, gender) => {
// const greet = (name, age, gender?)
    console.log(`Hello ${name}, you are ${age}, you are a ${gender}`);
};

greet(name, age, gender);
// greet(name, age);
// Hello 이석환, you are 22, you are a undefined
// typescript의 강력한 기능중 하나!
// typescript function 파라미터에  arguments가 뭔지 알 수 있다. 
// 이게 선택적인지 아닌지도!
export {};