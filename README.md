# Typechain
    
Learning Typescript by making a Blockchain with it

# 6 Classes on Typescript part One
## Class 를 이용하여 Interface와의 다른점을 찾아보자.
- src/index.ts =>\
```ts
    class Human {
        public name: string;
        private age: number;
        public gender: string;
        constructor(name: string, age: number, gender: string) {
            this.name = name;
            this.age = age;
            this.gender = gender;
        }
    }

    const hubert = new Human("Hubert", 22, "male" );

    console.log(greet(hubert));
```
- dist/index.js 를 보면 interface는 JS에서 사용되지 않음을 알수 있다.
- class는 코드를 컨트롤 할 수 있게 도와줌.

## 5 Interfaces on Typescript

### 5.02 Interface생성 및 Typescript 이해시키기!
- src/index.ts =>
```ts
    interface Human {
        name: string,
        age: number,
        gender: string
    };
    const person = {
        name: "이석환",
        age: 22,
        gender: "male"
    };
    const greet = (person:Human) => {
        return `Hello ${name}, You are ${age}, You are a ${gender}`
    };
    console.log(greet(person));

    export {};
```

### 5.01 object 넘기기 but, 실패!
####  실행 안됨. 하나의 argument가 아닌 세개의 argument를 예상하기 때문.
####  function에 object를 전달, 그리고 전달받은 object로 무언가 해야함.
- src/index.ts => 
```ts
    const person = {name: "탈룰라", age: 42, gender:"female"};
    const greet = (name:string, age:number, gender:string): string => {
        retrun `Hello ${name}, You are ${age}, You are a ${gender}`
    }
    console.log(greet(person));

    export {};
```

## 4 Types in Typescript

### 4.02 yarn start의 반복을 tsc-watch를 통해 실시간으로 확인하기로 변환!
- command : yarn add tsc-watch --dev
- package.json => 
```ts
    "scripts": {
        "start": "tsc-watch --onSuccess \" node dist /index.js \" "
    }
```
- tsconfig.json =>
```ts
    "include": ["src/**/*"]
    // 모든 파일을 src안에 compile하겠다.
    "compileOptions": {
        ...
        ...
        "outDir": "dist"
    }
```

### 4.01 함수안에 매개변수가 어떤 타입인지 알게 하기!
```ts
    const greet = (name:stinrg, age:number, gender:string): void => {
    // void => [ts] Type 'string' is not assignable to type 'void'
        console.log(`Hello ${name}, You are ${age}, You are a ${gender}`);
    };
    greet("이석환", "22", "soldier");
    // "22" => [ts] Argument of type '"22"' is not assignable to parameter fo type 'number'
    export {};
```

```ts
    const greet = (name:string, age:number, gender:string): string => {
        return `Hello ${name}, You are ${age}, You are a ${gender}`
    };
    console.log(greet("이석환", 22, "soldier"));

    export {};
```



## 3. First steops with Typescript
### Typescript의 마법은 Typed 언어 이다. 
### 이는 내가 사용하는 것이 어떤 종류의 변수, 데이터 인지 설정해줘야 한다.
```ts
    const greet = (name, age, gender?) => {
        console.log(`Hello ${name}, You are ${age}, You are a ${gender}`);
    }
    greet(name, age);
    export{};
```
Hello 이석환, You are 22, You are a undefined

typescript의 강력한 기능, function(함수)에 포함되어있는 parameter에 arguments가 뭔지 알 수 있다. 
이게 선택인지 아닌지도!


## 2. Setting Typescript Up
### Node.js는 Typescript를 이해 하지 못하기 때문에 일반적인 JS code로 컴파일해줘야 한다.
- yarn global add typescript
- tsconfig.json => typescript -> how to compile JavaScript => give some options
- index.ts
- command : tsc => .ts ->compile->make-> index.js , index.js.map
- package.json => 
```js
    "script":{
        "start": "node index.js",
        "prestart": "tsc" 
    }
```
yarn start를 할때마다 yarn은 prestart를 실행시키고 start를 실행 

#### tsconfig.json 파일 option 알아보기.

## 1. Introduction and What are we building
- README.md
- yarn init => package.json
