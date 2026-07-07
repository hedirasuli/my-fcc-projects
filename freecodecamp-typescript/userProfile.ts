/**
 * TYPE-SAFE USER PROFILE WORKSHOP
 * This project demonstrates primitive types, object types, optional properties,
 * array types, and dynamic objects using the Record utility type in TypeScript.
 */

// ==========================================
// Part 1: User Profile Object Definition
// ==========================================

// Define the strict shape of the profile object using an inline object type
const profile: {
  username: string;
  age: number;
  isLoggedIn: boolean;
  bio?: string; // Optional property marked with '?'
  programmingLanguages: string[]; // Array of strings
} = {
  username: "codeLearner",
  age: 25,
  isLoggedIn: false,
  programmingLanguages: ["JavaScript", "Python", "C++"]
};

// Log the final profile object to the console
console.log(profile);


// ==========================================
// Part 2: Dynamic User Roles Configuration
// ==========================================

// Define a flexible role system using the Record utility type.
// Every key must be a string, and every value must strictly be a string.
const userRoles: Record<string, string> = {
  admin: "full-access",
  editor: "limited-access",
  viewer: "read-only",
  moderator: "medium-access",
  guest: "read-only" // This value was fixed from a number to a string to satisfy type safety
};

// Log the userRoles object to the console
console.log(userRoles);