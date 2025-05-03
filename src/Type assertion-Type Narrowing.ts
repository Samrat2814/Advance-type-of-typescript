{
    // Type assertion means: "I KNOW the type better than TypeScript at this moment."
  
    // Declare a variable of type `any` (which means it can be anything)
    let anything: any;
  
    // Assign a string value
    anything = "next level web development";
  
    // Then assign a number value (this is allowed because `anything` is of type `any`)
    anything = 222;
  
    // This is a type assertion.
    // You are telling TypeScript: "Trust me, I know this is a number."
    // Without this, TypeScript might not let you use number-specific operations safely.
    anything as number;
  
    // --------------------------
    // Function to convert kg to gm
    // Accepts either a string or a number
    // Returns either a string or number or undefined
    const kgToGm = (value: string | number): string | number | undefined => {
  
      // If input is a string (like "2.5"), we first convert it to a float number
      if (typeof value === "string") {
        const convertedValue = parseFloat(value) * 1000;
        // Return result as a string message
        return `The converted value is: ${convertedValue}`;
      }
  
      // If input is a number, just multiply directly
      if (typeof value === "number") {
        return value * 1000;
      }
  
      // If value is not string or number (e.g. undefined), it will return undefined
    };
  
    // ----------------------------------
    // Calling the function with a number
    // Then using `as number` to tell TypeScript: "I know this will be a number."
    const result1 = kgToGm(1000) as number;
  
    // Calling the function with a string
    // Then using `as string` to say: "I know this will return a string."
    const result2 = kgToGm('1000') as string;
  
    // ----------------------------------
    // Defining a custom error type
    type CustomError = {
      message: string;
    };
  
    // Try-catch block for error handling
    try {
      // Intentionally empty or you can add error-throwing logic here
    } catch (error) {
      // Here we use type assertion again
      // We tell TypeScript: "Assume error is a CustomError object"
      console.log((error as CustomError).message);
    }
  }
  