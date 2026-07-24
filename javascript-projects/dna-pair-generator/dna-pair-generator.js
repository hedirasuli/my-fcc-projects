/**
 * pairElement - Returns an array of DNA base pairs for a given DNA strand.
 * 
 * DNA base pairing rules:
 *   - A (Adenine) pairs with T (Thymine)
 *   - T (Thymine) pairs with A (Adenine)
 *   - C (Cytosine) pairs with G (Guanine)
 *   - G (Guanine) pairs with C (Cytosine)
 * 
 * @param {string} str - A string containing DNA bases (e.g., "ATCGA")
 * @returns {Array<Array<string>>} - A 2D array where each inner array is a pair [original, complement]
 * 
 * @example
 * // returns [["A", "T"], ["T", "A"], ["C", "G"], ["G", "C"], ["A", "T"]]
 * pairElement("ATCGA");
 * 
 * @example
 * // returns [["G", "C"], ["C", "G"], ["G", "C"]]
 * pairElement("GCG");
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