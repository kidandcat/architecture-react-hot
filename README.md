# ParcelJS + TypeScript + React + MobX

## Description

Very simple architecture with React + ParcelJS + Typescript + MobX. Thanks to
ParcelJS you just need to create your config files like always (.babelrc,
tsconfig.json, etc) and they will magically work!.

## Install

```
npm install
npm install -g parcel-bundler
npm install -g typescript
```

```diff
-Required
```

Because ParcelJS is brand new and Typescript support is being developed, we need to use tsc (typescript command line compiler) to compile our code to plain Javascript before passing it to Parcel. For that purpose, if you are using VS Code, there is already a config file to execute tsc every time you save. You can get the plugin here:

https://marketplace.visualstudio.com/items?itemName=emeraldwalk.RunOnSave

If you can't use it, you will need to run tsc every time you want to hot reload, or go without Typescript

## Usage

Dev Server with Hot Reloader:

```
npm start
```

Build:

```
npm run build
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

