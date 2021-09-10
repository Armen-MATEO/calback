import "./styles.css";

// Callback functions
//built-in callback functions
//setTimeout, Arr.forEach, geolocation.getCurrentPosition
//make your own callback functions


//setTimeout( hello, 2000, 'Bob')
let names = ['Inga','Tom','Mattias','Carlos'];
names.forEach(hello);

navigator.geolocation.getCurrentPosition(gotPosition, positionError, {});

function gotPosition(pos){
    
}
function positionError(err){
    
}


function doThing(other){
    let x = 7;
    //do lots of other things
    //...
    let name = 'Steve';
    other(name);
}

function hello(nm, idx, arr){
    console.log('hello', nm);
}

/** 
doThing(hello);
**/


document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;
