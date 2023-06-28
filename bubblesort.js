function bubblesort(arr){
    const n = arr.length // storing total length of the array in a variable
    for(let i = 0; i < n; i++){ 
        for(let j = 0; j < (n - 1); j++){ // iterating all the values in the array
            if(arr[j] > arr[j+1]){  // checking if the first number of the array is greater than the second one
                let temp = arr[j];
                arr[j] = arr[j+1];    // if so, swap the two numbers using temp variable 
                arr[j+1] = temp; 
            }
        }
    }
    return arr;  // finally return the sorted array
}

console.log(bubblesort([11,2,13,444, 0, 0, 4,32,324, 1,31]));