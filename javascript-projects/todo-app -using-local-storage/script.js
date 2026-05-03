// =================================================================
// 1. VARIABLE INITIALIZATION & DOM SELECTORS
// =================================================================

const taskForm = document.getElementById("task-form");
const confirmCloseDialog = document.getElementById("confirm-close-dialog");
const openTaskFormBtn = document.getElementById("open-task-form-btn");
const closeTaskFormBtn = document.getElementById("close-task-form-btn");
const addOrUpdateTaskBtn = document.getElementById("add-or-update-task-btn");
const cancelBtn = document.getElementById("cancel-btn");
const discardBtn = document.getElementById("discard-btn");
const tasksContainer = document.getElementById("tasks-container");
const titleInput = document.getElementById("title-input");
const dateInput = document.getElementById("date-input");
const descriptionInput = document.getElementById("description-input");

// Load data from localStorage upon app startup. 
// If nothing is stored, initialize as an empty array ([]). (Step 61)
const taskData = JSON.parse(localStorage.getItem("data")) || [];

let currentTask = {};


// =================================================================
// 2. UTILITY FUNCTIONS
// =================================================================

/**
 * @description Removes special characters (quotes and underscores) to prevent 
 * HTML breakage and ensure valid element IDs. (Steps 65-68)
 * @param {string} str The input string to sanitize.
 * @returns {string} The sanitized string.
 */
const removeSpecialChars = (str) => {
  // Removes single quotes ('), double quotes ("), and underscores (_) globally.
  return str.replace(/['"_]/g, "");
};


// =================================================================
// 3. CORE APPLICATION FUNCTIONS (CRUD)
// =================================================================

/**
 * @description Renders or re-renders the task list in the UI based on taskData.
 */
const updateTaskContainer = () => {
  tasksContainer.innerHTML = ""; 
  
  taskData.forEach(({ id, title, date, description }) => {
    tasksContainer.innerHTML += `
      <div class="task" id="${id}">
        <p><strong>Title:</strong> ${title}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Description:</strong> ${description}</p>
        
        <button type="button" class="btn" onclick="editTask(this)">Edit</button>
        <button type="button" class="btn" onclick="deleteTask(this)">Delete</button>
      </div>
    `;
  });
};

/**
 * @description Clears the form inputs, hides the form, and resets the currentTask state.
 * Also resets the button text from "Update Task" back to "Add Task". (Step 63)
 */
const reset = () => {
  titleInput.value = "";
  dateInput.value = "";
  descriptionInput.value = "";
  taskForm.classList.toggle("hidden");
  
  // Reset the button text (Step 63)
  addOrUpdateTaskBtn.innerText = "Add Task"; 
  
  currentTask = {};
};

/**
 * @description Handles adding a new task or updating an existing one.
 */
const addOrUpdateTask = () => {
  // Input validation: Prevent adding tasks with only whitespace in the title (Step 64)
  if (!titleInput.value.trim()) {
    alert("Please provide a title");
    return;
  }
  
  const dataArrIndex = taskData.findIndex((item) => item.id === currentTask.id);

  // Sanitize the title before creating the ID (Step 66)
  const sanitizedTitleBase = removeSpecialChars(titleInput.value)
                              .toLowerCase()
                              .split(" ")
                              .join("-");
                              
  const taskObj = {
    // Unique ID combining sanitized title and timestamp
    id: `${sanitizedTitleBase}-${Date.now()}`,
    
    title: titleInput.value,
    date: dateInput.value,
    description: descriptionInput.value,
  };

  if (dataArrIndex === -1) {
    // Add new task
    taskData.unshift(taskObj);
  } else {
    // Update existing task
    taskData[dataArrIndex] = taskObj;
  }
  
  updateTaskContainer();
  reset();

  // Persist the changes to localStorage (Step 59)
  localStorage.setItem("data", JSON.stringify(taskData)); 
};

/**
 * @description Deletes a task from the UI and the taskData array.
 * @param {HTMLElement} buttonEl The delete button element.
 */
const deleteTask = (buttonEl) => {
  const dataArrIndex = taskData.findIndex(
    (item) => item.id === buttonEl.parentElement.id
  );

  buttonEl.parentElement.remove();
  taskData.splice(dataArrIndex, 1);

  // Persist the deletion to localStorage (Step 60)
  localStorage.setItem("data", JSON.stringify(taskData));
};

/**
 * @description Loads an existing task's data into the form for editing.
 * @param {HTMLElement} buttonEl The edit button element.
 */
const editTask = (buttonEl) => {
  const dataArrIndex = taskData.findIndex(
    (item) => item.id === buttonEl.parentElement.id
  );

  // Set the currentTask to the task being edited
  currentTask = taskData[dataArrIndex];

  // Populate the form fields
  titleInput.value = currentTask.title;
  dateInput.value = currentTask.date;
  descriptionInput.value = currentTask.description;

  // Change button text and show form
  addOrUpdateTaskBtn.innerText = "Update Task";
  taskForm.classList.toggle("hidden");
};


// =================================================================
// 4. EVENT LISTENERS
// =================================================================

openTaskFormBtn.addEventListener("click", () => {
  taskForm.classList.toggle("hidden");
});

closeTaskFormBtn.addEventListener("click", () => {
  // Check if form has data to prompt confirmation dialog
  const formInputsContainValues = titleInput.value || dateInput.value || descriptionInput.value;
  
  if (formInputsContainValues) {
    confirmCloseDialog.showModal();
  } else {
    reset();
  }
});

cancelBtn.addEventListener("click", () => {
  confirmCloseDialog.close();
});

discardBtn.addEventListener("click", () => {
  confirmCloseDialog.close();
  reset();
});

taskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  addOrUpdateTask();
});


// =================================================================
// 5. INITIAL LOAD
// =================================================================

// Display saved tasks in the UI upon page load if taskData is not empty (Step 62)
if (taskData.length) {
  updateTaskContainer();
}