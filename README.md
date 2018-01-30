# DnD

Another wrapper for "drag and drop" action, one of the millions of similar. Just pass by...

## Features
1. Drag'n'drop
2. Drag'n'drop


## Usage
```javascript
var dnd = new DnD({target: document.getElementById('drop'), drop, over, out});

function drop(e){
   console.log('dropped: ', e.dataTransfer.files);
}

function over(e){
   document.body.style = 'background-color: red';
}

function out(e){
   document.body.style = 'background-color: white';
}
```