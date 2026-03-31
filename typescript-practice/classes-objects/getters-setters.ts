class FccProject {
    private _score: number = 0; // Convention: private fields often start with _

    constructor(public title: string) {}

    // Getter: Reading the score
    get score(): number {
        return this._score;
    }

    // Setter: Writing the score with a GUARD
    set score(newScore: number) {
        if (newScore >= 0 && newScore <= 100) {
            this._score = newScore;
            console.log(`Score for ${this.title} updated to ${newScore}`);
        } else {
            console.log("Error: Score must be between 0 and 100!");
        }
    }
}

const myProject = new FccProject("Calculator");

// Using the Setter (looks like assigning to a property, but calls the function)
myProject.score = 85;  // Success
myProject.score = -10; // Error message!

// Using the Getter
console.log(`Current Score: ${myProject.score}`);