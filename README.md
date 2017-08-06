# Necessary

Utilities for arrays, paths and so on.

These utility methods were partly inspired by [lodash](https://lodash.com/), [async](https://caolan.github.io/async/) and the like. They provide limited functionality that will be covered far more comprehensibly by these popular packages, or others. The idea here was only to create methods that addressed specific and relatively modest requirements and would result in a tiny footprint. Additionally, in the case of the asynchronous methods especially, the bare bones implementations should hopefully provide some confidence if stepped in to and out of whilst debugging.

Currently there are four sets of methods dealing with arrays, file and directory paths, asynchronous JavaScript and the file system.

## Installation

You can install Necessary with [npm](https://www.npmjs.com/):

    npm install necessary

You can also clone the repository with [Git](https://git-scm.com/)...

    git clone https://github.com/djalbat/Necessary.git

...and then install the necessary modules with npm from within the project's root directory:

    npm install

## Usage

If you are building with [Node.js](http://nodejs.org) the usage is as follows:

```js
const necessary = require('necessary'),
      { array, async, fileSystem } = necessary,
      { first, last } = array,
      { isDirectory } = fileSystem;

Using the destructing syntax is often best and avoids conflicts if you have variables named `path` or `array`, say. However, it may itself lead to conflicts or confusion, in which case just call the methods directly against the objects in question:

    async.forEach(...)

```

## Compiling from source

Automation is done with [npm scripts](https://docs.npmjs.com/misc/scripts), have a look at the `package.json` file. The pertinent commands are:

    npm run build-debug
    npm run watch-debug

## Array methods

- `first()`
- `second()`
- `third()`
- `fourth()`
- `fifth()`
- `last()`
- `lastButOne()`
- `tail()`
- `push()`
- `unshift()`
- `splice()`
- `filter()`
- `prune()`
- `patch()`
- `augment()`
- `separate()`
- `forwardsForEach()`
- `backwardsForEach()`



## Contact

- james.smith@djalbat.com
- http://djalbat.com
