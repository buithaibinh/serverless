# Simple SSR with Serverless and Handlebars

This is a simple project/boilerplate that put Serverless and Handlebars together in order to do simple Server Side Rendering.

It's probably the perfect fit if you just need a bit of SSR for powering a react application or other kind-of-static content but still need a pre-fetch databse or stuff like that.

Routes are handled server side and not client side.

## Getting started (TL;DR)

- `yarn`
- `yarn dev`
- Open `http://localhost:3000`

---

## Requirements

- Node nodejs10
- Need AWS account if you want to test it against AWS

## Features

- Development environment (much faster than testing against AWS) using `serverless-offline`
- Renders HTML based on `hbs` (Handlebars) templates
- Ability to use partials/helpers and alike
- Built-in helper and example to send JSON from server to client and use it with JavaScript
- `hbs` files are packaged by webpack and usable through `const template = import './path/to/template''`
- `hbs` templates automatically come with partials/helpers attached
- Simple partial/helper example
- Babel transpilation to node 10.x

## External documentation

- [Handlebars(very much needed)](https://github.com/pcardune/handlebars-loader )
- [Serverless Offline](https://github.com/dherault/serverless-offline)
