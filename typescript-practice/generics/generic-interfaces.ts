// A generic interface for API responses
interface ApiResponse<T> {
    status: number;
    message: string;
    data: T; // The actual data can be anything
}

// Case 1: Response containing a User object
interface User {
    username: string;
    email: string;
}

const userResponse: ApiResponse<User> = {
    status: 200,
    message: "User found",
    data: {
        username: "hedi_dev",
        email: "hedi@example.com"
    }
};

// Case 2: Response containing an array of numbers (e.g. scores)
const scoresResponse: ApiResponse<number[]> = {
    status: 200,
    message: "Scores fetched",
    data: [95, 88, 100]
};

console.log("User Name:", userResponse.data.username);
console.log("First Score:", scoresResponse.data[0]);