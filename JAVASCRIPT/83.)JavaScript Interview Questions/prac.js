function sum(arr){
    sum=0;
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]>=0)
        {
           sum=sum+arr[i];
        }
        else
        {
            break;
        }
    }
    console.log(sum);
    
}

let num=[1,2,-1,4,5]
sum(num);
