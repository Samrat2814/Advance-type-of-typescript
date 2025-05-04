{
    // ✅ Regular function without generics
    // Takes a string and returns a string array
    const createArray = (param: string): string[] => {
      return [param];
    };
  
    const res1 = createArray("Bangladesh"); // Output: ["Bangladesh"]
  
    // ✅ Generic function - works with any type (T)
    const createArrayWithGeneric = <T>(param: T): T[] => {
      return [param]; // Returns an array of the same type as the input
    };
  
    const resGeneric = createArrayWithGeneric<string>("bangladesh"); // Output: ["bangladesh"]
  
    // ✅ Defining a type for user object
    type User = {
      id: number;
      name: string;
    };
  
    // ⬇️ Passing an object of type User to a generic function
    const resGenericObj = createArrayWithGeneric<User>({
      id: 222,
      name: "samrat",
    });
    // Output: [{ id: 222, name: "samrat" }]
  
    // ✅ Generic function with **tuple** return type
    // T = type of first parameter, Q = type of second parameter
    const createArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
      return [param1, param2]; // Returns a tuple [T, Q]
    };
  
    const res10 = createArrayWithTuple<string, number>("Bangladesh", 222);
    // Output: ["Bangladesh", 222]
  
    const resTuple = createArrayWithTuple<string, { name: string }>(
      "bangladesh",
      { name: "samrat" }
    );
    // Output: ["bangladesh", { name: "samrat" }]
  
    // ✅ Function to add course to any student object using generics
    const addCourseToStudent = <T>(student: T) => {
      const course = 'next level web development'; // 📘 Fixed course name
  
      // 🧠 Spread the original student properties and add `course`
      return {
        ...student,
        course
      };
    };
  
    // Using `addCourseToStudent` with different student shapes
  
    const student1 = addCourseToStudent({
      name: "samrat",
      email: 'aslam@gmail.com',
      type: 'backend'
    });
    /*
      Output:
      {
        name: "samrat",
        email: "aslam@gmail.com",
        type: "backend",
        course: "next level web development"
      }
    */
  
    const student2 = addCourseToStudent({
      name: "Aslam",
      email: 'aslam7@gmail.com',
      type: 'backend',
      watch: "apple"
    });
    /*
      Output:
      {
        name: "Aslam",
        email: "aslam7@gmail.com",
        type: "backend",
        watch: "apple",
        course: "next level web development"
      }
    */
  }
  