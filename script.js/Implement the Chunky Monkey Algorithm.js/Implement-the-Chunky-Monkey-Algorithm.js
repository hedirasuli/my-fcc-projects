function chunkArrayInGroups(arr, size) {

   const chunkArray = [];
   for (let i = 0; i < arr.length; i +=size) {
    chunkArray.push(arr.slice(i, i + size));
   }

return chunkArray;
}