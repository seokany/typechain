# Typechain
    
Learning Typescript by making a Blockchain with it

## 3. First steops with Typescript
### Typescript의 마법은 Typed 언어 이다. 
### 이는 내가 사용하는 것이 어떤 종류의 변수, 데이터 인지 설정해줘야 한다.
```ts
    const greet = (name, age, gender?) => {
        console.log(`Hello ${name}, You are ${age}, You are a ${gender}`);
    }
    greet(name, age, gender);
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
