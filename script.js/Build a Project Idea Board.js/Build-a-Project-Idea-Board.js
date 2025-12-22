/**
 * Project Status Constant
 * Defines the possible states for a project idea.
 */
const projectStatus = {
  PENDING: { description: "Pending Execution" },
  SUCCESS: { description: "Executed Successfully" },
  FAILURE: { description: "Execution Failed" }
};

/**
 * Class representing a single Project Idea
 */
class ProjectIdea {
  constructor(title, description) {
    this.title = title;
    this.description = description;
    // Default status is set to PENDING
    this.status = projectStatus.PENDING;
  }

  /**
   * Updates the project's current status
   * @param {Object} newStatus - The status from the projectStatus object
   */
  updateProjectStatus(newStatus) {
    this.status = newStatus;
  }
}

/**
 * Class representing a Board that holds multiple Project Ideas
 */
class ProjectIdeaBoard {
  constructor(title) {
    this.title = title;
    // Array to store instances of ProjectIdea
    this.ideas = [];
  }

  /**
   * Adds a new project idea to the board
   * @param {ProjectIdea} ideaInstance 
   */
  pin(ideaInstance) {
    this.ideas.push(ideaInstance);
  }

  /**
   * Removes a specific project idea from the board
   * @param {ProjectIdea} ideaInstance 
   */
  unpin(ideaInstance) {
    this.ideas = this.ideas.filter((item) => item !== ideaInstance);
  }

  /**
   * Returns the total count of ideas on the board
   */
  count() {
    return this.ideas.length;
  }

  /**
   * Formats the board details and its ideas into a single string
   * @returns {string} Formatted board summary
   */
  formatToString() {
    let output = `${this.title} has ${this.count()} idea(s)\n`;
    
    // Append each idea's details following the specific format
    this.ideas.forEach((idea) => {
      output += `${idea.title} (${idea.status.description}) - ${idea.description}\n`;
    });

    return output;
  }
}