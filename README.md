# Football Match Statistics Project

This project is a full-stack application for managing football match statistics. The backend is built using **Spring Boot**, and the frontend is built using **React.js** with the **Vite** framework. It allows users to create teams, add match statistics, and view match details.

---

## **Table of Contents**
1. [Prerequisites](#prerequisites)
2. [Setup Backend (Spring Boot)](#setup-backend-spring-boot)
3. [Setup Frontend (React.js with Vite)](#setup-frontend-reactjs-with-vite)
4. [Running the Application](#running-the-application)
5. [Project Structure](#project-structure)
6. [Technologies Used](#technologies-used)

---

## **Prerequisites**

Before running the project, ensure you have the following installed:

1. **Java Development Kit (JDK)**:
   - Version: **JDK 17** or higher.
   - Download: [Oracle JDK](https://www.oracle.com/java/technologies/javase-downloads.html) or [OpenJDK](https://openjdk.org/).

2. **Node.js**:
   - Version: **16.x** or higher.
   - Download: [Node.js](https://nodejs.org/).

3. **MySQL Database**:
   - Version: **8.x** or higher.
   - Download: [MySQL](https://dev.mysql.com/downloads/installer/).

4. **IDE**:
   - Backend: [IntelliJ IDEA](https://www.jetbrains.com/idea/) or [Eclipse](https://www.eclipse.org/).
   - Frontend: [Visual Studio Code](https://code.visualstudio.com/).

5. **Postman** (Optional):
   - For testing backend APIs.
   - Download: [Postman](https://www.postman.com/downloads/).

---

## **Setup Backend (Spring Boot)**

### **Step 1: Clone the Repository**
Clone the project repository to your local machine:
```bash
git clone https://github.com/zeeshan2002/football-match-stats.git
cd Football-match-stats/backend
```

### **Step 2: Create MySQL Database**
1. Open MySQL and create a database named `football`:
   ```sql
   CREATE DATABASE football;
   ```

2. Update the database configuration in the `application.properties` file:
   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/football
   spring.datasource.username=your-username
   spring.datasource.password=your-password
   ```

### **Step 3: Build and Run the Backend**
1. Open the `backend` folder in your IDE (e.g., IntelliJ IDEA).
2. Build the project using Maven:
   ```bash
   mvn clean install
   ```
3. Run the Spring Boot application:
   ```bash
   mvn spring-boot:run
   ```
4. The backend will start at `http://localhost:8080`.

---

## **Setup Frontend (React.js with Vite)**

### **Step 1: Navigate to the Frontend Folder**
From the project root, navigate to the `frontend` folder:
```bash
cd Football-match-stats/frontend
```

### **Step 2: Install Dependencies**
Install the required dependencies using npm:
```bash
npm install
```

### **Step 3: Run the Frontend**
Start the development server:
```bash
npm run dev
```
The frontend will start at `http://localhost:5173`.

---

## **Running the Application**

1. **Start the Backend**:
   - Ensure the Spring Boot application is running on `http://localhost:8080`.

2. **Start the Frontend**:
   - Ensure the React.js application is running on `http://localhost:5173`.

3. **Access the Application**:
   - Open your browser and navigate to `http://localhost:5173`.

---

## **Project Structure**

### **Backend (Spring Boot)**
```
backend/
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   └── com/example/football/
│   │   │       ├── controller/       # API Controllers
│   │   │       ├── model/            # Entity Classes
│   │   │       ├── repository/       # JPA Repositories
│   │   │       ├── service/          # Business Logic
│   │   │       └── FootballApplication.java # Main Application
│   │   └── resources/
│   │       └── application.properties # Configuration
│   └── test/                         # Unit Tests
└── pom.xml                           # Maven Configuration
```

### **Frontend (React.js with Vite)**
```
frontend/
├── public/                           # Static Assets
├── src/
│   ├── components/                   # React Components                       
│   ├── App.jsx                       # Main Application Component
│   ├── main.jsx                      # Entry Point
│   └── index.css                     # Global Styles
├── package.json                      # Dependencies
└── vite.config.js                    # Vite Configuration
```

---

## **Technologies Used**

### **Backend**
- **Spring Boot**: Framework for building the backend.
- **Spring Data JPA**: For database operations.
- **MySQL**: Database for storing match and team data.
- **Maven**: Build tool for managing dependencies.

### **Frontend**
- **React.js**: JavaScript library for building the user interface.
- **Vite**: Build tool and development server.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Axios**: For making HTTP requests to the backend.

---

## **Contact**

If you have any questions or need further assistance, feel free to reach out:

- **Email**: zeeshansartaj.cs@gmail.com
- **GitHub**: [zeeshan2002](https://github.com/zeeshan2002/football-match-stats)

---

Thank you for using the Football Match Statistics project! 🚀
