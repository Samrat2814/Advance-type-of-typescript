{
    // -----------------------------
    // GENERIC ARRAY TYPE
    // -----------------------------
  
    // Define a generic type that can hold an array of any type `T`
    // It works like: GenericArray<number> becomes number[]
    type GenericArray<T> = Array<T>;
  
    // ✅ Example: Array of numbers using generics
    const rollNumbers: GenericArray<number> = [3, 6, 8];
  
    // ✅ Example: Array of strings using generics
    const mentors: GenericArray<string> = ["mr. x", "mr. y", "mr. z"];
  
    // ✅ Example: Array of booleans using generics
    const boolArray: GenericArray<boolean> = [true, false, true];
  
    // ✅ Example: Array of objects using generics
    const user: GenericArray<{ name: string; age: number }> = [
      {
        name: 'samrat',
        age: 100,
      },
      {
        name: 'siam',
        age: 25
      }
    ];
  
    // -----------------------------
    // GENERIC TUPLE TYPE
    // -----------------------------
  
    // Define a generic type for a tuple (pair) of two values, x and y
    // Example: GenericTuple<string, number> becomes [string, number]
    type GenericTuple<x, y> = [x, y];
  
    // ✅ Example: Tuple of two strings
    const Human: GenericTuple<string, string> = ['mr.x', 'mr. y'];
  
    // ✅ Example: Tuple of number and object
    const UserwithId: GenericTuple<number, { name: string; email: string }> = [
      1234,
      {
        name: "samrat",
        email: 'aslamsamrat@gmail.com'
      }
    ];
  }
  