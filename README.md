## Rodo Engineering Exercise Documentation

### Steps to run the application

You can run the application in after building it.
use `npm run build` to finish the build.
run json server first, by using `npm run json:server`
Make sure port 5000 is not used by anyother application, before running it.
Then using the finished build to access the application.

### Dependencies Installed

- [json-server](https://www.npmjs.com/package/json-server) - For holding and serving dataset.

### Available Scripts

- npm start - To start the development server in [http://localhost:3000](http://localhost:3000)
- npm run build - To create an application final build
- npm run json:server - To start the database, which listens on [http://localhost:5000](http://localhost:5000) for any requests

## Dependancy summary

### Info on `json-server`

It simulates a databse with REST API, the objects inside the `json` can be queried similarly how we query the a REST application.
