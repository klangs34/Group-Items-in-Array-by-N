//alert('connected');

let myArr = [
    12345,"Name1",1,
    54321,"Name2",2,
    56789,"Name3",3,
    23456, "Name4", 4,
    78765, "Name5", 5,
    92837, "Name6", 6,
    34567, "Name7", 7,
    65432, "Name8", 8,
    09876, "Name9", 9,
];

let objArr = [];
let obj = {};

function convertArrToArrayObj(arr, num) {
    if ( num > arr.length){
        return null;
    }
    let count = 0;
    for (let i = 0; i < arr.length - num + 1; i = i + num){
        obj[count] = {
            id: arr[i],
            data: arr[i + 1],
            quantity: arr[i + 2]
        }
        count++;
    }
    return obj;
  }
  
  const newObj = convertArrToArrayObj(myArr,3);
  //console.log(newObj)

  //now push objects to array
  for (const property in obj) {
      objArr.push({
          id: obj[property]['id'],
          data: obj[property]['data'],
          quantity: obj[property]['quantity']
      })
  }

  console.log(objArr);
  