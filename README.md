# node-starter

Simple starting point to create a Node.js API with fastify.

Includes:
 - Two endpoints: `/` (GET + POST)
 - Tests with [jest](https://facebook.github.io/jest/)
 - Code style with [Prettier](https://prettier.io/)
 - Code quality with [ESLint](https://github.com/eslint/eslint)
 - Logs with [pino](https://github.com/pinojs/pino)
 - Environment variables wit [dotenv](https://github.com/motdotla/dotenv)

Test POST endpoint:
```
curl -X POST \
  http://localhost:3000/ \
  -H 'Content-Type: application/json' \
  -d '{
    "hello": "world"
}'
```

## How to use

 - Clone this project
```
git clone https://github.com/cedric25/node-api-starter.git my-api
cd my-api
nvm use
npm i
```

 - Remove git history and create your own:
```
rm -rf .git
git init
git add .
git commit -m ":zap: Init project"
```

 - Run server
```
npm start
or  
npm run dev  
or  
npm run dev:debug
```

 - Run tests
```
npm t
```

## Steps done to create this project

(That was before moving to TypeScript)

### App

 - Check your node version: LTS or Current (https://nodejs.org/) (Use [fnm](https://github.com/Schniz/fnm), [nvm](https://github.com/creationix/nvm) or [n](https://github.com/tj/n))
 - Create a new folder and run `npm init --yes`
 - `npm i fastify`
 - Copy-paste a code sample from fastify '[Getting Started](https://fastify.dev/docs/latest/Guides/Getting-Started/)'
 - Create a npm script in package.json: `"start": "node server"`
 - Try it: `npm start`
 - In dev, you can use [nodemon](https://github.com/remy/nodemon) to run your server

### Git

 - `git init`
 - Create `.gitignore` (Inspiration [here](https://github.com/github/gitignore/blob/master/Node.gitignore))

### Tests

#### Unit

 - Extract the 'app' logic of your server to `src/app.js`
 - Create a small test (`./src/utils/utils.spec.js`)
 - Add convenient npm script (See `"test:unit"` in `package.json`)
 - Test it: `npm run test:unit`

#### Integration

 - `npm i jest supertest --save-dev`
 - Create a small test (`./src/app.test.js`)
 - Add convenient npm scripts (See `"test:int"` and `"test"` in `package.json`)
 - Test it: `npm run test:int`

### Prettier

 - Install [Prettier](https://github.com/prettier/prettier)
 - Create your `.prettierrc` file
 - Add two npm scripts `"prettier": "prettier src --check"` and `"prettier:fix": "prettier src --write"`
 - Test it: `npm run prettier`

### ESLint

 - Install [ESLint](https://github.com/eslint/eslint)
 - Init a config file: `npm init @eslint/config`
 - Tell ESLint about Jest: `npm i eslint-plugin-jest -D` and use it for test files (See `overrides` section in `.eslintrc.cjs`)
 - Add two npm scripts `"eslint"` and `"eslint:fix"`
 - Test it: `npm run eslint`

### Logs (pino)

 - `npm i pino`
 - `npm i pino-pretty -D`
 - Create the config you wish such as in `src/logger.js`

### dotenv

 - Use [dotenv](https://github.com/motdotla/dotenv) with the `.env` file to set your environment variables for your local environment.

Also worth having a look at [dotenv-flow](https://github.com/kerimdzhanov/dotenv-flow) and [dotenv-flow-cli](https://github.com/ovos/dotenv-flow-cli) if for example you need non-committed env vars in a `.env.local` file.
