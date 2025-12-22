function frankenSplice(arr1, arr2, n) {

    let result = arr2.slice();

    for (let i = 0; i <arr1.length; i++) {
        result.splice(n + i, 0, arr1[i]);
    }
return result;
}