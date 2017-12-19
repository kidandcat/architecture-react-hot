# ParcelJS + TypeScript + React + MobX

## Description

Very simple architecture with React + ParcelJS + Typescript + MobX. (And testing with Jest, of course) 

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
  * Actions are everything that changes the State, as we are working with
    reactive programming, they will need to modify the State (the opposite of
    Redux).
* Effects
  * They are any action that do not modify the State, the best exampe is a
    logger.
* Reactions
  * Here you can execute Actions or Effects when a part o the State has changed.
    You can extend the reactions with options such as delay
    (https://mobx.js.org/refguide/reaction.html#options).

## Hot Reload & MobX Store

The Store.js saves the state in LocalStorage when Hot module is removing a
component so you will have it untouched.
