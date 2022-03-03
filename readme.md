# Description

JavaScript API for simply adding and removing DOM elements to a fixed size element with automatic sizing using CSS3 grids.

## Installation

`npm install @theopenweb/auto-grid`

## Usage

```javascript
// const AutoGrid = require('auto-grid'); // commonjs support removed. Use es6 imports.
import AutoGrid from 'auto-grid'

const autoGrid = new AutoGrid({
    wrapper: document.querySelector('#element-id')
});

//Adds empty element
autoGrid.addMock();

//Adds specified element
autoGrid.add(document.createElement('div'));

//Removes last element
autoGrid.remove();

//Removes specified element
autoGrid.remove(document.getElementById(('id')));

//Gets list of grid contents
autoGrid.list()

//Updates to specific array of elements
autoGrid.update([document.createElement('div'), document.createElement('div')])
```

## Problems

Currently has problems with fitting in elements if text is taking all space.

## Example

[./index.html](./index.html)

```bash
npx http-server ./
# http://localhost:8080
```
