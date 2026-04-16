# 🎬 Movie Review Dashboard

A modern, responsive movie review dashboard built with HTML, CSS, and Vanilla JavaScript. This application allows users to search for movies using the TMDB API, view details, and manage their personal movie reviews.

## ✨ Features
- Search for movies using the TMDB API
- View movie details and posters
- Add, view, and remove personal movie reviews
- Responsive and dynamic UI

## 🛠️ Technologies Used
- HTML5 & CSS3
- Vanilla JavaScript
- [TMDB API](https://www.themoviedb.org/documentation/api)

## ⚙️ Setup Instructions

**1. Clone the repository:**
```bash
git clone <your-repo-url>
cd movie-review-dashboard
```

**2. Get a TMDB API Key:**
- Register at [themoviedb.org](https://www.themoviedb.org/).
- Generate a v3 API Key from your account settings.

**3. Configure Secrets:**
Create a `config.js` file in the root folder and add your credentials:
```javascript
const TMDB_KEY = "YOUR_API_KEY_HERE";
const BASE_URL = "https://api.themoviedb.org/3";
const IMAGE_URL = "https://image.tmdb.org/t/p/w500";
```

**4. Run the App:**
Simply open `index.html` in your favorite web browser. No local server required!

## 🛡️ Learning Outcomes

This project was built to master the prerequisites for modern frameworks like React. Key concepts covered:
- **State Management:** Managing application state through objects.
- **API Integration:** Handling API rate limits and null search results.
- **JavaScript Core:** Understanding Scope and Closures within Event Listeners.
- **DOM Manipulation:** DOM Tree manipulation (Element creation and removal).