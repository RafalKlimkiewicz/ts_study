module.exports = {
    "roots" : ["src"],
    "transform": { "^.+\\.tsx?$": "ts-jest" },
    preset: 'ts-jest',
    testEnvironment: 'node',
}

//npx jest --watchAll     
//npx jest      /runing test
