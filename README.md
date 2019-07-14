# generator-lit-element-ts

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

## What You Get:

+ External html/css files loaded in as static properties.
+ es module build with cjs fallback.
+ Basic dev server (no live reload)

### Template

```text
.
├── README.md
├── index.html
├── package.json.template
├── rollup.config.js
├── src
│   ├── index.ts.template
│   ├── style.css
│   ├── template.html
│   └── typings.d.ts
└── tsconfig.json.template
```

### Scripts

```json
  "scripts": {
    "build": "./node_modules/.bin/rollup -c rollup.config.js",
    "serve": "./node_modules/.bin/serve",
    "start": "run-s build serve"
  }
```
