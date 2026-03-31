class FccGlobal {
    // Static property: Shared by ALL instances
    static totalStudents = 0;
    constructor(public name: string) {
    // We access static members using the Class name, not 'this'
    FccGlobal.totalStudents++;
    }

    // Static method: A utility function
    static getSystemInfo(): void {
        console.log("FreeCodeCamp System v3.0 - Stable");
    }

}

// 1. Call static method WITHOUT creating an object

FccGlobal.getSystemInfo();

// 2. Create some students
const s1 = new FccGlobal("Hedi");
const s2 = new FccGlobal("Alice");
const s3 = new FccGlobal("Bob");

// 3. Access the shared counter
console.log(`Total students in system: ${FccGlobal.totalStudents}`);