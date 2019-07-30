# generator-lit-element-ts

Quickly prototype and publish webcomponents using the LitElement library.

+ Full Typescript support including decorators.
+ Option to include external html/scss files as static properties.
+ es module build with pollyfill fallback supporting legacy specs.
+ Basic dev server (no live reload)

## Install

[Yeoman](https://yeoman.io/) is a pre-requisite so make sure its installed first.

```bash
npm i -g yo
```

Install the generator

```bash
npm i -g generator-lit-element-ts
```

## Usage

```bash
$ yo lit-element-ts


     _-----_
    |       |    ╭──────────────────────────╮
    |--(o)--|    │      New LitElement      │
   `---------´   │       (Typescript)       │
    ( _´U`_ )    ╰──────────────────────────╯
    /___A___\   /
     |  ~  |
   __'.___.'__
 ´   `  |° ´ Y `

# This will set the element's tag name and the name of the project's root directory.
? Name of element: new-element

? Select package manager (Use arrow keys)
❯ npm
  yarn
```

Name is verified using [validate-element-name](https://www.npmjs.com/package/validate-element-name)

```bash
? Name of element: New-Element
>> Custom element names must not contain uppercase ASCII characters.

? Name of element: new
>> Custom element names must contain a hyphen. Example: unicorn-cake
```

## What You Get

### Template

```text
.
├── README.md
├── index.html
├── package.json
├── rollup.config.js
├── src
│   ├── img
│   ├── index.ts
│   ├── style.scss
│   ├── template.html
│   └── typings.d.ts
└── tsconfig.json
```

### Scripts

```json
  "scripts": {
    "build": "rimraf dist && rollup -c rollup.config.js",
    "serve": "./node_modules/.bin/es-dev-server --root-dir ./dist --open",
    "start": "run-s build serve"
  }
```
