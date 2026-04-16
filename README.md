# Quick Hire - Job Portal


Quick Hire is a modern, responsive job portal built with **Next.js**, **Tailwind CSS**, **Shadcn UI**, **Redux Toolkit**, and **RTK Query**. The backend uses **Node.js**, **Express**, and **MongoDB**. Users can browse and apply for jobs, while admins can manage job listings and applications.

---

##Quick Check the video: https://www.loom.com/share/13d17359b51a4ca19ea8713311af07f1

## Features

### User Side
- **Job Listings Page**
  - View all available jobs
  - Search jobs by title or keyword
  - Filter jobs by **category** or **location**
  - Fully responsive layout  

- **Job Detail Page**
  - Full job description
  - “Apply Now” form:
    - Name
    - Email
    - Resume link (URL)
    - Cover note
  - Form submissions visible to admin  

### Admin Side
- **Job Management**
  - Add new jobs with required fields
  - Delete existing jobs
  - View all jobs in a clean, responsive UI  

- **Application Management**
  - View all submitted job applications  

### UI/UX
- Clean, professional, and responsive design
- Reusable components
- Organized folder structure and clean naming conventions

---

## Tech Stack

**Frontend:**
- Next.js  
- Tailwind CSS  
- Shadcn UI components  
- Redux Toolkit & RTK Query  
- React Hot Toast  

**Backend:**
- Node.js & Express.js  
- MongoDB (Atlas or local)
- Mongoose  
-Github Link: https://github.com/YousufOO7/quick-hire-backend

**APIs:**
- **Jobs**
  - `GET /api/jobs` – List all jobs  
  - `GET /api/jobs/:id` – Get single job details  
  - `POST /api/jobs` – Create a job (Admin)  
  - `DELETE /api/jobs/:id` – Delete a job (Admin)  

- **Applications**
  - `POST /api/applications` – Submit job application  
