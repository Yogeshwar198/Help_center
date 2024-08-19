Demo:
frontend : https://help-center-3zaw.onrender.com
backend : https://help-center-backend-87er.onrender.com
To run your project, first start the backend by clicking backend provided link.
Once the backend is running, start the frontend by clicking frontend Provided link.
The frontend connect to the backend to fetch and display the help center cards seamlessly.
Since it's hosted on Render.com, it may take 50 seconds or more to fully spin up.

Explaination:
On the frontend, vite + React was used to dynamically display these cards, with useState managing component state and useEffect handling data fetching. 
Shared functionality like search was implemented using prop for easy access across the component.
Since I only needed to pass data to one child component, you passed it directly as a prop, avoiding the need for context or Redux. 
The UI updates dynamically based on user input and backend data, providing an interactive and responsive user experience.

In backend, I built a Help Center API using Node.js and Express.js, allowing users to create and retrieve help center cards like  "Branches," "Manage Your Account," "Manage Billing," etc.
A CardModel that defines each card's structure in the database, including a unique id, title, and description. 
The API includes endpoints to add new cards (POST /cards), fetch all cards (GET /cards), and retrieve specific cards by title (GET /cards/:title). 
Error handling ensures smooth operation even with invalid input or non-existent cards.

