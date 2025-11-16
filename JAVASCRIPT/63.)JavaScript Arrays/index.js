let arr=[1,2,4,5,7]

console.log(arr,typeof arr); //to check the type of array
console.log(arr.length);
console.log(arr[0]);
console.log(arr[2]);

arr[0]=5666;
console.log(arr)

console.log(arr.toString()) //To convert the array to string
console.log(arr.join(" and ")) //replaces comma with and



a=[1,2,3,4,5,6]
console.log(a.pop())  //using pop you can delete the last element of array
console.log(a.shift())//using shift you can delete the first element of array

console.log(a.push(100))//using push you can add element at last
console.log(a.unshift("Harry")) //using unshift you can add element at first
console.log(a)

delete a[5] //This deletes the last item but allocates the memory for that
console.log(a)
console.log(a[5]) // shows undefined