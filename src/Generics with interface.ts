{
    // ✅ This is a **generic interface** called Developer.
    // T = type of smartwatch
    // X = type of bike (optional, default is null)
    interface Developer<T, X = null> {
      name: string;
  
      // 💻 Developer's computer details
      computer: {
        brand: string;
        model: string;
        releaseYear: number;
      };
  
      // ⌚ Smartwatch of the developer, generic type T
      smartWatch: T;
  
      // 🏍️ Optional bike of the developer, generic type X (can be passed or ignored)
      bike?: X;
    }
  
    // ✅ EmilabWatch is a type for smartwatches with analog display
    type EmilabWatch = {
      brand: string;
      model: string;
      display: string;
    };
  
    // ✅ Creating a developer with EmilabWatch (T) and no bike (X = default = null)
    const poorDeveloper: Developer<EmilabWatch> = {
      name: "samrat",
      computer: {
        brand: "asus",
        model: "z book",
        releaseYear: 2013,
      },
      smartWatch: {
        brand: "emilab",
        model: "kwc",
        display: "analog", // 🕒 Display type is a simple string (like 'analog')
      },
      // ❌ No bike provided (bike is optional)
    };
  
    // ✅ AppleWatch interface for smartwatches with health features
    interface AppleWatch {
      brand: string;
      model: string;
      heartTrack: boolean; // ❤️ Tracks heart
      sleepTrack: boolean; // 😴 Tracks sleep
    }
  
    // ✅ Bike interface
    interface Bike {
      model: string;
      engine: string;
    }
  
    // ✅ Creating a rich developer with AppleWatch (T) and Bike (X)
    const richDeveloper: Developer<AppleWatch, Bike> = {
      name: "rich",
      computer: {
        brand: "apple",
        model: "mac book",
        releaseYear: 2015,
      },
      smartWatch: {
        brand: "rolex",
        model: "kwc",
        heartTrack: true,
        sleepTrack: true,
      },
      bike: {
        model: 'ktm',
        engine: '100cc',
      }
    };
  }
  