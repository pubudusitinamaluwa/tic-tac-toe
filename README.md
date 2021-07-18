# Tic-Tac-Toe - Game frontend

## Introduction

A simple ReactJS frontend application that works in collaboration with [tick-tac-toe-api](https://github.com/pubudusitinamaluwa/tic-tac-toe-api) 
as the backend API for the game.

Read about the game: https://en.wikipedia.org/wiki/Tic-tac-toe

## Build & Run

> *Make sure the backend is up and running before starting the application.*
### Run locally

Clone the repository
```shell
git clone https://github.com/pubudusitinamaluwa/tic-tac-toe
```
Run npm install
```shell
cd tic-tac-toe
npm install
```
Start the application
```shell
npm start
```

### With docker
Build the image
```shell
cd tic-tac-toe
docker build -t tic-tac-toe:latest .
```
Run container and bind to port 3000 on host
```shell
docker container run -d --rm --name tic-tac-toe -p 3000:3000 tic-tac-toe:latest
```

### Deploy With Docker Compose
Clone both backend and front end repositories
```shell
git clone https://github.com/pubudusitinamaluwa/tic-tac-toe-api
git clone https://github.com/pubudusitinamaluwa/tic-tac-toe
```
Switch to compose directory in either repository
```shell
cd tic-tac-toe-api/compose
```
OR
```shell
cd tic-tac-toe/compose
```
Run docker compose up
```shell
docker compose up -d
```
Remove all resources created
```shell
docker compose down
```

# Screenshots

![Image](images/03.png)
![Image](images/02.png)
![Image](images/05.png)
![Image](images/03.png)
![Image](images/04.png)