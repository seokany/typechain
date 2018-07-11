    # Typechain
    
    Learning Typescript by making a Blockchain with it

    ## 2. Setting Typescript Up
    ### Node.js는 Typescript를 이해 하지 못하기 때문에 일반적인 JS code로 컴파일해줘야 한다.
        - yarn global add typescript
        - tsconfig.json => typescript -> how to compile JavaScript => give some options
        - index.ts
        - command : tsc => .ts ->compile->make-> index.js , index.js.map
        - package.json => "script":{
            "start": "node index.js",
            "prestart": "tsc" 
            yarn start를 할때마다 yarn은 prestart를 실행시키고 start를 실행 }
    #### tsconfig.json 파일 option 알아보기.

    ## 1. Introduction and What are we building
        - README.md
        - yarn init => package.json
