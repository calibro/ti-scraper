# ti-scraper

### Requirements

- [git](http://git-scm.com/book/en/Getting-Started-Installing-Git)
- [Node.js](https://nodejs.org/en/download/)

### Instructions

Clone the repository from the command line:

```sh
$ git clone https://github.com/calibro/ti-scraper.git
```

browse to scraper root folder:

```sh
$ cd ti-scraper/
```

install dependencies:

```sh
$ npm install
```

run server

```sh
$ node server.js
```

### Customisation

#### Port

By defalut the scraper `port` is set to `3000`.

You can change it by using `env` variable `PORT`.

example:

```sh
$ PORT=1234 node server.js
```

#### Process manager

You can use your preferred process manager in production mode, like [PM2](https://pm2.keymetrics.io/).

installation:

```sh
$ npm install pm2 -g
```

run server:

```sh
$ pm2 start server.js
```
