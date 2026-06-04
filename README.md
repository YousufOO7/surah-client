# 📖 Surah Explorer

A modern Islamic Quran application built with Next.js that allows users to explore all 114 Surahs of the Holy Quran with powerful search functionality in both English and Arabic.

## 🚀 Live Features

- 📚 Browse all 114 Quran Surahs
- 🔍 Search Surahs by English name
- 🔍 Search Surahs by Arabic name
- 📖 View detailed information for each Surah
- 🌐 English and Arabic language support
- ⚡ Fast and responsive user experience
- 📱 Mobile-friendly design
- 🗄️ MongoDB database integration
- 🔄 Dynamic API data handling

---

## 🛠️ Technologies Used

### Frontend
- Next.js
- Tailwind CSS
- JavaScript

### Backend
- Node.js
- Express.js
- MongoDB

---

## ✨ Project Overview

The primary focus of this project was handling and managing a large amount of Quranic data through APIs. The application contains information for all **114 Surahs** of the Holy Quran.

Users can easily search for Surahs using:

- English Surah names
- Arabic Surah names
- Surah-related text/content

The application is designed with a clean and minimalistic homepage while focusing heavily on the core functionality:

### Main Features

#### 📋 Surah List Page
Displays all available Surahs with essential information.

#### 📖 Single Surah Page
Shows detailed information and content for a selected Surah.

#### 🔍 Advanced Search Filter
Allows users to search Surahs in both English and Arabic, making it easier to find specific Surahs quickly.

---

## 📂 Data Source

The Quran data (114 Surahs) was collected from a public GitHub repository and stored in MongoDB for efficient data retrieval and management.

---

## ⚙️ Installation Guide

### 1. Clone the Repository

```bash
git clone https://github.com/YousufOO7/surah-client
```

### 2. Navigate to Project Directory

```bash
cd surah-client
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure Environment Variables

Create a `.env.local` file in the root directory and add:

```env
MONGODB_URI=your_mongodb_connection_string
```

### 5. Connect MongoDB

Make sure MongoDB is properly connected before running the project. The application fetches Surah data from the database.

### 6. Run Development Server

```bash
npm run dev
```

Visit:

```bash
http://localhost:3000
```

---

## 🔗 Backend Repository

Before running the project, make sure to set up and connect the backend server with MongoDB.

Backend Repository:

```text
https://github.com/YousufOO7/surah-server
```

---

## 📸 Pages Included

- Home Page
- Surah List Page
- Single Surah Details Page
- Search Functionality

---

## 🎯 Learning Outcomes

Through this project, I gained experience in:

- Handling large datasets through APIs
- MongoDB data management
- Full-stack application development
- Search and filtering implementation
- Dynamic routing in Next.js
- API integration and optimization

---

## 👨‍💻 Author

**Yousuf Jobaer**

Frontend Developer | MERN Stack Developer

---

### ⭐ If you found this project useful, feel free to give it a star!
