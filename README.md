# Necessary

Utilities for arrays, paths and so on.

These utility methods were partly inspired by [lodash](https://lodash.com/), [async](https://caolan.github.io/async/) and the like. They provide limited functionality that will most likely be covered far more comprehensibly by such popular packages. The idea here was only to create methods that addressed specific and relatively modest requirements and would result in a tiny footprint. Additionally, in the case of the asynchronous methods especially, the bare bones implementations should hopefully provide some confidence if stepped in to and out of whilst debugging.

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
```

Using the destructing syntax is often best and avoids conflicts if you have variables named `path` or `array`, say. However, it may itself lead to conflicts, in which case just call the methods directly against the objects in question:


```js
async.forEach(...)
```

## Compiling from source

Automation is done with [npm scripts](https://docs.npmjs.com/misc/scripts), have a look at the `package.json` file. The pertinent commands are:

    npm run build-debug
    npm run watch-debug

## Array methods

Note that none of these methods take or pass on a `thisArg` argument when they might otherwise have done. Use `bind()`.

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

* The methods `first()` through to `lastButOne()` return the requisite element of the first array argument, if passed an array of at least the required length. If the array is not long enough they return `undefined`. The `tail()` method returns all but the first element of the first array argument.

* The `push()` and `unshift()` methods work in a similar vein to their native counterparts, however they take an array rather than a single element as their second arguments. They both return a new array and the first array argument untouched:

```js
push([1, 2, 3], [4, 5]); // the return value will be [1, 2, 3, 4, 5]

unshift([1, 2], [3, 4, 5]); // the return value will be [3, 4, 5, 1, 2]
```

* The `splice()` method works in a similar vein to its native counterpart, however it takes an array as the optional fourth argument rather than a series of elements from the fourth argument onwards. It mutates the first array argument and returns an array of the elements that have been removed from it:

```js
splice([1, 2, 3], 1, 2, [4, 5]); // the return value will be [2, 3] with the first array argument becoming [1, 4, 5]
```

* The `filter()` method is like its native counterpart, however it filters the first array argument *in place*. The second argument should be a test callback method that will be invoked for each element of the array. If it does not return a truthy value, the corresponding element will be removed.

```js
filter([1, 2, -1, -2], function(element, index) {
  return element > 0; }]
}); // the first array argument becomes [1, 2]
```

* The `prune()` method is much like the `filter()` method, however it will terminate the first time that the test callback method returns a truthy value:

```js
prune([1, 2, -1, -2], function(element, index) {
  return element > 0; }]
}); // the first array argument becomes [1, 2, -2]
```

* The `patch()` method will append the given element to the first array argument provided that the test callback method does not return a truthy value for any of the array's elements:

```js
patch([1, 2, 3], 4, function(element, index) {
  return element < 0; }]
}); // the first array argument becomes [1, 2, 3, 4]
```

* The `augment()` method is appends each of the elements of the second array argument to the first array argument whenever the test callback returns a truthy value:

```js
augment([1, 2, 3], [-1, 4, -2, 5], function(element, index) {
  return element > 0; }]
}); // the first array argument becomes [1, 2, 3, 4, 5]
```

* The `separate()` method separates the first array argument, pushing each of its elements onto either the second or the third array argument depending on whether or not the test callback returns a truthy value:

```js
augment([1, -1, -2, 2, 3, -3], [], [], function(element, index) {
  return element > 0; }]
}); // the second and third array arguments become [1, 2, 3] and [-1, -2, 3], respectively.
```

* The `forwardsForEach()` and `backwardsForEach()` methods work as their names suggest.

## Path methods

These methods manipulate or query strings that represent file and directory paths. Only forward slash '/' delimiters are supported and paths are not expected to start with a delimiter. Trailing delimiters are tolerated, however.

- `isPathRelativePath()`
- `isPathAbsolutePath()`
- `isPathTopmostDirectoryName()`
- `isTopmostDirectoryNameContainedInPath()`
- `combinePaths()`
- `concatenatePaths()`
- `bottommostNameFromPath()`
- `topmostDirectoryPathFromPath()`
- `topmostDirectoryNameFromPath()`
- `pathWithoutTrailingSlashFromPath()`
- `pathWithoutBottommostNameFromPath()`
- `pathWithoutTopmostDirectoryNameFromPath()`

* The `isPathRelativePath()` method returns `true` if the first string argument starts with a period `.` or double period `..`:

```js
isPathRelativePath('../root/etc'); // the return value is true
```

* The `isPathAbsolutePath()` returns `true` if the first string argument does not start with a period `.` or double period `..`:

```js
isPathAbsolutePath('root/etc'); // the return value is true
```

* The `isPathTopmostDirectoryName()` method returns `true` if the first string argument is a non-empty string containing no delimiters apart from optionally the last character:

```js
isPathTopmostDirectoryName('root/') // the return value is true
```

* The `isTopmostDirectoryNameContainedInPath()` method returns `true` if the second string argument begins with the first string argument optionally followed by a delimiter and further characters:

```js
isTopmostDirectoryNameContainedInPath('root', 'root/etc') // the return value is true
```

Note that this method tolerates a trailing delimiter on the first string argument, removing it before applying the test.

* The `combinePaths()` method will combine the first string argument with the second string argument by successively removing the bottommost directory name of the former for each topmost parent directory `../` signifier it finds in the latter, returning the result:

```js
combinePaths('root/etc/', '../init'); // the return value is 'root/init'
```

* The `concatenatePaths()` method will concatenate the first and second string arguments, removing the trailing delimiter from the first string if it finds one, returning the result:

```js
concatenatePaths('root/', 'etc/'); // the return value is 'root/etc/'
```

* The `bottommostNameFromPath()` method will return the bottommost name from the string argument, whether this is a directory or file name. It expects there to be at least one delimiter, returning `null` otherwise:

```js
bottommostNameFromPath('root/etc'); // the return value is 'etc'
```

* The `topmostDirectoryPathFromPath()` method will return the bottommost name from the string argument, whether this is a directory or file name. It expects there to be at least one delimiter, returning `null` otherwise:

```js
topmostDirectoryPathFromPath()
```

* The `topmostDirectoryNameFromPath()` method...

```js
topmostDirectoryNameFromPath()
```

* The `pathWithoutTrailingSlashFromPath()` method...

```js
pathWithoutTrailingSlashFromPath()
```

* The `pathWithoutBottommostNameFromPath()` method...

```js
pathWithoutBottommostNameFromPath()
```

* The `pathWithoutTopmostDirectoryNameFromPath()` method...

```js
pathWithoutTopmostDirectoryNameFromPath()
```

## Contact

- james.smith@djalbat.com
- http://djalbat.com
