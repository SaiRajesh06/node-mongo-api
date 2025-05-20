# Node Mongo API
A simple Node.js Express API connected to MongoDB that retrieves user data by ID.
## 📌 Features
- GET `/users/:id` endpoint to fetch user data by `_id`
- Only returns users where `age > 21`
- Returns `404` if user is not found or if the age is ≤ 21
- Handles invalid `ObjectId` errors gracefully
## 🚀 Approach
The API uses Mongoose to interact with a MongoDB collection named `users`. On receiving a user ID as a route parameter, it validates the ID, queries MongoDB, and returns the user’s JSON data if found and over 21 years old. Otherwise, it returns a 404 or a 500 error as appropriate.
