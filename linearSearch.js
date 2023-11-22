function linearSearch(arr, n){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === n){
            return i + 1
        }
    }
    return "Number is not in the array"
}
console.log(linearSearch([4,2,6,1,8,0,3], 0))