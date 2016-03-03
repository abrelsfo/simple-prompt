# promptking [![Build Status](https://travis-ci.org/abrelsfo/promptking.svg?branch=master)](https://travis-ci.org/abrelsfo/promptking)

> My sweet module


## Install

```
$ npm install --save promptking
```


## Usage

```js
const promptking = require('promptking');

promptking('unicorns');
//=> 'unicorns & rainbows'
```


## API

### promptking(input, [options])

#### input

Type: `string`

Lorem ipsum.

#### options

##### foo

Type: `boolean`<br>
Default: `false`

Lorem ipsum.


## CLI

```
$ npm install --global promptking
```

```
$ promptking --help

  Usage
    promptking [input]

  Options
    --foo  Lorem ipsum. [Default: false]

  Examples
    $ promptking
    unicorns & rainbows
    $ promptking ponies
    ponies & rainbows
```


## License

MIT © [abrelsfo](http://abrelsfo.github.io)
