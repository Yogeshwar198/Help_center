
## Demo

frontend : https://help-center-3zaw.onrender.com
backend : https://help-center-backend-87er.onrender.com

To run your project, first start the backend by clicking backend provided link.
Once the backend is running, start the frontend by clicking frontend Provided link.
The frontend connect to the backend to fetch and display the help center cards seamlessly.
Since it's hosted on Render.com, it may take 50 seconds or more to fully spin up.
# Explaination

On the frontend, vite + React was used to dynamically display these cards, with useState managing component state and useEffect handling data fetching. 
Shared functionality like search was implemented using prop for easy access across the component.
Since I only needed to pass data to one child component, you passed it directly as a prop, avoiding the need for context or Redux. 
The UI updates dynamically based on user input and backend data, providing an interactive and responsive user experience.

In backend, I built a Help Center API using Node.js and Express.js, allowing users to create and retrieve help center cards like  "Branches," "Manage Your Account," "Manage Billing," etc.
A CardModel that defines each card's structure in the database, including a unique id, title, and description. 
The API includes endpoints to add new cards (POST /cards), fetch all cards (GET /cards), and retrieve specific cards by title (GET /cards/:title). 
Error handling ensures smooth operation even with invalid input or non-existent cards.

## Run Locally
Clone the Repository:
Install my-project with npm

```bash
git clone <repository-url>
cd <project-directory>
```
Set Up the Backend:
```bash
cd backend
npm install
npm run dev
```
Ensure the backend is running on a specified port (e.g., http://localhost:5000).

Set Up the Frontend:
```bash
cd frontend
npm install
npm run dev
```
The frontend should now be running on http://localhost:5173/ or another specified port.

Configure Environment Variables:
```bash
Ensure you have any required environment variables set up for the backend.
This is often done in .env file. Frontend, such as API URLs.
```

Check the Setup:
```bash
Open a web browser and navigate to http://localhost:5173/ to see the frontend.
Verify that it can connect to the backend and display data properly.
```
## Screenshots

![App Screenshot](https://drive.google.com/file/d/1TTlF9VCF0qcKlEhWV-kWfcRM0UlaAfCj/view?usp=sharing)



