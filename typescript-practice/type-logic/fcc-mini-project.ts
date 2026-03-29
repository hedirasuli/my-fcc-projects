
enum ProjectStatus {
    NotStarted = "NotStarted",
    InProgress = "InProgress",
    Completed = "Completed"
};

type StudentID = number | string;

interface Student {
    id: StudentID;
    name: string
    status: ProjectStatus;
}

// 1. Array of students
const fccStudents: Student[] = [
{ id: 101, name: "Hedi", status: ProjectStatus.InProgress },
{ id: "FCC-202", name: "Alice", status: ProjectStatus.NotStarted },
{ id: 303, name: "Bob", status: ProjectStatus.Completed}
];

// 2. Function to update and log status
function updateStudentStatus(student: Student, newStatus: ProjectStatus): void {
    student.status = newStatus;
    console.log(`Update: Student ${student.name} is now ${student.status}`);
}
// 3. Testing
updateStudentStatus(fccStudents[1]!, ProjectStatus.InProgress);

function printStudentInfo(student: Student): void {
    // Check the type of ID (Type Guard)
    if (typeof student.id === "string") {
        console.log(`[String ID System]: ${student.id.toUpperCase()}`);
    } else {
        console.log(`[Numeric ID System]: #${student.id}`);
    }
}

// Testing with different ID types
console.log("--- Student Info ---");
printStudentInfo(fccStudents[0]!); // Numeric ID
printStudentInfo(fccStudents[1]!); // String ID