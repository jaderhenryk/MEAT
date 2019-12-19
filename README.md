# Meat

This project is a food delivery web application for study purpose, it was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.12.

## Installing Angular Dependencies

Run `npm install` on project root folder to install all Angular modules as dependencies.

## Running backend API server

MEAT uses [json-server](https://github.com/typicode/json-server) to simulate a REST API. Run `npm i -g json-server` on project root folder to install it. 

There are two ways to deploy the API backend server:

1. Run `node backend/dist/server` to deploy the backend server.
2. To able the server to update itself when the source code changes, it's necessary to install [nodemon](https://nodemon.io/), to do this run `npm i nodemon -g`, after installation run `nodemon --watch backend backend/dist/server.js` to deploy the server with auto update.

The backend API server runs on port 3001.

## Running client server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.
