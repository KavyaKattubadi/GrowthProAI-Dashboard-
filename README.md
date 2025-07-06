# 📊 GrowthProAI – Full Stack Intern Assignment

This project is a **Mini Local Business Dashboard** that simulates how small businesses might view their SEO content and Google Business data — one of GrowthProAI’s core use cases.

---

## 🚀 Live Demo

- **Frontend:** [https://growthproai-dashboard.vercel.app](https://growthproai-dashboard.vercel.app)  
- **Backend:** [https://growthproai-backend.onrender.com](https://growthproai-backend.onrender.com)

---

## 🧰 Tech Stack

**Frontend:**
- React JS
- Tailwind CSS
- Axios
- React Router DOM

**Backend:**
- Node.js
- Express.js
- CORS

---

## 📦 Features

### 🌐 Frontend
- Input Form:  
  - Business Name  
  - Location  
- After submission, displays:  
  - Simulated Google Rating (e.g., 4.3★)  
  - Number of Reviews  
  - AI-generated SEO Headline  
- "Regenerate SEO Headline" Button  
- Responsive UI using Tailwind CSS  
- NotFound (404) page

---

### 🔁 Backend

#### `POST /business-data`

**Request:**
```json
{
  "name": "Cake & Co",
  "location": "Mumbai"
}
