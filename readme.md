# BRIGHTCOVE Player Services Code Challenge API

Simple Node.js RESTful API

## Getting Started

#### Prerequisites
- Node version Hydrogen

#### Initial Setup
1. Install dependencies
```
    npm i
```
2. Start the service
```
    npm run start
```
or
```
    npm run watch
```

# Challenges

## #1 Get Pokemons Endpoint
Currently, the `GET /pokemon` endpoint returns a list of the first 5 pokemons (alongside other information). There is a requirement from product to dynamically return the first N pokemons instead. N being an integer sent by the client in the request. Modify the endpoint's code as necessary to achieve this.

## #2 Get Pokemon Details Endpoint
We need to create a new endpoint which will return the detailed information of a specific pokemon. The name of the pokemon will be received as a **path param**, so you need to find a way to read it.

You might need the [PokeAPI](https://pokeapi.co/) to understand how the information needed can be obtained.

**To start the challenge, uncomment line 35 of `index.js`.**

## #3 Refactor the API using express.Router

Using [Express Router](https://expressjs.com/en/guide/routing.html#express-router), refactor the two existing endpoints.

**To start the challenge, uncomment lines 38-39 of `index.js`.**
