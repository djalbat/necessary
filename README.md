# Necessary

Utilities for arrays, paths and so on.

These utility functions were partly inspired by [lodash](https://lodash.com/), [async](https://caolan.github.io/async/) and the like. They provide functionality that for the most part will be covered far more comprehensibly elsewhere. The idea was only to create a collection of functions that addressed some modest requirements and would result in a relatively small footprint. That said, the bare bones implementations should hopefully provide some confidence if stepped in to and out of whilst debugging, especially in the case of the asynchronous functions.

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

Using the destructor syntax is often best, however it may lead to conflicts, in which case just call the functions directly against the objects in question:

```js
asynchronousUtilities.forEach(...)
```

## Compiling from source

Automation is done with [npm scripts](https://docs.npmjs.com/misc/scripts), have a look at the `package.json` file. The pertinent commands are:

    npm run build-debug
    npm run watch-debug

## Array functions

- `first()`
- `second()`
- `third()`
- `fourth()`
- `fifth()`
- `fifthLast()`
- `fourthLast()`
- `thirdLast()`
- `secondLast()`
- `last()`
- `tail()`
- `push()`
- `unshift()`
- `clear()`
- `copy()`
- `merge()`
- `splice()`
- `replace()`
- `filter()`
- `find()`
- `prune()`
- `patch()`
- `augment()`
- `separate()`
- `forwardsSome()`
- `backwardsSome()`
- `forwardsForEach()`
- `backwardsForEach()`

Note that none of these functions take or pass on a `thisArg` argument when they might otherwise have done. Use `bind()`.

* The functions `first()` through to `last()` return the requisite element of the array argument, if passed an array of at least the required length. If the array is not long enough they return `undefined`. The `tail()` function returns all but the first element of the array argument.

* The `push()` function is similar to its native counterpart but will push an array rather than a single element.

* The `unshift()` function is similar to its native counterpart but will unshift an array rather than a single element.

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
    // the return value is [-1, -2]
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
    // the return value is -1 
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

- `isPathRelativePath()`
- `isPathAbsolutePath()`
- `isPathTopmostDirectoryName()`
- `isTopmostDirectoryNameContainedInPath()`
- `combinePaths()`
- `concatenatePaths()`
- `bottommostNameFromPath()`
- `topmostDirectoryPathFromPath()`
- `topmostDirectoryNameFromPath()`
- `pathWithoutBottommostNameFromPath()`
- `pathWithoutTopmostDirectoryNameFromPath()`

These functions manipulate or query strings that represent file and directory paths. Only forward slash '/' delimiters are supported and absolute paths are not expected to start with a delimiter, so be careful. Trailing delimiters are not needed, but tolerated.

* The `isPathRelativePath()` function returns `true` if the first string argument starts with a period `.` or double period `..`:

```js
isPathRelativePath('../root/etc'); // the return value is true
```

* The `isPathAbsolutePath()` returns `true` if the first string argument does not start with a period `.` or double period `..`:

```js
isPathAbsolutePath('root/etc'); // the return value is true
```

Again, note that an absolute path is considered to be a path that is not a relative path, rather than a path that starts with a delimiter.

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

- `doesEntryExist()`
- `doesFileExist()`
- `doesDirectoryExist()`
- `isEntryFile()`
- `isEntryDirectory()`
- `isDirectoryEmpty()`
- `readDirectory()`
- `readFile()`
- `writeFile()`
- `appendToFile()`
- `renameFile()`
- `getStats()`

An inglorious collection of functions which do no more than paper over some of Node's synchronous [native file system API](https://nodejs.org/api/fs.html) functions. Note that the paths passed to all of these functions are considered absolute and that all of the functions will throw native errors upon failure.

* The `doesEntryExist()`, `doesFileExist()`, `doesDirectoryExist()`, `isEntryFile()`, `isEntryDirectory()` and `isDirectoryEmpty()` functions work as their names suggest, returning a boolean value.

```js
doesEntryExist('root/etc'); // the return value is true if the file or directory exists

doesFileExist('root/etc/init.conf'); // the return value is true if the file exists

doesDirectoryExist('root/etcconf'); // the return value is true if the directory exists

isEntryFile('root/etc/init.conf'); // the return value is true if the entry is a file

isEntryDirectory('root'); // the return value is true if the entry is a directory

isDirectoryEmpty('root/etc'); // the return value is true if the directory is empty
```

* The `readDirectory()` function returns an array of entry names if the directory exists:

```js
readDirectory('root/etc'); // returns the contents of the 'root/etc' directory
```

* The `readFile()` function takes the file encoding as an optional second string argument. The default is `utf8`. It returns the content of the file upon success:

```js
readFile('root/etc/init.conf'); // returns the content of the 'root/etc/init.conf' file
```

* The `writeFile()` function takes the content of the file as a second string argument. It does not return anything upon success:

```js
writeFile('root/etc/init.conf', ''); // writes '' to the 'root/etc/init.conf' file
```

* The `appendToFile()` function takes the content to append file as a second string argument. It will create teh file if necessary and does not return anything upon success:

```js
appendToFile('root/etc/init.conf', ''); // appends '' to the 'root/etc/init.conf' file
```

* The `getStats()` function returns an instance of the [fs.Stats](https://nodejs.org/api/fs.html#fs_class_fs_stats) class for a file or a directory:

```js
const stats = getStats('root/etc'); // returns stats for the 'root/etc' directory.
```

## Asynchronous functions

- `whilst()`
- `forEach()`
- `sequence()`
- `eventually()`
- `repeatedly()`
- `forwardsForEach()`
- `backwardsForEach()`

These functions take either a callback or an array of callbacks, followed by a `done()` function and an optional `context`. They all pass a `next()` function to the callbacks followed by the `done()` function, the `context` and then an `index` argument. Callbacks are given access to the `done()` function so that they can terminate early if need be.

* The `whilst()` function takes a single callback, which it calls each time the callback invokes the given `next()` function or until the callback invokes the given `done()` function. The callback can also force termination by returning a truthy value, in which case it must *not* call the given `next()` or `done()` functions. In the example below the callback will be exectuted ten times:

```js
const context = {}; ///

const callback = function(next, done, context, index) {
  const terminate = (index === 9);

  if (terminate) {
    done();
  } else {
    ...

    next();
  }
}

whilst(callback, function() {
  /// done
}, context);
``` 

* The `forEach()` function takes an array as the first argument followed by a single callback, which it calls for each element of the array unless the callback invokes the given `done()` function. If the `done()` function is never invoked by the callback, it is called once each of the array elements has been passed to the callback, provided the callback invokes the given `next ()` function each time. In the example below the callback will be executed four times:

```js
const context = {};

const callback = function(element, next, done, context, index) {
  const terminate = (element === 3);

  if (terminate) {
    done();
  } else {
    ...

    next();
  }
}

const array = [0, 1, 2, 3, 4, 5];

forEach(array, callback, function() {
  /// done
}, context);
```

* The `sequence()` function takes an array of callbacks, which it calls in turn unless the callback invokes the given `done()` function. If the `done()` function is never invoked by a callback, it is called once each of the callbacks have been called, provided each callback invokes the given `next ()` function. In the example below each of the callbacks bar the last is executed:

```js
const context = {};

const firstCallback = function(next, done, context, index) { next(); },
      secondCallback = function(next, done, context, index) { next(); },
      thirdCallback = function(next, done, context, index) { done(); },
      lastCallback = function(next, done, context, index) { next(); },
      callbacks = [
        firstCallback,
        secondCallback,
        thirdCallback,
        lastCallback
      ];

sequence(callbacks, function() {
  /// done
}, context);
```

* The `eventually()` function takes an array of callbacks, each of which it calls immediately without waiting for the callbacks to invoke the given `next()` functions. When each of the callbacks has invoked the given `next()` function, it will call the `done()` function. Note that in this case invoking the `done()` function from within a callback will not halt the execution of other callbacks, it is passed as an argument only for the sake of convention. In the example below each of the callbacks is executed:

```js
const context = {};

const firstCallback = function(next, done, context, index) { next(); },
      secondCallback = function(next, done, context, index) { next(); },
      thirdCallback = function(next, done, context, index) { done(); },
      callbacks = [
        firstCallback,
        secondCallback,
        thirdCallback
      ];

eventually(callbacks, function() {
  /// done
}, context);
```
* The `repeatedly()` function takes a single callback and a `length` parameter, immediately calling the callback a `length` number of times without waiting for it to invoke the given `next()` function each time. When the callback has invoked the given `next()` function a `length` number of times, it will call the `done()` function. Note that in this case invoking the `done()` function from within the callback will not halt its execution the requisite number of times, it is passed as an argument only for the sake of convention. In the example below the callback is executed ten times:

```js
const context = {};

const callback = function(next, done, context, index) {
  ...

  next();
};

const length = 10;

repeatedly(callback, length, function() {
  // done
}, context);
```

## Template functions

- `parseFile()`
- `parseContent()`
- `parseLine()`

These functions parse files, content or single lines, replacing each token of the form `${<name>}` with the value of the corresponding property of a plain old JavaScript object passed as the second argument, or replacing the token with an empty string if no such property exists.

* The `parseFile()` function takes an absolute file path as the first argument:

```js
const absoluteFilePath = '/etc/var/public/name.html',
      name = 'Joe Bloggs',
      age = 99,
      args = {
        name: name,
        age: age
      }
      parsedContent = parseFile(absoluteFilePath, args); 
```

* The `parseContent()` function takes content as the first argument, honouring newline `\n` characters:

```js
const content = `

  name: <strong>${name}</strong><br/>
  age: <strong>${age}</strong><br/>
  
      `,
      name = 'Joe Bloggs',
      age = 99,
      args = {
        name: name,
        age: age
      }
      parsedContent = parseContent(content, args); 
```

* The `parseLine()` function takes a single line of content as the first argument:

```js
const line = '${name}, aged ${age}.',
      name = 'Joe Bloggs',
      age = 99,
      args = {
        name: name,
        age: age
      }
      parsedLine = parseLine(line, args); // returns 'Joe Bloggs, aged 99.' 
```

## Miscellaneous functions

- `log()`
- `rc()`
- `get()`
- `post()`
- `onETX()`

A small if motley collection of functions for various common tasks.

* The `log()` function provides rudimentary logging functionality, printing its argument to the console by default, prepended with a date and time stamp together with the path of the file containing the callee function and the line number:

```js
log('...') // Results in '28-01-2018 15:44:47.363 bin/main.js(35) ...' being printed to the console, say.
```

Additionally, it is possible to print to a log file if a log directory and, optionally, a base name for the log file are specified. The base name here means the file name minus the extension and separator. The default is `default`:

```js
const { setLogFileBaseName, setLogDirectoryPath } = log;

setLogFileBaseName('example');
setLogDirectoryPath('./log');

log('...') // Results in '28-01-2018 15:44:47.363 bin/main.js(35) ...\n' line being appended to
           // the './log/example.log' file as well as the message being printed to the console.
```

Also, a standard set of functions, namely `fatal()`, `error()`, `warning()`, `info()`, `debug()` and `trace()`, are available and these are filtered in the usual way, assuming the log level has been set:

```js
const { setLogLevel, DEBUG } = log;

setLogLevel(DEBUG);

log.error('...') // Printed to the console and optionally, to the log file.
log.trace('...') // Ignored, because the trace level is lower than the debug level.
```

Finally, log files are rolled over every night. So `./log/example.log` would become `./log/example.28-01-2018.log` and a new `./log/example.log` file would be started at midnight.

* The `rc()` parses a JSON runtime configuration file of a certain format and provides the information therein. By default there is no need to call it explictly, it will parse the aforementioned file automatically and provide the information by assigning it to itself:

```js
const { logLevel, publicDirectorPath } = rc;
```

By default it will parse a file called `.rc` in the current working directory, which should have the following format:

```js
{
  "environments": [
    {
      "name": "development",
      ...
    },
    {
      "name": "production",
      ...
    }
  ]
}
```

It will not try to assign the `name` property to itself, because functions already have a `name` property.

It can be instructed to provide the information corresponding to a given environment name, for example:

```js
rc('development');
```

Or you can pass the `process.argv` array if the command line argument includes something of the form `--environment=...`, for example:

```js
rc(process.argv);
```

In the abscence of any explicit environment name, it will parse and return the first of the enviromnent in the configuration file.

You can change the base extension of the file that is parsed, that is the part of the extension between the leading dot and `rc`, for example:

```js
const { setRCBaseExtension } = rc;

setRCBaseExtension('default');  // Results in the '.defaultrc' file being parsed.
```

If the base extension is adjusted in this way, the function must be called afterwards.

* The `get()` function sends a `GET` request, taking host, URI, optional query parameters and callback arguments. The optional `parameters` argument should be a plain old JavaScript object, the names and values of which will be encoded and concatenated to form the query string. The function expects the response to be stringified JSON and will return the parse this and return it as JSON if the status code is `200`, otherwise it will return null:

```js
const host = '...',
      uri = '...',
      parameters = {
        ...
      };

get(host, uri, parameters, function(json) {
  if (json !== null) {
    ...
  }
});
```

Note that the `uri` argument should not include a leading forward slash `/`, this is prepended automatically.

* The `post()` function behaves similarly to the above `get()` function in what it expects both by way of arguments and in the HTTP response. However, it sends a `POST` rather than a `GET` request and takes an additional `json` argument after the `host` and `uri` arguments. This argument is stringified and sent in the request body:

```js
const host = '...',
      uri = '...',
      json = ...;

post(host, uri, json, function(json) {
  if (json !== null) {
    ...
  }
});
```

Note that `parameters` argument is missing in the example above but that there is nothing wrong with including it and thereby appending a query string to the request URL.

* The `onETX()` function takes a handler which is invoked whenever the `ETX` character code is encountered in the `stdin` stream, which typically happens when the user presses `Ctrl-C`. This method is therefore useful for exiting a console application immediately upon the user's behest, if it is passed `process.exit`. It also returns a function that can be called to remove the listener at some later point in time:

```js
const offExt = onExt(process.exit);

...

offExt();
```

## Contact

- james.smith@djalbat.com
- http://djalbat.com
