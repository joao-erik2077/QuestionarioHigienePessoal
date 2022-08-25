# Backend
NodeJS, Express, MySQL RESTful API
## Requirements
- NodeJS
- npm
- MySQL
## Installation
- Install dependencies
```bash
npm install
```
- Run this project
```bash
npm start
```

## Http Requisitions
> `POST` /formulario
> Inserts forms answers into database
> ##### BODY
> ```json
> {
>   "p1": 1,
>   "p2": 1,
>   "p3": 1,
>   "p4": 1,
>   "p5": 1,
> }
> ```

## MySQL Tables
> ##### FORMULARIO
> ```sql
> p1 int,
> p2 int,
> p3 int,
> p4 int,
> p5 int
> ```
