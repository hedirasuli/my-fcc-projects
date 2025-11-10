function repeatStringNumTimes(str,num) {
    if (num <= 0) {
        return "";
    }

let repeatString = "";
 for (let i = 0; i < num; i++) {
    repeatString = repeatString + str;
 }

return repeatString;

} 