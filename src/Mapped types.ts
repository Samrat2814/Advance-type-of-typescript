{
    // ✅ 1. Example: convert array of numbers to strings using .map
    const arrOfNumber: number[] = [1, 2, 3, 4];
  
    // .map() loops through each number and converts it to string
    const arrOfStrings: string[] = arrOfNumber.map(number => number.toString());
  
    // ✅ 2. Original type with number values
    type AreaNumber = {
      height: number;
      width: number;
    };
  
    // ✅ 3. Mapped type: loops through all keys in T and assigns the same value types
    // This just recreates the object exactly
    type AreaString<T> = {
      [key in keyof T]: T[key];
    };
  
    // ✅ 4. Now use AreaString with a custom object type:
    // { height: string, width: number }
    const area1: AreaString<{ height: string; width: number }> = {
      height: "100",  // ✅ must be a string
      width: 50       // ✅ must be a number
    };
  
    // ✅ It worked because the type AreaString just copies the key-value types from the input type
  }
  