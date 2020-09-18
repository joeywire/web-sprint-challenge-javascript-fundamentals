# Sprint Challenge - JavaScript Fundamentals

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This challenge allows you to practice the concepts and techniques learned over the past week and apply them in project. This Sprint explored JavaScript Fundamentals. During this Sprint, you studied array methods, this keyword, prototypes, and class syntax. In your challenge this week, you will demonstrate proficiency by completing a survey of JavaScript problems.

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the sprint challenge. However, you are encouraged to follow the twenty-minute rule and seek support from your TL if you need direction. 

_You have **three hours** to complete this challenge. Plan your time accordingly._


## Introduction

You will notice there are several JavaScript files being brought into the index.html file.  Each of those files contain JavaScript problems you need to solve.  If you get stuck on something, skip over it and come back to it later.

In meeting the minimum viable product (MVP) specifications listed below, you should have a console full of correct responses to the problems given.

### Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons) and your team lead as the evaluate your solution.

## Interview Questions

Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. You might prepare by writing down your own answers before hand.

1. Briefly compare and contrast `.forEach` & `.map` (2-3 sentences max)

    `.forEach` is basically a more concise way to construct a for loop that iterates through each item in an array without stopping. It doesn't return a new array and a return statemnt is optional. `.map` returns a new array, needs a return keyword and is ideal for converting data. 

2. Explain the difference between a callback and a higher order function.

    A higer order function is a function that accepts another function (a callback) as an argument. 

3. What is closure?

    Closure is the integration of a function with its lexical environment (the data in the block our function was declared in). Therefor An `enclosed` function has acces to all the data withing its parent's scope - including variables. This is poweful because it lets us associate the data with a function that operates on that data. 

    BLUF: Closure gives an inner function access to an outer functions scope. 

4. Describe the four rules of the 'this' keyword.
    
    1. Window Binding:
        When operating in global scope or when no other rules apply `this` defaults to the window. Unless you are in `strict mode` in which case `this` will return undefined. 

    2. Implicit Binding:
        This is the most common rule for `this`. It applies to objects with methods - when the function/ method is invoked `this` looks to the left of the '.' and binds to that object. 

    3. Explicit Binding:
        When we explicitly tell `this` what to bind to using .call(), .apply() or .bind()
            .call() immediatly invokes the function and passes in arguments one by one i.e. `thisFunction.call(object);`
            .apply() immediatley invokes the function and passes in arguments as an array
            .bind() doesnt immediatly invoke the function - returns a new function to be invoked later. Pass in arguments one by one i.e `const binded = thisFunction.bind(object);` -- `binded();`

    4. New Binding 
        Using constructor functions and `new` creates a new object and `this` points to our newly created object. 

5. Why do we need super() in an extended class?
    super() needs to be used when extending a class so our new object can access and call the methods from it's parent object. Basically it passes the methods from parentObj/parentClass to childObj/childClass. 

You are expected to be able to answer questions in these areas. Your responses contribute to your Sprint Challenge grade. 

## Instructions

### Task 1: Project Set Up

- [ ] Create a forked copy of this project
- [ ] Add your team lead as collaborator on Github
- [ ] Clone your OWN version of the repository (Not Lambda's by mistake!)
- [ ] Create a new branch: git checkout -b `<firstName-lastName>`.
- [ ] Implement the project on your newly created `<firstName-lastName>` branch, committing changes regularly
- [ ] Push commits: git push origin `<firstName-lastName>`

### Task 2: Project Requirements

Your finished project must include all of the following requirements:

**Pro tip for this challenge: If something seems like it isn't working locally, copy and paste your code up to codepen and take another look at the console.**

#### Task A: Objects and Arrays

Test your knowledge of advanced array methods and callbacks.
* [ ] Use the [arrays-callbacks.js](challenges/arrays-callbacks.js) link to get started.  Read the instructions carefully!

#### Task B: Closure

This challenge takes a look at closures as well as scope. 
* [ ] Use the [closure.js](challenges/closure.js) link to get started. Read the instructions carefully!

#### Task C: Prototypes

Create constructors, bind methods, and create cuboids in this prototypes challenge.
* [ ] Use the [prototypes.js](challenges/prototypes.js) link to get started. Read the instructions carefully!

#### Task D: Classes

Once you have completed the prototypes challenge, it's time to convert all your hard work into classes.
* [ ] Use the [classes.js](challenges/classes.js) link to get started. Read the instructions carefully!

In your solutions, it is essential that you follow best practices and produce clean and professional results. Schedule time to review, refine, and assess your work and perform basic professional polishing including spell-checking and grammar-checking on your work. It is better to submit a challenge that meets MVP than one that attempts too much and does not.

### Task 3: Stretch Goals 

There are a few stretch problems found throughout the files, don't work on them until you are finished with MVP requirements!

## Submission format

Follow these steps for completing your project.

- [ ] Submit a Pull-Request to merge <firstName-lastName> Branch into master (student's  Repo). **Please don't merge your own pull request**
- [ ] Add your team lead as a reviewer on the pull-request
- [ ] Your team lead will count the project as complete after receiving your pull-request


