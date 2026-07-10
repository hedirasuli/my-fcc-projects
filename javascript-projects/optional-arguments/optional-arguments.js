function addTogether(a, b) {
    const isNumber = (val) => typeof val === 'number';

    if (!isNumber(a)) {
        return undefined;
    }

    if (arguments.length === 2) {
        if (isNumber(b)) {
            return a + b;
        } else {
            return undefined;
        }
    }

    if (arguments.length === 1) {
        return function(b2) {
            if (isNumber(b2)) {
                return a + b2;
            } else {
                return undefined;
            }
        };
    }
}