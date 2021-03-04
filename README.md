[![](https://img.shields.io/badge/React-^17.0.1-blue>)](https://it.reactjs.org/) [![](https://img.shields.io/badge/MaterialUI-^4.11.3-green>)](https://material-ui.com/) [![npm version](https://img.shields.io/badge/npm-6.14.8-red>)]()
****
# Seminar registration

Sample app to register a seminar attendee

## Getting Started (Docker)

These instructions will cover usage information and for the docker container 

### Prerequisities


In order to run this container you'll need docker installed.

* [Windows](https://docs.docker.com/windows/started)
* [OS X](https://docs.docker.com/mac/started/)
* [Linux](https://docs.docker.com/linux/started/)

If you want, you can use docker-compose also.

* [Docker Compose](https://docs.docker.com/compose/)

## Usage

#### List of the different scripts available in this project

***
#### Development environment
#
With `docker`

```shell
npm run docker:dev 
```

With `docker-compose` 

```shell
npm run docker-compose:dev
```
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

***
#### Production environment
#
With `docker`

```shell
npm run docker:prod 
```

With `docker-compose` 

```shell
npm run docker-compose:prod
```
Open [http://localhost:1337](http://localhost:1337) to view it in the browser.

****
## Getting Started

These instructions will cover usage information `without` docker

## Usage

#### List of the different scripts available in this project
***
#### Development environment
#
```shell
npm run start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

```shell
npm run test
```

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

```shell
npm run lint
```
To lint files with the `.js` and `.jsx` extension. The `.` targets files in the current directory and all subdirectories. To include other file extensions, eslint . --ext .js,.jsx or eslint . --ext .js --ext .jsx. The [eslint documentation](https://eslint.org/docs/user-guide/command-line-interface#-ext) covers this option.

```shell
npm run build
```

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

```shell
npm run eject
```

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

***
#### Production environment
#
```shell
npm run start:prod
```

Runs the app in the production mode. The project was built assuming it is hosted at /.

Open [http://localhost:5000](http://localhost:5000) to view it in the browser.

****
## Optimization

These instructions will cover usage information and for the optimization
## Usage
#### List of the different scripts available in this project

```shell
npm run build:webpack
```

```shell
npm run start:webpack
```

Open [http://localhost:9000](http://localhost:9000) to view it in the browser.
