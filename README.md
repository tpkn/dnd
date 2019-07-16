# DnD

Yet another wrapper for "drag and drop" action, one of the millions of similar. Just pass by...


## API
```javascript
new DnD(target[, options]);
```

### target
**Type**: _Function_   
Callback function


### options.drop
**Type**: _Function_   


### options.over
**Type**: _Function_   


### options.out
**Type**: _Function_   



## Usage
```javascript
var dnd = new DnD(document.getElementById('drop'), { drop: onDropHandler });

function onDropHandler(e, files, text){
   console.log('files:', files);
   console.log('text:', text);
}
```