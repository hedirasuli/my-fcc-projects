// Define a union type that can be a number (0-100) or a specific status string
let fccprogres: number | "not-started" | "completed";

// Scenario 1: User just started the course
fccprogres = "not-started";
console.log("status", fccprogres);

// Scenario 2: User is in the middle of the Responsive Web Design cert
fccprogres = 55;
console.log("progres porsentage:", fccprogres + "%");

// Scenario 3: User finished the certification
fccprogres = "completed";
console.log("status", fccprogres);

