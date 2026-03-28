// Define an Enum for Course Status
enum CourseStatus {
    NotStarted , // Default value: 0
    InProgress, // Default value: 1
    Copmleted  // Default value: 2
}

// Using the Enum
let myStatus = CourseStatus.InProgress;

// Log the result
console.log("Current Status Value:", myStatus)

// Check with logic
if(myStatus === CourseStatus.InProgress) {
    console.log("Keep Coding ! You are doing great.");
}