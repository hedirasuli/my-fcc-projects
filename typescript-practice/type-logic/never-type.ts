// A function that returns 'never' because it stops the code
function crashApp (message: string): never {
    throw new Error(message);
}

// A normal function for comparison
function sayHello(): void {
    console.log("App is Starting");
}

// 1. Run this
sayHello();

// 2. Uncomment the line below to see it in action
// crashApp("System Overload! Shutting down.");

// 3. This line will NEVER run if the function above is called
// console.log("Can you see me?");