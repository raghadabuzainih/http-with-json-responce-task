Build a simple HTTP server using the built-in http module in Node.js that can handle incoming requests and return responses in JSON format.

📎 Requirements:

Use the native http module (do not use Express or any external frameworks).

The server should listen on port 3000.

Handle at least two different routes:

GET / → return a JSON response like { message: "Welcome to the server" }

GET /about → return a JSON response like { message: "This is the about route" }

Set appropriate response headers (e.g., Content-Type: application/json)

Handle any unknown route with a 404 response: { error: "Route not found" }
