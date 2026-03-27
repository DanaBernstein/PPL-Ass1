## Part 1: Theoretical Questions

Submit the solution to this part as `part1.md`.

### [25 points] Question 1.1

1. Explain in simple words the following programming paradigms:

   1. [5 points] Imperative
    This paradigm treats a program as a sequence of explicit commands that change the program's state.
    It focuses on how to achieve a goal by providing step-by-step instructions.
    A key characteristic is the use of mutable variables, where the value of data can be modified throughout the execution.
    Examples of imperative languages include Python, C++, and Java.

   1. [5 points] Object Oriented
    This paradigm is based on the concept of "objects," which bundle together data (attributes) and the code that operates on that data (methods).
    It treats a program as a collection of interacting objects that communicate by passing messages to one another. 
    Key features include Classes, which act as blueprints for objects, as well as Inheritance and Interfaces, which allow for code reuse and structured design.
    Common examples include Java, C++, and Python.

   1. [5 points] Functional
    In this paradigm, a program is treated as a single expression or a sequence of expressions. 
    Executing the program means evaluating these expressions to find their values, rather than executing a series of imperative commands.
    Functions are treated as values, meaning they can be passed as arguments to other functions or returned as results. 
    Since data is immutable and there is no assignment to existing variables, there are no side effects. 
    This leads to easier code verification, safer parallel programming, and a more predictable code design.
    Common examples include Scheme, Haskell, and JavaScript.

1. [5 points] How does the object oriented paradigm improve over the imperative paradigm?

  The Object-Oriented Programming (OOP) paradigm introduces several key improvements over the traditional imperative approach:

  Encapsulation (Information Hiding): In the imperative paradigm, data is often unprotected and globally accessible, which leads to bugs when variables are changed unexpectedly. 
  OOP solves this by bundling data and methods into Objects. This ensures that data can only be modified through specific, controlled interfaces, protecting the internal state of the program.

  Modularity and Organization: Imperative code often ends up as a long, linear sequence of commands that is difficult to manage. 
  OOP organizes code into self-contained Classes and Objects. This makes the system much easier for us to navigate and maintain, as each part of the code has a clear and defined responsibility.

  Code Reusability and Reducing Redundancy (Inheritance): While imperative programming often leads to code duplication when similar logic is needed in different places, OOP uses Inheritance. 
  This allows a new class to acquire properties and behaviors from an existing one. By reusing code this way, we avoid duplication between objects and ensure that logic is defined in one place and shared across the system.

  Better Modeling of Tasks: OOP allows us to think in terms of "entities" rather than just a list of computer instructions. 
  This makes the transition from a specific task to actual code much more intuitive and structured.

1. [5 points] How does the functional paradigm improve over the object oriented paradigm?

  Immutability and Predictability: In OOP, an object's state can change throughout the program's execution, making it hard to track who changed what."Functional programming uses Immutable data, meaning once a value is created, it never changes. 
  This makes the code much more predictable and easier for us to understand and follow.

  Elimination of Side Effects: Functional programming focuses on functions that only depend on their input and produce no "side effects" (like modifying a global variable). 
  This makes debugging significantly simpler compared to OOP, where a method call might unintentionally alter the state of other objects.

  Safe Parallel Programming (Concurrency): This is a major advantage. In OOP, running multiple tasks in parallel is dangerous because two threads might try to modify the same object at the same time (leading to "Race Conditions"). 
  In the functional paradigm, since data is Immutable, there is no risk in multiple parts of the program accessing the same data simultaneously. 
  We don't need complex locks or synchronization, making parallel code much safer and faster to implement.

  Simplified Testing: Testing functional code is more straightforward because functions are self-contained and usually perform a single, specific task. This modularity means there are fewer places for errors to hide in each expression. 
  There is no need to set up complex object states or manage external dependencies; we simply provide a specific input and verify the output, making our unit tests faster and more reliable.

### [10 points] Question 1.2

Consider the following TypeScript function, which calculates the average price of all discounted products in a given inventory.

```ts
type Product = {
  name: string;
  price: number;
  discounted: boolean;
};

const getDiscountedProductAveragePrice = (inventory: Product[]): number => {
  let discountedPriceSum = 0;
  let discountedProductsCount = 0;

  for (const product of inventory) {
    if (product.discounted) {
      discountedPriceSum += product.price;
      discountedProductsCount++;
    }
  }

  if (discountedProductsCount === 0) {
    return 0;
  }

  return discountedPriceSum / discountedProductsCount;
};
```

This function uses an imperative approach with loops and conditional statements.

Refactor the function `getDiscountedProductAveragePrice` to adhere to the Functional Programming paradigm. Utilize the built-in array methods `map`, `filter`, and `reduce` to achieve the same functionality without explicit iteration and conditional checks.
Write the new function under the name `getDiscountedProductAveragePriceFP`.

**Important**: the new function should have the same signature.

**Note**: there are no tests for this question, and it will not be executed. The task here is to write the code in a functional way.

### [18 points] Question 1.3

Write the most general type for each expression, using type variables where applicable.
Guidelines:

- Arrays must be homogeneous.
- Arithmetic operations must be performed on numbers.
- Use generics where possible.
- Avoid using `any`.

1. [3 points] `(x, y) => x.some(y)`
2. [3 points] `x => x.map(y => y * 2)`
3. [3 points] `(x, y) => x.filter(y)`
4. [3 points] `x => x.reduce((acc, cur) => acc + cur, 0)`
5. [3 points] `(x, y) => x ? y[0] : y[1]`
6. [3 points] `(f,g) => x => f(g(x+1))`
