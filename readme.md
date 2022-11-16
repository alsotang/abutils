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



