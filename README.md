Pasteup Buttons
===============

Part of the [Pasteup](https://github.com/guardian/pasteup) collection.

[View the docs](http://guardian.github.io/pasteup-buttons/)

## Installation

You will need

 * [Node.js](http://nodejs.org/)
 * [Bower](http://bower.io/)
```
$ npm install -g bower
```

Then install this component with

```
$ bower install pasteup-buttons --save
```

## Development

On top of the above requirements, you will also need

 * [Ruby](https://www.ruby-lang.org/en/)
 * [Bundler](http://bundler.io/)
```
$ gem install bundler
```
 * [Grunt CLI](http://gruntjs.com/getting-started#installing-the-cli)
```
$ npm install -g grunt-cli
```

Then, in root, install the dependecies

```
$ bundle install
$ npm install
$ bower install
```

To build the component

```
$ grunt build
```

To release the component

```
$ grunt release
```

By default a patch release. Also `major` and `minor` targets available, e.g.

```
$ grunt release:minor
```
