# 🌿 Virtual Herbal Garden

Welcome to the **Virtual Herbal Garden**! This project is an interactive web application that lets users explore, learn about, and interact with a wide variety of medicinal plants — including themed 3D garden tours.

## 🌱 About the Project

The Virtual Herbal Garden is designed to educate users about the medicinal uses, cultivation methods, and habitats of various plants. Users can:

* Take virtual 3D tours of themed gardens (**Skincare, Digestive Health, Immunity Boosting, Respiratory Health**)
* View detailed plant information: habitat, medicinal uses, step-by-step practical uses and cultivation methods
* Bookmark favorite plants and save personal notes
* Search for plants by name or filter them by category
* An AI chatbot that answers using the plant data stored in the database

The project uses **Node.js, Express, MongoDB (Mongoose)** with server-side rendered **React (JSX)** views, **Three.js** for 3D visualization, and the **Groq API** for the chatbot.

## 🚀 Features

* User authentication (signup / login) using sessions
* Interactive 3D virtual tours with clickable plant models
* Plant detail pages with images and medicinal information
* Bookmark and notes functionality for registered users
* AI chatbot powered by plant data from MongoDB
* Category filter and search
* Contact form for user feedback
* Responsive design with custom CSS and Bootstrap

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Backend | Node.js, Express |
| Database | MongoDB, Mongoose |
| Views | React (JSX) rendered on the server (`express-react-views`) |
| Frontend | HTML, CSS, Bootstrap, JavaScript |
| 3D | Three.js, GLTFLoader, OrbitControls |
| AI Chatbot | Groq API |
| Auth | express-session |
