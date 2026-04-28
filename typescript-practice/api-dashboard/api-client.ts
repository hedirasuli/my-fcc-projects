// This is your original logic, just exported for the web project
export class ApiClient<T> {
    constructor(private baseUrl: string) {}

    async fetchData(path: string): Promise<T[]> {
        try {
            const response = await fetch(`${this.baseUrl}${path}`);
            if (!response.ok) throw new Error("Network error");
            return await response.json();
        } catch (error) {
            console.error("Fetch error:", error);
            return [];
        }
    }
}