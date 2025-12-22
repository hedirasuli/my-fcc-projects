function destroyer(arr, ...valsToRemove) {
    
    return arr.filter(function (val) {

        return !valsToRemove.includes(val);
    });
}