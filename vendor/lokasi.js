const {Dataset} = require('data.js')

const path = 'https://datahub.io/JemputData/location_id/datapackage.json'

// We're using self-invoking function here as we want to use async-await syntax:
;(async () => {
  const dataset = await Dataset.load(path)
  // get list of all resources:
  for (const id in dataset.resources) {
    console.log(dataset.resources[id]._descriptor.name)
  }
  // get all tabular data(if exists any)
  for (const id in dataset.resources) {
    if (dataset.resources[id]._descriptor.format === "csv") {
      const file = dataset.resources[id]
      // Get a raw stream
      const stream = await file.stream()
      // entire file as a buffer (be careful with large files!)
      const buffer = await file.buffer
      // print data
      stream.pipe(process.stdout)
    }
  }
})()

var codesEl;
var jsonData = [
  {
    "name": "amazon",
    "code": "aksdhfkjags"
  },
  {
    "name": "aMaZoN",
    "code": "qiweuryqew"
  },
  {
    "name": "flipkart",
    "code": "kjqwherklq"
  },
  {
    "name": "flipkart",
    "code": "qmbewnqbwe"
  },
  {
    "name": "flipkart",
    "code": "zzvzxcvvnmz"
  },
  {
    "name": "ebay",
    "code": "tyjutynf"
  },
  {
    "name": "ebay",
    "code": "asgcmngjhjser"
  }
];

function printData(Arr) {
  for(var i=0; i<Arr.length; i++) {
    codesEl.innerText += `\n${Arr[i].name} code: ${Arr[i].code}`;
  }
}

// it is a case insensitive search
function search(ev) {
  var key = ev.target.value;
  codesEl.innerText = null;
  
  printData(jsonData.filter((data)=>{
    var regex = new RegExp(key, "i");
    return data.name.match(regex) || data.code.match(regex);
  }));
}

window.onload = function() {
  codesEl = document.getElementById("codes");
  printData(jsonData);
}

