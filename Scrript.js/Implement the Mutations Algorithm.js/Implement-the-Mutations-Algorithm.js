function mutation(arr) {
const target = arr[0].toLowerCase();
const test = arr[1].toLowerCase();

for (let i = 0; i < test.length; i++) {
    const char = test[i];

    if (target.indexOf(char) === -1){
        return false;
    }
}
return true;
}