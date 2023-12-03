# README

The project is a web application for managing physical book collections. Users can add, remove, and edit books in their collections and add condition and pricing related information.

## Setup

Install dependencies from both backend and frontend separately running the following command:

```
npm install
```

Create an .env in both the root of backend and frontend folders with the following content (you can use whatever portnumber you see fit):

```
PORT=3000
```

In addition, add the following line to your backend .env

```
JWT_SECRET=
```

You can generate a key (JWT_SECRET) for jsonwebtoken by using the following command with Node.js installed:

```
node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
```

Run the following command from separate terminals in both the frontend and the backend:

```
npm run dev
```

You should now be able to operate the app from the frontend using the address given to you by Vite.
