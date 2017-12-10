# ParcelJS + TypeScript + React + MobX

## Description

Very simple architecture with React + ParcelJS + Typescript + MobX. Thanks to
ParcelJS you just need to create your config files like always (.babelrc,
tsconfig.json, etc) and they will magically work!.

## Install

```
npm install
npm install -g parcel-bundler
```

## Usage

Dev Server with Hot Reloader:

```
parcel index.html
```

Build:

```
parcel build index.html
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
