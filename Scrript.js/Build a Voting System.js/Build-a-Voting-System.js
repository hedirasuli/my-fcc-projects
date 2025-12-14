// User Story: Initialize a poll variable to a new Map object.
const poll = new Map();

/**
 * Adds a new option to the poll with an empty Set to track voters.
 * @param {string} option - The poll option to add.
 * @returns {string} A confirmation or error message.
 */
function addOption(option) {
    // If you try to add an empty option
    if (!option) {
        return "Option cannot be empty.";
    }

    // If the option already exists
    if (poll.has(option)) {
        return `Option "${option}" already exists.`;
    }

    // If the option does not already exist, add it with an empty Set as its value
    poll.set(option, new Set());
    return `Option "${option}" added to the poll.`;
}

/**
 * Records a vote for a specific option by a unique voter.
 * @param {string} option - The poll option to vote for.
 * @param {string|number} voterId - A unique ID for the voter.
 * @returns {string} A confirmation or error message.
 */
function vote(option, voterId) {
    // If the option does not exist in the poll
    if (!poll.has(option)) {
        return `Option "${option}" does not exist.`;
    }

    const voters = poll.get(option);

    // If the voter has already voted
    if (voters.has(voterId)) {
        return `Voter ${voterId} has already voted for "${option}".`;
    }

    // If the voter has not voted, add voterId to the Set
    voters.add(voterId);
    return `Voter ${voterId} voted for "${option}".`;
}

/**
 * Returns the poll results in a formatted string.
 * @returns {string} The formatted poll results string.
 */
function displayResults() {
    let results = "Poll Results:";

    // Iterate over the Map entries
    for (const [option, voters] of poll.entries()) {
        const voteCount = voters.size;
        results += `\n${option}: ${voteCount} votes`;
    }

    return results;
}


// --- Setup to Fulfill Requirements (At least three options and three votes) ---

// User Story: Your poll should have at least three options.
addOption("Frontend Frameworks (React, Vue, Angular)");
addOption("Backend Languages (Node.js, Python, Java)");
addOption("Database Systems (SQL, NoSQL)");
addOption("Frontend Frameworks (React, Vue, Angular)"); // Test already exists

// User Story: Your poll should have at least three votes.
vote("Frontend Frameworks (React, Vue, Angular)", "user_101");
vote("Backend Languages (Node.js, Python, Java)", "user_202");
vote("Frontend Frameworks (React, Vue, Angular)", "user_303");
vote("Backend Languages (Node.js, Python, Java)", "user_101"); // User 101 can vote for a different option
vote("Frontend Frameworks (React, Vue, Angular)", "user_101"); // Test duplicate vote (should fail)

// Example Output
console.log(displayResults());