# Driveway Sealing Management System for David Smith
## Done by Sumaita Binte Shorif and Bhushan Pawar
## Key Features

* Client Registration: Clients can register with their personal details including name, address, credit card information, and contact details. A unique client ID is generated upon registration.

* Request for Quote: Clients can submit a quote request with property details, driveway size, proposed price, pictures, and additional notes.

* Quote Management: David Smith can accept, reject, or negotiate requests with counterproposals including adjusted pricing and work schedules.

* Order of Work: Clients can accept quotes to create contracts for work.

* Billing System: Bills are generated after work completion, with functionalities for payment or dispute resolution.

## Dashboards:

* Contractor Dashboard: View and manage requests, orders, bills, and generate revenue reports.

* Client Dashboard: View and respond to quotes, orders, and bills.

## Additional Functionalities

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

Delete node_modules and run npm install again.
Clear the npm cache:
bash
Copy code
npm cache clean --force
📂 Project Structure
bash
Copy code
project-root/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── server.js
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── App.js
│
├── sql.txt   # SQL file for database schema
├── README.md # This file
└── .env      # Environment variables (if applicable)
🤝 Contributing
If you'd like to contribute to this project, feel free to fork the repo and create a pull request.

📄 License
This project is licensed under the MIT License.
