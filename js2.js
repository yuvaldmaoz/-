
function isPrime(n) {
    if (n < 2) return false; 
    for (let index = 2; index <= Math.sqrt(n); index++) {
        if (n % index === 0) {
            return false; 
        }
    }
    return true; 
}



for (let index = 0; index <= 237; index++) {
    //שימוש ללא ביטוי מותנה להדפסה כול הראשונים עד 237
    isPrime(index) && console.log(index);
}