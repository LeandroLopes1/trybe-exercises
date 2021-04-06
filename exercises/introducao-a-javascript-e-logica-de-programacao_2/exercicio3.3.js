function maiorValorIndice(array){
    let maiorIndice = 0;
    for(let index in array){
         if (array[maiorIndice] < array[index]) {
           maiorIndice = index;
       }
     } 
    return maiorIndice;
}
  console.log(maiorValorIndice([2, 3, 6, 7, 10, 1])); //4

  