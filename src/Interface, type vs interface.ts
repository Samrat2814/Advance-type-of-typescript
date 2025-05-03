{
    // -----------------------------
    // OBJECT TYPE DEFINITION
    // -----------------------------
  
    // ✅ Using `type` to define an object structure
    type User1 = {
      name: string;
      age: number;
    };
  
    // ✅ Using `interface` to define the same structure
    interface User2 {
      name: string;
      age: number;
    }
  
    // ✅ Extending an object using `type` (with intersection: &)
    type UserWithRole = User1 & {
      role: string;
    };
  
    // ✅ Extending an object using `interface` (with `extends`)
    interface UserWithRole2 extends User2 {
      role: string;
    }
  
    // ✅ Example object using the interface
    const user1: UserWithRole2 = {
      name: "samrat",
      age: 24,
      role: "manager",
    };
  
    // -----------------------------
    // ARRAY TYPE DEFINITION
    // -----------------------------
  
    // ✅ Using `type` to define an array of numbers
    type Roll1 = number[];
  
    // ✅ Using `interface` to define an array-like object
    interface Roll2 {
      [index: number]: number; // index signature
    }
  
    // ✅ Example usage
    const rollNumber: Roll1 = [1, 2, 3];
  
    // -----------------------------
    // FUNCTION TYPE DEFINITION
    // -----------------------------
  
    // ✅ Using `type` to define a function signature
    type Add = (num1: number, num2: number) => number;
  
    // ✅ Using `interface` to define a function signature
    interface Add1 {
      (num1: number, num2: number): number;
    }
  
    // ✅ Example function using the interface
    const add: Add1 = (num1, num2) => num1 + num2;
  
    // -----------------------------
    // TYPE ASSERTION EXAMPLE
    // -----------------------------
  
    type CustomError = {
      message: string;
    };
  
    try {
      // throw new Error("Something went wrong");
    } catch (error) {
      // ✅ Type assertion: telling TypeScript "this error has a message property"
      console.log((error as CustomError).message);
    }
  }
  