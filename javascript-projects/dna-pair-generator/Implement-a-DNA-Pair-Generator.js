/**
 
 * @param {string} str 
 * @returns {string[][]} 
 */
function pairElement(str) {

    const getPair = (base) => {
        switch (base) {
            case "A":
                return ["A", "T"]; 
            case "T":
                return ["T", "A"]; 
            case "C":
                return ["C", "G"]; 
            case "G":
                return ["G", "C"]; 
            default:
            
                return [];
        }
    };

   
    const pairedDNA = str
        .split("")
        .map(getPair);

 
    return pairedDNA;
}