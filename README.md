# 🌎 Driveway Sealing Management System for David Smith
## Team Members
Sumaita Binte Shorif, Bhushan Pawar
## 🔑 Key Features

* Client Registration: Clients can register with their personal details including name, address, credit card information, and contact details. A unique client ID is generated upon registration.

* Request for Quote: Clients can submit a quote request with property details, driveway size, proposed price, pictures, and additional notes.

* Quote Management: David Smith can accept, reject, or negotiate requests with counterproposals including adjusted pricing and work schedules.

* Order of Work: Clients can accept quotes to create contracts for work.

* Billing System: Bills are generated after work completion, with functionalities for payment or dispute resolution.

## ✅ Dashboards:

* Contractor Dashboard: View and manage requests, orders, bills, and generate revenue reports.

* Client Dashboard: View and respond to quotes, orders, and bills.

## 📝 Additional Functionalities

* Client and contractor negotiation loops for both quotes and bills.

* Evidence tracking for potential legal disputes.

* Revenue reporting for specific periods.

# 📊 Task Platform

This project is a web-based system designed for managing driveway sealing services for a contractor, David Smith. The system facilitates interactions between the contractor and clients, allowing for request submission, negotiation, billing, and dispute resolution. It is built with a **frontend-backend** structure using **Node.js, Express.js, MySQL, and a modern front-end framework**.

---

## 🚀 **How to Run the Project**

### 1️⃣ **Download and Extract the Project**
1. Download the project folder as a ZIP file.
2. Extract the folder to a directory of your choice.
3. Open the folder with your preferred code editor (like **VS Code**).

---

### 2️⃣ **Set Up the Database**
1. **Open XAMPP** and start the **Apache** and **MySQL** servers.
2. Open your browser and navigate to:  
http://localhost/phpmyadmin

3. Create a new database (you can name it `task` or as specified in the `sql.txt` file).  
4. **Run the SQL Queries** from the `sql.txt` file located in the **project root folder**.  
- Click **Import** in phpMyAdmin and upload `sql.txt`, or  
- Open the SQL tab, copy the contents of `sql.txt`, and paste it into the SQL query box.  
- Click **Go** to execute the queries and create the necessary tables.

---

### 3️⃣ **Set Up the Backend**
1. Open a terminal in your code editor.  
2. Navigate to the `backend` folder:  
```
cd backend
```
Install the backend dependencies:
```
npm install
```
Start the backend server:
```
npm start
```
4️⃣ Set Up the Frontend
Open a new terminal in your code editor.
Navigate to the frontend folder:
```
cd frontend
```
Install the frontend dependencies:
```
npm install
```
Start the frontend development server:
```
npm run dev
```
🌐 Project URL
Once everything is running, you can access the frontend in your browser at:

http://localhost:3000
Make sure both backend and frontend servers are running simultaneously.

🛠️ Tech Stack
Backend: Node.js, Express.js, MySQL
Frontend: React (or Next.js if applicable)
Database: MySQL (via XAMPP phpMyAdmin)
Tools: XAMPP, npm, VS Code, Terminal
🤔 Common Issues & Solutions
Database Connection Failed

Make sure XAMPP's MySQL is running.
Double-check your database name, username, and password in the backend configuration file (like .env or db.js).
Port Already in Use

If the port 3000 or 5000 is in use, change it in the backend and frontend files.
npm Errors

Delete node_modules and run npm install again. </br>
Clear the npm cache:</br>
bash</br>
npm cache clean --force</br>
## 🙋 Contributions</br>
#### Sumaita Binte Shorif:

* Database Design and Schema Creation:
        Designed the initial E-R diagram and relational schema.
        Created the users, quotes, and receipt tables.
        Added primary and foreign key constraints.
        Time Spent: 9 hours.

 * Query Development:
        Wrote SQL queries for user registration, quote submission, and receipt generation.
        Developed and tested advanced queries like finding overdue payments and pending quotes.
        Time Spent: 7 hours.
* Backend Logic Implementation:

    Wrote server-side logic for handling quote submissions, updates, and status changes.
    Created endpoints for generating and managing receipts, including payment status updates.
    Ensured business logic validation, such as checking budget constraints or overdue payments.
  Time spent: 10 hours.

* Frontend Interface Design:
        Created mockups for user and admin dashboards.
        Developed and tested the quote submission form.
        Time Spent: 8 hours.

* Documentation:
        Compiled the user and developer manuals.
        Created diagrams and explained the overall system architecture.
        Time Spent: 5 hours.
        
#### Bhushan Pawar:

* System Implementation:
        Implemented the backend logic for user authentication and quote processing.
        Handled the integration between the database and the web-based interface.
        Time Spent: 8 hours est. 

* Performance Optimization:
    Optimized SQL queries to improve response times for data-intensive operations.
  Time Spent: 5 hours est
  
* Testing and Debugging:
        Conducted testing.
        Fixed bugs related to database and frontend-backend communication.
        Time Spent: 5 hours est.
* API Development:
    Developed API routes for user registration, login, quote management, and receipt handling.
    Implemented secure basic authentication mechanism for user sessions.
  Time spet: 4 hours est
 * Documentation:


   
## 📂 Project Structure</br>
bash</br>
project-root/</br>
├── backend/</br>
│   ├── controllers/</br>
│   ├── models/</br>
│   ├── routes/</br>
│   └── server.js</br>
│</br>
├── frontend/</br>
│   ├── public/</br>
│   ├── src/</br>
│   │   ├── components/</br>
│   │   ├── pages/</br>
│   │   └── App.js</br>
│</br>
├── sql.txt   # SQL file for database schema</br>
├── README.md # This file</br>
└── .env      # Environment variables (if applicable)</br>

📄 License
This project is licensed under the MIT License.
