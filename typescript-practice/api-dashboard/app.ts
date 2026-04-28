// Reuse our Interface
interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

// Generic Fetcher (same as before)
class ApiClient {
    constructor(private baseUrl: string) {}

    async fetchData<T>(path: string): Promise<T[]> {
        const response = await fetch(`${this.baseUrl}${path}`);
        return await response.json();
    }
}

// New Class to handle UI Rendering
class UIHandler {
    static renderPosts(posts: Post[]) {
        const container = document.getElementById('posts-container');
        if (!container) return;

        container.innerHTML = posts.map(post => `
            <div class="card">
                <span class="user-tag">User #${post.userId}</span>
                <h3>${post.title.slice(0, 30)}...</h3>
                <p>${post.body.slice(0, 100)}...</p>
            </div>
        `).join('');
    }
}

// Execution
const api = new ApiClient("https://jsonplaceholder.typicode.com");

async function init() {
    const data = await api.fetchData<Post>("/posts?_limit=12");
    UIHandler.renderPosts(data);
}

init();