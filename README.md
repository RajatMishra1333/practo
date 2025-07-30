# 🩺 Practo Clone - Full Stack Web App

A clone of Practo's core features built using **Next.js** for frontend and **Node.js + Express** for backend. This project is deployed on **Render** and structured for full-stack deployment from a single GitHub repository.

---

## 📁 Folder Structure

```

PRACTO-CLONE/
├── frontend/        # Next.js application
├── backend/         # Express.js backend API

````

---

## 🚀 Live Demo

- 🔗 Frontend: [https://your-frontend.onrender.com](https://your-frontend.onrender.com)
- 🔗 Backend API: [https://your-backend.onrender.com](https://your-backend.onrender.com)

---

## 💻 Tech Stack

### Frontend
- ✅ Next.js 14+
- ✅ Tailwind CSS
- ✅ React Icons

### Backend
- ✅ Node.js
- ✅ Express.js
- ✅ CORS
- ✅ dotenv

---

## 🔧 Local Setup

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/practo-clone.git
cd practo-clone
````

### 2. Install dependencies

#### For frontend

```bash
cd frontend
npm install
```

#### For backend

```bash
cd ../backend
npm install
```

---

### 3. Environment Variables

#### Frontend: `frontend/.env.local`

```
NEXT_PUBLIC_API_URL=https://your-backend.onrender.com
```

#### Backend: `backend/.env`

```
PORT=5000
```

---

### 4. Run Locally

#### Backend

```bash
cd backend
npm start
```

#### Frontend

```bash
cd ../frontend
npm run dev
```

---

## 🌍 Deployment on Render

### 🧩 Backend Setup

* Go to [Render](https://render.com/)
* Click on **New Web Service**
* Connect your GitHub repo
* Set root directory: `backend/`
* Set build command: `npm install`
* Start command: `npm start`

### 🎨 Frontend Setup

* Again, create a **New Web Service**
* Set root directory: `frontend/`
* Set build command: `npm install && npm run build`
* Start command: `npm start`
* Add environment variable:

  ```
  NEXT_PUBLIC_API_URL=https://<your-backend-service>.onrender.com
  ```

---

## 📸 Screenshots

*(Add UI screenshots here)*

---

## 📬 Contact

Built by [Rajat Mishra](https://github.com/rajatmishra25) — feel free to connect!

```

---

### 🔁 Next Steps:

- Update your actual **GitHub URL**
- Add real **Render deployment URLs**
- Add **screenshots** to make it more visual

Batao agar chaho to main README ko HTML me bhi de sakta hoon ya automatically `screenshot`, `deploy button`, etc. add kar du.
```
