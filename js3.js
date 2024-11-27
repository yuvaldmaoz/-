

function countzero(arr) {
//פונקציה מחזירה כמה איברים הם אפסים
let count = 0 ;
for (let index = 0; index < arr.length; index++) {
    arr[index]=== 0 && count++ ;
}
return count;
}

const arr_numbers = [0,1,2,3,0,4];

console.log(countzero(arr_numbers));
