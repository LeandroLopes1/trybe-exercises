let n = 5;
let space = n/2

for(let index = 1; index <= n; index += 2 ) {
    if (n>1){
        console.log(' '.repeat(space) + '*'.repeat(index));
    space -=1
    }
    
}
