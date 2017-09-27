# Necessary

Utilities for arrays, paths and so on.

These utility functions were partly inspired by [lodash](https://lodash.com/), [async](https://caolan.github.io/async/) and the like. They provide limited functionality that will most likely be covered far more comprehensibly elsewhere. The idea here was only to create functions that addressed a set of relatively modest requirements and would result in a tiny footprint. Additionally, especially in the case of the asynchronous functions, the bare bones implementations should hopefully provide some confidence if stepped in to and out of whilst debugging. 

This is a basic package meant for the authors's own use. If you feel the need to be impressed, look elsewhere! 

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
      { arrayUtilities, asynchronousUtilities, fileSystemUtilities } = necessary,
      { first, last } = arrayUtilities,
      { isDirectory } = fileSystemUtilities;
```

Using the destructing syntax is often best, however it may lead to conflicts, in which case just call the functions directly against the objects in question:

```js
asynchronousUtilities.forEach(...)
```

## Compiling from source

Automation is done with [npm scripts](https://docs.npmjs.com/misc/scripts), have a look at the `package.json` file. The pertinent commands are:

    npm run build-debug
    npm run watch-debug

## Array functions

- [`first()`](#first)
- [`second()`](#second)
- [`third()`](#third)
- [`fourth()`](#fourth)
- [`fifth()`](#fifth)
- [`fifthLast()`](#fifthLast)
- [`fourthLast()`](#fourthLast)
- [`thirdLast()`](#thirdLast)
- [`secondLast()`](#secondLast)
- [`last()`](#last)
- [`tail()`](#tail)
- [`push()`](#push)
- [`unshift()`](#unshift)
- [`clear()`](#clear)
- [`copy()`](#copy)
- [`merge()`](#merge)
- [`splice()`](#splice)
- [`replace()`](#replace)
- [`filter()`](#filter)
- [`transfer()`](#transfer)
- [`find()`](#find)
- [`prune()`](#prune)
- [`patch()`](#patch)
- [`augment()`](#augment)
- [`separate()`](#separate)
- [`forwardsSome()`](#forwardsSome)
- [`backwardsSome()`](#backwardsSome)
- [`forwardsForEach()`](#forwardsForEach)
- [`backwardsForEach()`](#backwardsForEach)

Note that none of these functions take or pass on a `thisArg` argument when they might otherwise have done. Use `bind()`.

<a name="second"></a>
<a name="third"></a>
<a name="fourth"></a>
<a name="fifth"></a>
<a name="fifthLast"></a>
<a name="fourthLast"></a>
<a name="thirdLast"></a>
<a name="secondLast"></a>
<a name="last"></a>
* The functions `first()` through to `last()` return the requisite element of the array argument, if passed an array of at least the required length. If the array is not long enough they return `undefined`. The `tail()` function returns all but the first element of the array argument.

* The `clear()` function removes all the elements in the array argument and returns them as a fresh array:  

```js
clear([1, 2, 3]); // the array argument becomes []
                  // the return value will be [1, 2, 3] 
```

* The `copy()` function copies the second array argument over the top of the first array argument, in other words it replaces each element of the first array argument with the corresponding element in the second array argument. If there are more elements in the second array argument that the first, the first is lengthened:  

```js
copy([1, 2, 3], [4, 5, 6, 7]); // the first array argument becomes [4, 5, 6, 7]
```

* The `merge()` function copies the second array argument onto to the end of the first array argument:  

```js
merge([1, 2, 3], [4, 5, 6, 7]); // the first array argument becomes [1, 2, 3, 4, 5, 6, 7]
```

* The `splice()` function works in a similar vein to its native counterpart, however it takes an array as the optional fourth argument rather than a series of elements from the fourth argument onwards. It mutates the first array argument and returns an array of the elements that have been removed from it:

```js
splice([1, 2, 3], 1, 2, [4, 5]); // the return value will be [2, 3] 
                                 // the first array argument becomes [1, 4, 5]
```

* The `replace()` function will replace an element in the array with the given element the first time that the test callback function returns a truthy value:

```js
replace([1, 2, 0, -1, -2], 3, function(element, index) {
  return element === 0;
}); // the first array argument becomes [1, 2, 3, -1, -2]
```

* The `filter()` function is like its native counterpart, however it filters the first array argument *in place*. The second argument should be a test callback function that will be invoked for each element of the array. If it does not return a truthy value, the corresponding element will be removed.

```js
filter([1, 2, -1, -2], function(element, index) {
  return element > 0;
}); // the first array argument becomes [1, 2]
```

* The `transfer()` function transfers elements of the first array argument onto the second array argument depending on whether or not the test callback returns a truthy value:

```js
transfer([1, -1, -2, 2, 3, -3], [], function(element, index) {
  return element > 0;
}); // the first and second array arguments become [-1, -2, -3] and [1, 2, 3], respectively
```

* The `find()` function is like its native counterpart, however it returns an array of all the elements for which the test callback function returns a truthy value, rather than just the first:

```js
find([1, 2, -1, -2], function(element, index) {
  return element > 0;
}); // the return value will be [1, 2]
```

* The `prune()` function is much like the `filter()` function, however it will terminate the first time that the test callback function returns a truthy value:

```js
prune([1, 2, -1, -2], function(element, index) {
  return element > 0;
}); // the first array argument becomes [1, 2, -2]
```

* The `patch()` function will append the given element to the first array argument the first time that the test callback function returns a truthy value:

```js
patch([1, 2, 0, -1, -2], 4, function(element, index) {
  return element === 0;
}); // the first array argument becomes [1, 2, 0, -1, -2, 4]
```

* The `augment()` function is appends each of the elements of the second array argument to the first array argument whenever the test callback returns a truthy value:

```js
augment([1, 2, 3], [-1, 4, -2, 5], function(element, index) {
  return element > 0;
}); // the first array argument becomes [1, 2, 3, 4, 5]
```

* The `separate()` function separates the first array argument, pushing each of its elements onto either the second or the third array argument depending on whether or not the test callback returns a truthy value:

```js
separate([1, -1, -2, 2, 3, -3], [], [], function(element, index) {
  return element > 0;
}); // the second and third array arguments become [1, 2, 3] and [-1, -2, 3], respectively.
```

* The `forwardsSome()`, `backwardsSome()`, `forwardsForEach()` and `backwardsForEach()` functions work as their names suggest.

## Path functions

- [`isPathRelativePath()`](#isPathRelativePath)
- [`isPathAbsolutePath()`](#isPathAbsolutePath)
- [`isPathTopmostDirectoryName()`](#isPathTopmostDirectoryName)
- [`isTopmostDirectoryNameContainedInPath()`](#isTopmostDirectoryNameContainedInPath)
- [`combinePaths()`](#combinePaths)
- [`concatenatePaths()`](#concatenatePaths)
- [`bottommostNameFromPath()`](#bottommostNameFromPath)
- [`topmostDirectoryPathFromPath()`](#topmostDirectoryPathFromPath)
- [`topmostDirectoryNameFromPath()`](#topmostDirectoryNameFromPath)
- [`pathWithoutBottommostNameFromPath()`](#pathWithoutBottommostNameFromPath)
- [`pathWithoutTopmostDirectoryNameFromPath()`](#pathWithoutTopmostDirectoryNameFromPath)

These functions manipulate or query strings that represent file and directory paths. Only forward slash '/' delimiters are supported and paths are not expected to start with a delimiter. Trailing delimiters are tolerated, however.

* The `isPathRelativePath()` function returns `true` if the first string argument starts with a period `.` or double period `..`:

```js
isPathRelativePath('../root/etc'); // the return value is true
```

* The `isPathAbsolutePath()` returns `true` if the first string argument does not start with a period `.` or double period `..`:

```js
isPathAbsolutePath('root/etc'); // the return value is true
```

Note that an absolute path is considered to be a path that is not a relative path, rather than a path that starts with a delimiter.

* The `isPathTopmostDirectoryName()` function returns `true` if the first string argument is a non-empty string containing no delimiters apart from optionally the last character:

```js
isPathTopmostDirectoryName('root/') // the return value is true
```

* The `isTopmostDirectoryNameContainedInPath()` function returns `true` if the second string argument begins with the first string argument optionally followed by a delimiter and further characters:

```js
isTopmostDirectoryNameContainedInPath('root', 'root/etc') // the return value is true
```

Note that this function tolerates a trailing delimiter on the first string argument, removing it before applying the test.

* The `combinePaths()` function will combine the first string argument with the second string argument by successively removing the bottommost directory name of the former for each topmost parent directory `../` signifier it finds in the latter, returning the result:

```js
combinePaths('root/etc/', '../init'); // the return value is 'root/init'
```

* The `concatenatePaths()` function will concatenate the first and second string arguments, removing the trailing delimiter from the first string if it finds one, returning the result:

```js
concatenatePaths('root/', 'etc/'); // the return value is 'root/etc/'
```

* The `bottommostNameFromPath()`, `topmostDirectoryPathFromPath()`, `topmostDirectoryNameFromPath()`, `pathWithoutBottommostNameFromPath()` and `pathWithoutTopmostDirectoryNameFromPath()` functions work as their names suggest. Each expects there to be at least one delimiter, returning `null` otherwise:

```js
bottommostNameFromPath('root/etc'); // the return value is 'etc'

topmostDirectoryPathFromPath('root/etc/init.conf'); // the return value is 'root/etc'

topmostDirectoryNameFromPath('root/etc/init.conf'); // the return value is 'root'

pathWithoutBottommostNameFromPath('root/etc/init.conf'); // the return value is 'root/etc'

pathWithoutTopmostDirectoryNameFromPath('root/etc/init.conf'); // the return value is 'etc/init.conf'
```

## File system functions

- [`entryExists()`](#entryExists)
- [`fileExists()`](#fileExists)
- [`isEntryDirectory()`](#isEntryDirectory)
- [`isDirectoryEmpty()`](#isDirectoryEmpty)
- [`writeFile()`](#writeFile)
- [`readFile()`](#readFile)
- [`readDirectory()`](#readDirectory)

A small if motley collection of functions which do no more than paper over some of Node's synchronous [native file system API](https://nodejs.org/api/fs.html) functions. Note that the paths passed to all of these functions are considered absolute and that all of the functions will throw the native errors upon failure.

* The `entryExists()`, `fileExists()`, `isEntryDirectory()` and `isDirectoryEmpty()` functions work as their names suggest, returning a boolean value. The `fileExists()` function is identical to the `entryExists()` function in all but name:

```js
entryExists('root/etc'); // the return value is true if the file or directory exists

fileExists('root/etc/init.conf'); // the return value is true if the file exists

isEntryDirectory('root'); // the return value is true if the entry is a directory

isDirectoryEmpty('root/etc'); // the return value is true if the directory is empty
```

* The `writeFile()` function takes the content of the file as a second string argument. It does not return anything upon success:

```js
writeFile('root/etc/init.conf', ''); // writes '' to the 'root/etc/init.conf' file
```

* The `readFile()` function takes the file encoding as an optional second string argument. The default is `utf8`. It returns the content of the file upon success:

```js
readFile('root/etc/init.conf'); // returns the content of the 'root/etc/init.conf' file
```

* The `readDirectory()` function returns an array of string entry names if the directory exists:

```js
readDirectory('root/etc'); // returns the contents of the 'root/etc' directory
```

## Asynchronous functions

- [`whilst()`](#whilst)
- [`forEach()`](#forEach)
- [`sequence()`](#sequence)
- [`eventually()`](#eventually)
- [`repeatedly()`](#repeatedly)
- [`forwardsForEach()`](#forwardsForEach)
- [`backwardsForEach()`](#backwardsForEach)

Probably the best thing to do is give the majority of the listings since it can be fun and informative to work out these functions for yourself. Each takes a context as an optional last argument and passes it to the callbacks before the `index` argument. The callbacks are given access to both the `next()` and `done()` functions, so that they can terminate early if need be.

```js
function whilst(callback, done, context) {
  let count = -1;

  function next() {
    count++;

    const index = count,  ///
          terminate = callback(next, done, context, index);

    if (terminate) {
      done();
    }
  }

  next();
}

function forEach(array, callback, done, context) {
  const length = array.length;  ///

  let count = -1;

  function next() {
    count++;

    const terminate = (count === length);

    if (terminate) {
      done();
    } else {
      const index = count,  ///
            element = array[index];

      callback(element, next, done, context, index);
    }
  }

  next();
}

function sequence(callbacks, done, context) {
  const length = callbacks.length;  ///

  let count = -1;

  function next() {
    count++;

    const terminate = (count === length);

    if (terminate) {
      done();
    } else {
      const index = count,  ///
            callback = callbacks[index];

      callback(next, done, context, index);
    }
  }

  next();
}

function eventually(callbacks, done, context) {
  const length = callbacks.length;  ///

  let count = 0;

  function next() {
    count++;

    const terminate = (count === length);

    if (terminate) {
      done();
    }
  }

  callbacks.forEach(function(callback, index) {
    callback(next, done, context, index);
  });
}

function repeatedly(callback, length, done, context) {
  let count = 0;

  function next() {
    count++;

    const terminate = (count === length);

    if (terminate) {
      done();
    }
  }

  for (let index = 0; index < length; index++) {
    callback(next, done, context, index);
  }
}

```

Note that any callback passed to the `whilst()` function must not call `next()` or `done()` if it chooses to terminate by returning a truthy value. Generally it is best just to call the `done()` callback. On the other hand the `eventually()` and `repeatedly()` functions invoke the callbacks immediately, therefore calling the `done()` function will have no direct effect.   

## Contact

- james.smith@djalbat.com
- http://djalbat.com
