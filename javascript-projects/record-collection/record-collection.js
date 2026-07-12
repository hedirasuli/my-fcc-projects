/**
 * Record Collection Manager
 * This function updates a musical album collection object based on specific rules.
 * It uses object properties, array manipulation, and conditional logic.
 */

// A sample collection object used for demonstration
const recordCollection = {
    2548: {
        albumTitle: 'Slippery When Wet',
        artist: 'Bon Jovi',
        tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
        albumTitle: '1999',
        artist: 'Prince',
        tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
        artist: 'Robert Palmer',
        tracks: []
    },
    5432: {
        albumTitle: 'ABBA Gold'
    }
};


function updateRecords(records, id, prop, value) {
   
    if (!records[id]) {
        records[id] = {};
    }
    
   
    if (value === "") {
        delete records[id][prop];
    } 
    
    else if (prop === "tracks") {
        
        if (!records[id].hasOwnProperty("tracks")) {
            records[id].tracks = [];
        }
        
        records[id].tracks.push(value);
    } 
   
    else { 
        records[id][prop] = value;
    }

    
    return records;
}

