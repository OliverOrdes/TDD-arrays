# Array Methods Intro

## Instructions

1. Choose one person in your group to share their screen.
   They will be in charge of typing your answers.
2. Select another person in the group to be responsible for sharing your answers
   with the class later on.
3. As a team, read each question out loud and reach a consensus on the answer
   before moving to the next question.

## Read and write arrow functions

The following snippet demonstrates how to turn a traditional function expression
into an **arrow function expression** step-by-step.

```js
// Traditional function expression
const triple = function (n) {
  return n * 3;
};

// Remove the word "function" and place arrow between the parameters and body
const triple = (n) => {
  return n * 3;
};

// If the body is a single return statement, the braces and the word "return" are optional.
const triple = (n) => n * 3;
```

1. How many parameters does `triple` have?
2. How would you call `triple` with the argument 5?

```js
const greet = (names) => {
  for (const name of names) {
    console.log(`Hello, ${name}.`);
  }
};
```

3. In a sentence, what does `greet` do?
4. Can the curly braces be removed from `greet`? Why or why not?
5. Transform `greet` back into a traditional function expression.

## Transform with `map`

```js
const sentence = ["sphinx", "of", "black", "quartz", "judge", "my", "vow"];
const getLength = word => word.length;

const map = (array, fn){
    const output = [];
    for (const element of array){
        const result = fn(element);
        output.push(result);
    }
    return output;
}
```

6. In `map`, what is being pushed into the `output` array?
7. Does `map` mutate the original array?
8. What would `map(sentence, getLength)` return?

## Select with `filter`

```js
const sentence = ["sphinx", "of", "black", "quartz", "judge", "my", "vow"];
const isShort = word => word.length <= 3;

const filter = (array, fn){
    const output = [];
    for (const element of array){
        if (fn(element)){
            output.push(element);
        }
    }
    return output;
}
```

9. In `filter`, what is being pushed into the `output` array?
10. Does `filter` mutate the original array?
11. What would `filter(sentence, isShort)` return?

## Combine with `reduce`

```js
const sentence = ["sphinx", "of", "black", "quartz", "judge", "my", "vow"];
const addLength = (total, word) => total + word.length;

const reduce = (array, fn, initial){
    let accumulator = initial ?? array[0];
    for (const element of array){
        accumulator = fn(accumulator, element);
    }
    return accumulator;
}
```

12. `??` is the **nullish coalescing operator**. It evaluates to the left side,
    unless the left side is null or undefined, in which case it evaluates to the right side.
    If `initial` is not provided, what value does `accumulator` start with?
13. What does `reduce` pass as arguments into `fn`?
14. What does `reduce` do with the return value of `fn`?
15. Does `reduce` mutate the original array?
16. What would `reduce(sentence, addLength, 0)` return?
