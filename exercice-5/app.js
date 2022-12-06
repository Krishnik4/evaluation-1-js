const myArray=[1,2,3,4,5];
for (const number of myArray) {
    if(number>2){
        console.log(number);
    }
}

const myArrayWithObjects=[{id:1,title:'a'},{id:2,title:'b'},{id:3,title:'c'}];
myArrayWithObjects.push({id:4,title:'d'});
myArrayWithObjects.unshift({id:5,title:'e'});
for (const object of myArrayWithObjects) {
    console.log(object.id+' : '+object.title);
}

const mySubArray=[myArrayWithObjects[myArrayWithObjects.length-2],myArrayWithObjects[myArrayWithObjects.length-1]];
console.log(mySubArray);