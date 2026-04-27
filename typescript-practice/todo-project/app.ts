// 1. Define Task Status
enum Status {
    Todo = "TODO",
    Doing = "DOING",
    Done = "DONE"
}

// 2. Task Interface
interface ITask {
    id: number;
    title: string;
    status: Status;
}

// 3. Generic Repository (The heart of the project)
class Repository<T extends { id: number }> {
    private items: T[] = [];

    add(item: T): void {
        this.items.push(item);
        console.log(`Item ${item.id} added.`);
    }

    getAll(): T[] {
        return this.items;
    }

    findById(id: number): T | undefined {
        return this.items.find(item => item.id === id);
    }
}

// 4. Task Manager Logic
class TaskManager extends Repository<ITask> {
    
    // Method to change status
    updateStatus(id: number, newStatus: Status): void {
        const task = this.findById(id);
        if (task) {
            task.status = newStatus;
            console.log(`Task ${id} updated to ${newStatus}`);
        } else {
            console.log(`Task ${id} not found!`);
        }
    }

    // Method to filter by status
    getTasksByStatus(status: Status): ITask[] {
        return this.getAll().filter(t => t.status === status);
    }
}

// 5. Let's test the system
const myManager = new TaskManager();

// Adding Tasks
myManager.add({ id: 1, title: "Learn TypeScript Generics", status: Status.Doing });
myManager.add({ id: 2, title: "Update GitHub Profile", status: Status.Todo });
myManager.add({ id: 3, title: "Finish FreeCodeCamp Class Module", status: Status.Todo });

// Updating a Task
myManager.updateStatus(2, Status.Done);

// Show completed tasks
console.log("--- Completed Tasks ---");
console.table(myManager.getTasksByStatus(Status.Done));

// 6. Generic Search Utility (Global Function)
// T is the object type, K is the key of that object
function searchItems<T, K extends keyof T>(items: T[], key: K, value: T[K]): T[] {
    return items.filter(item => item[key] === value);
}

// 7. Practical Usage
const allTasks = myManager.getAll();

// Search for a specific title
const searchResult = searchItems(allTasks, "title", "Update GitHub Profile");

console.log("--- Search Result ---");
console.table(searchResult);

// Example of how it prevents errors:
// searchItems(allTasks, "wrongKey", "someValue"); // ERROR: 'wrongKey' doesn't exist on ITask