// app.ts
import { ApiClient } from './api-client.js'; // MUST have .js extension for browser

interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

class UI {
    static display(posts: Post[]) {
        const container = document.getElementById('posts-container');
        if (!container) return;

        container.innerHTML = posts.map(p => `
            <div class="card">
                <span class="user-id">User #${p.userId}</span>
                <h3>${p.title.slice(0, 30)}...</h3>
                <p>${p.body.slice(0, 100)}...</p>
            </div>
        `).join('');
    }
}

// Create the client for Posts
const api = new ApiClient<Post>("https://jsonplaceholder.typicode.com");

// Fetch and Render
async function startApp() {
    const data = await api.fetchData("/posts?_limit=12");
    UI.display(data);
}

startApp();