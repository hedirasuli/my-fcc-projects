class FccCourse {
    // TypeScript automatically creates properties and assigns values!
    constructor(public title: string, public studentsCount: number) {}

    displayInfo(): void {
        console.log(`Course: ${this.title} has ${this.studentsCount} students.`);
    }
}

const myCourse = new FccCourse("TypeScript Pro", 1500);
myCourse.displayInfo();