# ParcelJS + TypeScript + React + Redux-observable

## Description

Architecture with React + ParcelJS + Typescript + Redux-observable. (And testing with Jest, of course)

PD: This is not similar to create-react-app in the sense that there is no hidden configuration in node_modules, it is based in ParcelJS, a bundler ready to automate most things, looking to have zero configuration, even targeting large scale projects.

You should have a look at https://parceljs.org/ it will surprise you.

## Install

```
npm install
```

## Usage

Dev Server with Hot Reloader:

```
npm start
```

Build:

```
npm run build
```

Test:

```
npm test
```

## State Flow

* Actions
  * Actions are everything that changes the State, you emmit actions by using the
    action creators. Look @connect decorator to see how to pass them to your components
* Reducers
  * They are any action that do not modify the State, the best exampe is a
    logger.
* Selectors
  * These are functions that receive the state and an Action, and return a new state
    modified by that action.
* Epics
  * They are functions that listen to an ActionsObservable and react to them doing
    side effects. The most powerfull way for making async actions with redux such as
    ajax requests.
