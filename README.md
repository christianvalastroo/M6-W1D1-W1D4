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
* Cloudinary
* Multer
* Multer Storage Cloudinary
* Cors
* Dotenv
* Nodemon

### Frontend

* React
* React Bootstrap
* React Router DOM
* Fetch API
* Draft.js
* React Draft WYSIWYG
* React Icons

---

## ✨ Funzionalità

### 👤 Gestione Autori

* Creazione di un autore
* Visualizzazione di tutti gli autori
* Visualizzazione di un singolo autore
* Modifica di un autore
* Eliminazione di un autore
* Paginazione dei risultati
* Upload dell'avatar su Cloudinary

### 📝 Gestione Blog Post

* Creazione di un blog post
* Visualizzazione di tutti i blog post
* Visualizzazione di un singolo blog post
* Modifica di un blog post
* Eliminazione di un blog post
* Paginazione dei risultati
* Collegamento di ogni post al relativo autore
* Popolamento dei dati dell'autore tramite Mongoose
* Upload della cover su Cloudinary

### 🌐 Frontend React

* Visualizzazione dei post salvati nel database
* Visualizzazione della pagina di dettaglio di un post
* Collegamento tra React e API Express
* Navigazione tra home, dettaglio del post e pagina di creazione
* Editor di testo WYSIWYG per la scrittura dei contenuti
* Componente per la gestione dei like lato interfaccia
* Interfaccia basata sul template fornito da Strive School

> I like sono attualmente gestiti nello stato locale del frontend e non vengono ancora salvati nel database.

---

## 📂 Struttura del progetto

```text
Strive-Blog
│
├── Backend
│   ├── middlewares
│   │   └── cloudinaryUploader.js
│   ├── models
│   │   ├── Author.js
│   │   └── BlogPost.js
│   ├── routes
│   │   ├── authors.js
│   │   └── blogPosts.js
│   ├── server.js
│   └── .env
│
└── Frontend
    ├── public
    ├── src
    │   ├── assets
    │   ├── components
    │   ├── data
    │   ├── views
    │   ├── App.js
    │   └── index.js
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
CLOUDINARY_CLOUD_NAME=nome_cloud_cloudinary
CLOUDINARY_API_KEY=api_key_cloudinary
CLOUDINARY_API_SECRET=api_secret_cloudinary
```

---

## 📡 API Disponibili

Il backend viene eseguito su `http://localhost:3001`.

### Authors

| Metodo | Endpoint                  | Descrizione                 |
| ------ | ------------------------- | --------------------------- |
| GET    | /authors                  | Recupera tutti gli autori   |
| GET    | /authors/:id              | Recupera un singolo autore  |
| POST   | /authors                  | Crea un autore              |
| PUT    | /authors/:id              | Modifica un autore          |
| DELETE | /authors/:id              | Elimina un autore           |
| PATCH  | /authors/:authorId/avatar | Carica l'avatar su Cloudinary |

### Blog Posts

| Metodo | Endpoint                       | Descrizione                    |
| ------ | ------------------------------ | ------------------------------ |
| GET    | /blogPosts                     | Recupera tutti i blog post     |
| GET    | /blogPosts/:id                 | Recupera un singolo blog post  |
| POST   | /blogPosts                     | Crea un blog post              |
| PUT    | /blogPosts/:id                 | Modifica un blog post          |
| DELETE | /blogPosts/:id                 | Elimina un blog post           |
| PATCH  | /blogPosts/:blogPostId/cover   | Carica la cover su Cloudinary  |

Le richieste `GET /authors` e `GET /blogPosts` supportano la paginazione tramite i parametri:

```text
?page=1&limit=10
```

Per gli endpoint di upload è necessario inviare una richiesta `multipart/form-data`:

* campo `avatar` per l'avatar dell'autore
* campo `cover` per la cover del blog post

---

## 🎯 Obiettivi del progetto

* Comprendere il funzionamento di Express.js
* Utilizzare MongoDB Atlas e Mongoose
* Creare API REST complete
* Gestire operazioni CRUD
* Implementare la paginazione
* Collegare un frontend React ad un backend Node.js
* Gestire file e immagini attraverso Cloudinary
* Collegare i blog post agli autori tramite riferimenti MongoDB

---
