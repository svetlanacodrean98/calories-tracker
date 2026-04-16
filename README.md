# Calories Tracker

A simple web app for logging daily meals and tracking nutritional intake against standard daily reference values.

## Features

- Log meals with detailed nutritional info (energy, fat, carbs, protein, etc.)
- View today's meals in a table
- See daily totals compared to standard reference values

## Tech Stack

- **Backend:** Node.js, Express 5
- **Database:** PostgreSQL
- **Templating:** EJS
- **Other:** dotenv, pg

## Project Structure

```
server/
├── app.js                  # Express app entry point
├── controllers/
│   └── indexController.js  # Request handlers
├── db/
│   ├── pool.js             # PostgreSQL connection pool
│   └── queries.js          # Database queries
├── routes/
│   └── indexRouter.js      # Route definitions
└── views/
    └── index.ejs           # Main page template
```

## Setup

### Prerequisites

- Node.js
- PostgreSQL

### 1. Clone the repo and install dependencies

```bash
cd server
npm install
```

### 2. Create the database

```sql
CREATE DATABASE calories_db;
```

Create the `meals` table:

```sql
CREATE TABLE meals (
    id SERIAL PRIMARY KEY,
    time TIMESTAMP,
    food TEXT,
    energy NUMERIC,
    weight NUMERIC,
    fat NUMERIC,
    saturated_fat NUMERIC,
    carbs NUMERIC,
    sugar NUMERIC,
    fiber NUMERIC,
    protein NUMERIC,
    salt NUMERIC
);
```

### 3. Configure environment variables

Create a `.env` file in the root of the project:

```
DB_HOST="localhost"
DB_USER="your_postgres_user"
DB_NAME="calories_db"
DB_PASSWORD="your_password"
DB_PORT="5432"
```

### 4. Run the server

```bash
node app.js
```

The app will be available at `http://localhost:3000`.

## Usage

- Fill in the form to log a meal with its nutritional values
- The table below shows all meals logged today
- The **Total** row sums up your intake for the day
- The **Standard** row shows daily reference values to compare against
