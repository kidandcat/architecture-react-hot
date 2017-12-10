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

## Hot Reload & MobX Store

The Store.js saves the state in LocalStorage when Hot module is removing a
component so you will have it untouched.
