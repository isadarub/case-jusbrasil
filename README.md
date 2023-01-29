# Case Jusbrasil - Lawsuits team

Full stack app for job applying at JusBrasil. The proposal was to present a lawsuits search page, with a search by text and selection by a court of origin of the process. In addition, when clicked, the process should open on a details page, showing the movements with the respective dates.

## Dependencies

- npm install: Installs the dependencies used in project development.
  To check the dependencies, consult the 'package.json' file.

## Creating and filling file .env

Create the .env file and configure it with your database information, as follows:
PORT: 3003 DB_HOST = "your-host" DB_USER = "your-user" DB_PASSWORD = "your-pass" DB_NAME = "name-of-your-database"

## Populate tables

- npm run migrations: Creates and populates the tables in the database based on the data.ts file.

## Executing the project

First, you need to run the API, so change to directory "backend", and run:

- npm run dev: Establishes the connection to the database and automatically restarts the localhost server every time the project is changed and saved.

Then, you can see the UI changing to directory "frontend", and run:

- npm start

## Executing tests

On backend directory:

- npm run test : Runs all unit tests created to test the project's Databases.

## Basic features

### Backend:

- Endpoints: getAllLawsuits, getLawsuitById, getMovements(byLawsuit) and searchLawsuits

### Frontend:

- Conditional render by changing search input or Original Court;
- Details page with listed movements from lawsuit;

## Author

- [GitHub](https://github.com/isadarub)
- [Linkedin](https://www.linkedin.com/in/isadarub)
