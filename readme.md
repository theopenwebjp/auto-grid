# Description
JavaScript API for simply adding and removing DOM elements to a fixed size element with automatic sizing using CSS3 grids.

# Usage
```
const AutoGrid = require('auto-grid');
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
```

# Problems
Currently has problems with fitting in elements if text is taking all space.

# Example
[./index.html](./index.html)