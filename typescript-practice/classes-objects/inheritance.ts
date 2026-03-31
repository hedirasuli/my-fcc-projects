class FccMember {
    // Protected: Children can see it, outsiders cannot
    protected memberId : string;
    constructor(public name: string, Id: string) {
        this.memberId = Id;
    }

    displayBaseInfo(): void {
        console.log(`Member : ${this.name}`);
    }
}

// Teacher INHERITS from FccMember
class Teacher extends FccMember{
    constructor(name: string, id: string, public subject: string) {
        // super() passes data to the Parent constructor
        super(name, id);
    }

    showDetailedInfo(): void{
        // We can access memberId because it is PROTECTED, not private
        console.log(`Teacher ${this.name} (ID: ${this.memberId}) teaches ${this.subject}`);
    }
}

// Testing
const myTeacher = new Teacher("Hedi", "T-505", "TypeScript");
myTeacher.displayBaseInfo();   // Method from Parent
myTeacher.showDetailedInfo(); // Method from Child

// Error Check: Try accessing protected member from outside
//console.log(myTeacher.memberId); // This will cause a Red Line in VS Code