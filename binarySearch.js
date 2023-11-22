function binarySearch(arr, low , high, k){
    if(high >= low){
        let mid = Math.floor((low + high)/2)
        if(arr[mid] === k){
            return mid
        }
        else if(k > arr[mid]){
            return binarySearch(arr, mid+1, high, k)
        }
        else{
            return binarySearch(arr, low, mid - 1, k)
        }
    }
    return -1
}

const arr = Array.from({ length: 10000 }, (_, index) => index + 1); // starts from 1
// const arr = [...Array(10000).keys()] // starts from 0
const k = 0
const low = 0
const high = arr.length - 1
console.log(binarySearch(arr, low, high, k))
