# Backend solution

contains the solution for the take-home assignment

## Run Locally

Clone the project

```bash
  git clone https://github.com/steve-ababio/enyata_test.git
```
Go to the project directory

```bash
  cd test
```
Install dependencies

```bash
  npm install
```
Install typescript dependencies

```bash
    npm install -g typescript
```

Database configuration - create a .env file with `PG_DATABASE,PG_HOST,PG_PASSWORD,PG_PORT,PG_USER` to configure pg.POOL module used to instantiate a PostgreSQL instance.
Also add `OWN_API_KEY` API key to your .env file.

Start the server

```bash
  npm run dev
```