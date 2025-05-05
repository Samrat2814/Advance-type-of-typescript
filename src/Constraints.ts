{
  // ✅ Function using GENERIC with CONSTRAINTS
  // <T extends {id:number; name:string; email:string;}> means:
  // T can be any object, but it MUST at least have `id`, `name`, and `email` fields.
  const addCourseToStudent = <
    T extends { id: number; name: string; email: string }
  >(
    student: T
  ) => {
    const course = "next level web development"; // 🧾 Fixed course name for all students

    // 🧠 Use spread operator to copy all properties from the input student,
    // and add a new property `course`
    return {
      ...student,
      course,
    };
  };

  // ✅ Example 1: Simple student object that satisfies the constraint
  const student3 = addCourseToStudent({
    id: 444,
    name: "samrat",
    email: "samrat@gmail.com",
  });
  /*
      Output:
      {
        id: 444,
        name: "samrat",
        email: "samrat@gmail.com",
        course: "next level web development"
      }
    */

  // ✅ Example 2: Student with extra `type` field
  // Still valid because it includes id, name, email
  const student1 = addCourseToStudent<{
    id: number;
    name: string;
    email: string;
    type: string;
  }>({
    id: 1,
    name: "samrat",
    email: "aslam@gmail.com",
    type: "backend",
  });
  /*
      Output:
      {
        id: 1,
        name: "samrat",
        email: "aslam@gmail.com",
        type: "backend",
        course: "next level web development"
      }
    */

  // ✅ Example 3: Student with even more properties like `watch`
  // Still works because it meets the minimum required fields (id, name, email)
  const student2 = addCourseToStudent({
    id: 5,
    name: "Aslam",
    email: "aslam7@gmail.com",
    type: "backend",
    watch: "apple",
  });
  /*
      Output:
      {
        id: 5,
        name: "Aslam",
        email: "aslam7@gmail.com",
        type: "backend",
        watch: "apple",
        course: "next level web development"
      }
    */
}
