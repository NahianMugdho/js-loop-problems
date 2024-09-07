/* 
Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100
*/
let i = 1;
let res = 0;
while(i<1000)
{
    res=res+i;
    if(res==100)
    {
        break;
    }
}
console.log(res)