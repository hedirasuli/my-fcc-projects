const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];


/**
 * @param {number} par
 * @param {number} strokes
 * @returns {string} - The golf score name corresponding to the strokes taken.
  */ 

function golfScore(par, strokes) {
    if (strokes === 1) {
        return names[0]; // Hole-in-one!
    }
    else if (strokes <= par - 2) {
        return names[1]; // Eagle
    }
    else if (strokes === par - 1) {
        return names[2]; // Birdie
    }

    else if (strokes === par) {
        return names[3]; // Par
    }
    else if (strokes === par + 1) {
        return names[4]; // Bogey
    }
    else if (strokes === par + 2) {
        return names[5]; // Double Bogey
    }
    else {
        return names[6]; // Go Home!
    }
}
console.log("par 4, strokes 1 (Hole-in-one!): ", golfScore(4, 1));
console.log("par 4, strokes 2 (Eagle): ", golfScore(4, 2));
console.log("par 5, strokes 3 (Birdie): ", golfScore(4, 3));
console.log("par 4, strokes 4 (Par): ", golfScore(4, 4));
console.log("par 4, strokes 5 (Bogey): ", golfScore(4, 5));
console.log("par 4, strokes 6 (Double Bogey): ", golfScore(4, 6));
console.log("par 4, strokes 7 (Go Home!): ", golfScore(4, 7));
console.log("par 5, strokes 8 (Go Home!): ", golfScore(5, 8));
console.log("par 5, strokes 9 (Go Home!): ", golfScore(5, 9));