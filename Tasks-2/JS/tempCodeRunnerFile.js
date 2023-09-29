function ReverseNum(num)
{
    let str = num.toString();
    let arr = str.split('');
    arr.reverse();
    let reverseStr = arr.join('');
    let reversedNum = parseInt(reverseStr);

    return reversedNum;
}

console.log(ReverseNum(32243))