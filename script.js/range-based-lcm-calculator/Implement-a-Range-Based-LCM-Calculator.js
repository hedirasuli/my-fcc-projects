function gcd(a, b) {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
}

function lcm(a, b) {
  return Math.abs(a * b) / gcd(a, b);
}


function smallestCommons(arr) {
  const [min, max] = arr.sort((a, b) => a - b);

  const range = [];
  for (let i = min; i <= max; i++) {
    range.push(i);
  }

  let finalLCM = range[0];

  for (let i = 1; i < range.length; i++) {
    finalLCM = lcm(finalLCM, range[i]);
  }

  return finalLCM;
}