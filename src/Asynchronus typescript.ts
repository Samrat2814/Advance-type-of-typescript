{
    // ✅ 1. Define a TypeScript type for the Todo item
    // This describes the shape of a todo object returned from the API
    type Todo = {
      id: number;
      userId: number;
      title: string;
      completed: boolean;
    };
  
    // ✅ 2. Define an async function that fetches a todo item from an API
    // This function returns a Promise that resolves to a Todo type
    const getToDo = async (): Promise<Todo> => {
      // Use fetch() to call the API
      const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  
      // Convert the raw response into JSON
      const data = await res.json();
  
      // Return the parsed data (TypeScript understands it's a Todo because of the return type)
      return data;
    };
  
    // ✅ 3. A custom Promise that returns a string
    // You are manually creating a Promise that resolves to the string "something"
    const createPromise = (): Promise<string> => {
      return new Promise<string>((resolve, reject) => {
        const data: string = "something";
  
        // If data exists, resolve the promise with the data
        if (data) {
          resolve(data); // will be received in `await createPromise()`
        } else {
          // If there's an error, reject the promise
          reject("failed to load data");
        }
      });
    };
  
    // ✅ 4. An async function to call the custom promise
    const showData = async () => {
      const data = await createPromise(); // Wait for the promise to finish
      return data;
  
      // ❌ This line will never run because it's after return
      // console.log(data);
    };
  
    // ✅ 5. Actually call the async function to see the result
    // Use .then() to handle the result since top-level await isn't used
    showData().then((data) => {
      console.log("Result from showData():", data);
    });
  
    // ✅ Bonus (optional): You could also call getToDo and log its result
    getToDo().then((todo) => {
      console.log("Fetched Todo:", todo);
    });
  }
  