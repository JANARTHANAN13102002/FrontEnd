
const GCD = (num1,num2) => {
    var a = Math.min(num1,num2);
    
    while(a > 0)
    {
        if(num1 % a == 0 && num2 % a == 0)
            break;
        a--;
    }
    return a
}

console.log(GCD(36,60));