function diffArray(arr1, arr2) {
 
  const isInArray = (item, array) => array.includes(item);

  
  const diffFromArr1 = arr1.filter(item => !isInArray(item, arr2));

  
  const diffFromArr2 = arr2.filter(item => !isInArray(item, arr1));

  return diffFromArr1.concat(diffFromArr2);
}


console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])); 
console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"])); 

console.log(diffArray([], ["snips", "sprockets"])); 