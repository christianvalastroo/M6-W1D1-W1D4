# 🚀 Strive Blog

## 📖 Descrizione

Strive Blog è un'applicazione Full Stack sviluppata durante il percorso di formazione Web Developer.

Il progetto permette di gestire autori e articoli di un blog attraverso API REST realizzate con Express e MongoDB, con un frontend React dedicato alla visualizzazione dei contenuti.

---

## 🛠️ Tecnologie utilizzate

### Backend

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* Cors
* Dotenv
* Nodemon

### Frontend

* React
* React Bootstrap
* React Router DOM
* Fetch API

---

## ✨ Funzionalità

### 👤 Gestione Autori

* Creazione di un autore
* Visualizzazione di tutti gli autori
* Visualizzazione di un singolo autore
* Modifica di un autore
* Eliminazione di un autore
* Paginazione dei risultati

### 📝 Gestione Blog Post

* Creazione di un blog post
* Visualizzazione di tutti i blog post
* Visualizzazione di un singolo blog post
* Modifica di un blog post
* Eliminazione di un blog post
* Paginazione dei risultati

### 🌐 Frontend React

* Visualizzazione dei post salvati nel database
* Collegamento tra React e API Express
* Interfaccia basata sul template fornito da Strive School

---

## 📂 Struttura del progetto

```text
Strive-Blog
│
├── Backend
│   ├── models
│   ├── routes
│   ├── server.js
│   └── .env
│
└── Frontend
    ├── public
    ├── src
    └── package.json
```

---

## ⚙️ Installazione

### 1. Clonare il repository

```bash
git clone https://github.com/christianvalastroo/Strive-Blog.git
```

### 2. Installare il Backend

```bash
cd Backend
npm install
npm run dev
```

### 3. Installare il Frontend

```bash
cd Frontend
npm install
npm start
```

---

## 🔐 Variabili d'ambiente

Creare un file `.env` nella cartella `Backend`:

```env
MONGO_URL=stringa_di_connessione_mongodb
```

---

## 📡 API Disponibili

### Authors

| Metodo | Endpoint     |
| ------ | ------------ |
| GET    | /authors     |
| GET    | /authors/:id |
| POST   | /authors     |
| PUT    | /authors/:id |
| DELETE | /authors/:id |

### Blog Posts

| Metodo | Endpoint       |
| ------ | -------------- |
| GET    | /blogPosts     |
| GET    | /blogPosts/:id |
| POST   | /blogPosts     |
| PUT    | /blogPosts/:id |
| DELETE | /blogPosts/:id |

---

## 🎯 Obiettivi del progetto

* Comprendere il funzionamento di Express.js
* Utilizzare MongoDB Atlas e Mongoose
* Creare API REST complete
* Gestire operazioni CRUD
* Implementare la paginazione
* Collegare un frontend React ad un backend Node.js

---