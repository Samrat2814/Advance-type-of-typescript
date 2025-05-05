{
    // ✅ 1. Define basic types
    type a1 = number;
    type b1 = string;
  
    // ✅ 2. Conditional type
    // "x" will be true if "a1" extends null, otherwise false
    // number does NOT extend null, so:
    type x = a1 extends null ? true : false;  // ❌ false
  
    // ✅ 3. Nested conditional type
    // First: is a1 (number) extends null? ❌ No → move to else
    // Then: is b1 (string) extends undefined? ❌ No → move to else
    // Result: 'any'
    type y = a1 extends null 
      ? true 
      : b1 extends undefined 
        ? undefined 
        : any;  // ✅ So y = any
  
    // ✅ 4. Define a type for available vehicles
    type Sheikh = {
      bike: string;
      car: string;
      ship: string;
    }
  
    // ✅ 5. Create a generic type to check if a given key exists in 'Sheikh'
    // If T (like "car" or "tractor") is one of the keys of Sheikh,
    // then return true, otherwise return false
    type CheckVehicle<T> = T extends keyof Sheikh ? true : false;
  
    // ✅ 6. Use CheckVehicle with a value that is NOT a key
    type HasBike = CheckVehicle<"tractor">;  // ❌ "tractor" is NOT a key in Sheikh, so:
    // ✅ HasBike = false
  
    // If you try:
    type HasShip = CheckVehicle<"ship">;     // ✅ true
    type HasCar = CheckVehicle<"car">;       // ✅ true
    type HasPlane = CheckVehicle<"plane">;   // ❌ false
  }
  