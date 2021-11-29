var myString = ["jimy", "whatisthis", "morning", "therefore", "there", "whereabout"]
function getNewArray(arr){

    return arr.filter(v => v.length >= 5 && v.includes("a"));

}

const a= getNewArray(myString);

console.log(a);