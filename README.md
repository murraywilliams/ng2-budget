[![Build Status](https://travis-ci.org/bluebirrrrd/ng2-budget.svg?branch=master)](https://travis-ci.org/bluebirrrrd/ng2-budget)

# Angular 2 Budget App

See the app working [here](http://ng2-budget.bluebirrrrd.com/)

To see the list of implemented features go to [issues](https://github.com/bluebirrrrd/ng2-budget/issues?q=is%3Aissue+is%3Aclosed)

## Getting Started

First of all, clone the repo:

```bash
git clone https://github.com/bluebirrrrd/ng2-budget.git
```

## Dependencies
What you need to run this app:
* `node` and `npm` (`brew install node`)
* Ensure you're running the latest versions Node `v4.1.x`+ and NPM `2.14.x`+

## Installing
* `npm install --global webpack webpack-dev-server karma protractor typings typescript`
* `npm install` to install all dependencies
* `typings install` to install necessary typings
* `npm run server` to start the dev server in another tab

## Running the app
After you have installed all dependencies you can now run the app. Run `npm run server` to start a local server using `webpack-dev-server` which will watch, build (in-memory), and reload for you. The port will be displayed to you as `http://0.0.0.0:3000` (or if you prefer IPv6, if you're using `express` server, then it's `http://[::1]:3000/`).

### server
```bash
# development
npm run server
# production
npm run build:prod
npm run server:prod
```

## Other commands

### build files
```bash
# development
npm run build:dev
# production
npm run build:prod
```

### watch and build files
```bash
npm run watch
```

### run tests
```bash
npm run test
```

### watch and run our tests
```bash
npm run watch:test
```

### run end-to-end tests
```bash
# make sure you have your server running in another terminal
npm run e2e
```

### run webdriver (for end-to-end)
```bash
npm run webdriver:update
npm run webdriver:start
```

### run Protractor's elementExplorer (for end-to-end)
```bash
npm run webdriver:start
# in another terminal
npm run e2e:live
```