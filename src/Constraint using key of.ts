// ✅ Step 1: Define a type called Vehicle
// It tells TypeScript that any object of type Vehicle must have three keys:
// - bike (string), car (string), ship (string)
type Vehicle = {
    bike: string;
    car: string;
    ship: string;
  };
  
  // ✅ Step 2: Create union types
  // This manually lists the keys of Vehicle type
  type Owner = "bike" | "car" | "ship";  
  
  // This automatically extracts the keys of Vehicle using 'keyof' keyword
  type Owner2 = keyof Vehicle; // same as Owner
  
  // ✅ Step 3: Make a function to get a value from an object by key
  // But we want to make it safe using generics and keyof
  
  // Generic function:
  // T is a generic type representing the type of the object (e.g., Vehicle)
  // K extends keyof T means K must be a key from the object T (like 'bike', 'car', etc.)
  function getPropertyValue<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key]; // Return the value at the given key from the object
  }
  
  // ✅ Step 4: Create an actual object of type Vehicle
  const myVehicle: Vehicle = {
    bike: "Yamaha",
    car: "Tesla",
    ship: "Titanic"
  };
  
  // ✅ Step 5: Use the function with real values
  const result1 = getPropertyValue(myVehicle, "car"); // returns "Tesla"
  const result2 = getPropertyValue(myVehicle, "bike"); // returns "Yamaha"
  
  // ✅ result1 and result2 will have type 'string' and correct value from object
  
  console.log(result1); // Output: Tesla
  console.log(result2); // Output: Yamaha
  
  // ✅ Bonus: You can use the Owner2 type to restrict the keys
  function getPropertySafe(obj: Vehicle, key: Owner2) {
    return obj[key];
  }
  
  const result3 = getPropertySafe(myVehicle, "ship"); // returns "Titanic"
  console.log(result3); // Output: Titanic
  