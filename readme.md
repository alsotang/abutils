# abutils

## Installation

`$ npm install abutils`

## Description

Utils for manipulate [AudioBuffer](https://developer.mozilla.org/en-US/docs/Web/API/AudioBuffer).

There is already a package named [`audio-buffer-utils`](https://github.com/audiojs/audio-buffer-utils). In my opinion it has two flaws:

* Too many compability considerations due to its age.
* Dependent on Node.js modules(e.g. `os` module)

So I decide to write a brand new module.

* This package only works in modern browser. I mean the lastest version of Google Chrome.
* Don't depend on Node.js modules so you can use a variety of JS bundle tool.


## usage

```ts
import { abutils } from 'abutils';

/** The repeat() method constructs and returns a new AudioBuffer which contains the specified number of copies of the AudioBuffer on which it was called, concatenated together. */
repeat(ab: AudioBuffer, times: number): AudioBuffer;

/** The slice() method extracts a section of a AudioBuffer and returns it as a new AudioBuffer, without modifying the original AudioBuffer. */
slice(ab: AudioBuffer, startSecond?: number, endSecond?: number): AudioBuffer;

/** clone a AudioBuffer */
clone(ab: AudioBuffer): AudioBuffer;
```


## How to develop

1. `$ npm run dev`
2. Modify the sources and tests. Use Chrome to open `test/index.html`