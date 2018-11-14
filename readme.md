# Node With TypeScript & PostgreSQL

- Backend - Express in **TypeScript**
- Frontend - Not set yet, API Mode for now
- Database - PostgreSQL + TypeORM (ORM)

Check it out 

- Setup AppKeys - *for DB Connection*
```sh
$ cd node-pg-ts
$ touch src/keys/appKeys.ts
```
- Update **appKeys.ts**
```sh
const appKeys:any = {
  API_PORT : <WHATEVER_YOU_WANT>,
  DB_TYPE: "postgres",
  DB_HOST: <YOUR_PGDB_HOST>,
  DB_PORT: 5432,
  DB_USERNAME: <YOUR_PGDB_USER>,
  DB_PASSWORD: <YOUR_PGDB_PASS>,
  DB_NAME: <YOUR_PGDB_NAME>,
}

export default appKeys;
```

- Setup .env
```sh
$ cd pgTsEample
$ touch .env
```

- Update **.env** - *for running Migrations*
```sh
DATABASE_DRIVER=postgres
DATABASE_USER=<YOUR_PGDB_USER>
DATABASE_HOST=<YOUR_PGDB_HOST>
DATABASE_PASS=<YOUR_PGDB_PASS>
DATABASE_PORT=5432
DATABASE_NAME=<YOUR_PGDB_NAME>
```

- Install Package Dependencies
```sh
$ cd node-pg-ts
$ yarn install

# Or, with npm
$ npm install
```

- Run App in **DEV Mode**
```sh
$ cd node-pg-ts
$ yarn run watch-ts
$ yarn run watch-node
```

- Run App in **PRODUCTION Mode**
```sh
$ cd node-pg-ts
$ yarn run build-ts
$ yarn run start-app
```
