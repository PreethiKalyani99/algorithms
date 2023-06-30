const items = Array.from({length: 10000030}, () => Math.floor(Math.random() * 10000030));
// console.log(items);

// choosing mid element in array as pivot----------------best case O(n logn)--------------------------------------------------------------------------------

function swap(items, leftIndex, rightIndex){
    let temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
}
function partition(items, left, right) {
    // console.log(left,right,"initial l and r -> pos");
    let pivot   = items[Math.floor((right + left) / 2)]  //middle element
    // console.log(pivot,"p -> out of main while");
    while (left <= right) {
        // console.log(left,right,"checkkk -> l,r - pos");
        while (items[left] < pivot) {
            // console.log(items[left],pivot,"l,p");
            // console.log(items,"l<p");
            left++;
        }
        while (items[right] > pivot) {
            // console.log(items[right], pivot, 'r,p');
            // console.log(items,"r>p");
            right--;
            // console.log(items[right],"r");
        }
        if (left <= right) {
            // console.log(left, right, "l,r - pos");
            swap(items, left, right); //sawpping two elements
            // console.log(items,"swap");
            // console.log(pivot,"p after swap");
            left++;
            right--;
            // console.log(items[left],"l after swap");
            // console.log(items[right],"r after swap");
        }
    }
    // console.log(left,"returning left pos----------------------------------------------");
    return left;
}

function quickSort(items, left, right) {
    // console.log("again............................");
    // console.log(left,"after again left,,,,,,,,,,,,,,,,,,,,,,");
    let index;
    if (items.length > 1) {
        index = partition(items, left, right); //index returned from partition
        // console.log(left,right,"out left qs=============");

        if (left < index - 1) { //more elements on the left side of the pivot
            // console.log(left,"quicksort left pos----------------");
            quickSort(items, left, index - 1);
        }
        if (index < right) { //more elements on the right side of the pivot
            // console.log(right,"quicksort right pos---------------------");
            quickSort(items, index, right);
        }
    }
    return items;
}
// first call to quick sort
let sortedArray = quickSort(items, 0, items.length - 1);
console.log(sortedArray);

// -------------------------------------------------------Quick sort - when choosing last element in array as pivot-------Worst case O(n^2)-----------------------------------------------------------------------------------


// function quickSort(arr){
//     if(arr.length <= 1){ // it'll return if array is empty or length = 1
//         return arr;
//     }
//     let endElement = arr.length-1;
//     let pivot = arr[endElement]; // assigning last element in the array as pivot element
//     let leftarr = [];
//     let rightarr = [];
    
//     for(let i=0; i < arr.length - 1; i++){ // looping through array excluding last element(pivot)
//         arr[i] < pivot ? leftarr.push(arr[i]) : rightarr.push(arr[i]); // checking the element is less than pivot. If so, pushing that elem in left array else in right array
//     }   
//     return [...quickSort(leftarr), pivot, ...quickSort(rightarr)]; // spreading the left arr, pivot and right arr and returning the sorted array
// }

// let arr = Array.from({length: 10000030}, () => Math.floor(Math.random() * 10000030));
// console.log(quickSort(arr));