/**
 * Calculate the average of an array of scores.
 * @param {number[]} scores - Array of student scores
 * @returns {number} - Average score
 */

function getAverage(scores) {
    let total = 0;
    for (let i = 0; i < scores.length; i++) {
        total += scores[i];
    }
    return total / scores.length;
}

/**
 * Convert numeric score to letter grade.
 * @param {number} score - Student's score (0-100)
 * @returns {string} - Letter grade (A+, A, B, C, D, or F)
 */

function getGrade(score) {
    if (score === 100) {
        return "A+";
    } else if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}

/**
 * Check if a student passed (grade not "F").
 * @param {number} score - Student's score
 * @returns {boolean} - True if passing, false if failing
 */

function hasPassingGrade(score) {
    const grade = getGrade(score); 

    return grade !== "F"; 
}

/**
 * Generate student result message.
 * @param {number[]} scores - All class scores
 * @param {number} studentScore - Individual student's score
 * @returns {string} - Formatted message with class avg, grade, and pass/fail status
 */
function studentMsg(scores, studentScore) {
    const classAvg = getAverage(scores);
    const studentGrade = getGrade(studentScore);
    const didPass = hasPassingGrade(studentScore);

    let passStatus;
    if (didPass) {
        passStatus = "You passed the course.";
    } else {
        passStatus = "You failed the course.";
    }

 
    return `Class average: ${classAvg}. Your grade: ${studentGrade}. ${passStatus}`;
}