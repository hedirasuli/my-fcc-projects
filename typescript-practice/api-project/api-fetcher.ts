// 1. Define models for the data we expect from the API
interface Post {
    id: number;
    userId: number;
    title: string;
    body: string;
}
 interface Comment {
    id: number;
    postId: number;
    title: string;
    body: string;
    email: string;
 }

 // 2. The Generic Fetcher Class
class ApiClient {
    constructor(private baseUrl: string) {}

    // A Generic Method to fetch data
    async fetchData<T>(path: string): Promise<T[]> {
        try {
            const response = await fetch(`${this.baseUrl}${path}`);
            if (!response.ok) throw new Error("Network response was not ok");
            
            const data = await response.json();
            return data as T[]; // We tell TS: "Trust me, this will be type T"
        } catch (error) {
            console.error("Fetching error:", error);
            return [];
        }
    }
}
// 3. Execution (Update Table columns)
async function runProject() {
    const api = new ApiClient("https://jsonplaceholder.typicode.com");

    console.log("\n--- Fetching Posts ---");
    const posts = await api.fetchData<Post>("/posts?_limit=5");
    // Display specific columns in a table format
    console.table(posts, ["id", "userId", "title"]);

    console.log("\n--- Fetching Comments ---");
    const comments = await api.fetchData<Comment>("/comments?_limit=5");
    console.table(comments, ["id", "postId", "name"]);


    const longTitles = posts.filter(p => p.title.length > 30);
    console.log("\n--- Posts with Long Titles ---");
    console.table(longTitles, ["id", "title"]);
}

// Start the application
runProject();

