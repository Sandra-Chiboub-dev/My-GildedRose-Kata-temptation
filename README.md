# Gilded Rose

This is the Gilded Rose kata in JavaScript with Jest

## Getting started

Install dependencies

```sh
npm install
```

## Running tests

To run all tests

```sh
npm test
```

To run all tests in watch mode

```sh
npm run test:watch
```

To generate test coverage report

```sh
npm run test:coverage
```
##  Explanation

I just created my GitHub account so I am writing here my reasoning
```sh
. I started with unit tests to change the test cases and add function call from texttest_fixture file and changes the expected result by adding match the snapshot

. Then I separed the cases of 'Aged Brie' (the cheese) 'Backstage' (The ticket) and the 'Sulfuras' (The legend) in several functions, one for each and started adding the test cases and refactoring the code  

. I added a switch case instruction so to call the different functions in the main function updateQuality  

. Next I added he case of 'Conjured' the nex item; i added it's logic and added a mock data in unit test  

. I made sure that the code coverage by unit test in more than 80%; 100% here  

. I had an issue with constructor; it showed that the line of constructor is not covered so that's why I added the decorator // fix-istanbul-decorators.js
/* istanbul ignore next */ to ignore it.. but if you have any other solution than the decorator please let me know I would be glad to learn from you..
Thanks in advance for reviewing my code  