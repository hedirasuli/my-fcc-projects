class DataStorage<T> {
    private contents: T[] = [];

    // Add item to storage
    addItem(item: T): void {
        this.contents.push(item);
    }
    // Remove item from storage
    removeItem(item: T): void {
        this.contents = this.contents.filter(i => i !== item);
    }

    // Get all items
    getItems(): T[] {
        return [...this.contents];
    }
}

// Case 1: A storage for strings (e.g., names)
const textStorage = new DataStorage<string>();
textStorage.addItem("Hedi");
textStorage.addItem("Alice");
textStorage.removeItem("Hedi");
console.log("Text Storage:", textStorage.getItems());

// Case 2: A storage for numbers (e.g., scores)
const numberStorage = new DataStorage<number>();
numberStorage.addItem(100);
numberStorage.addItem(85);
console.log("Number Storage:", numberStorage.getItems());