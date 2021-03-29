let n = 7;
let space = n/2

if (n > 1) {
  for (let index = 1; index <= n; index += 2) {
    if (index === 1) {
      console.log(' '.repeat(space) + '*');
      space -= 1;
    }

    if (space > 0) {
      console.log(' '.repeat(space) + '*' + ' '.repeat(index) + '*');
      space -= 1.25
    }

  
    if (index === 7) {
      console.log('*'.repeat(index));
      
    }
  }
}


