function steamrollArray(arr) {
  const flattened = [];

  function flattener(element) {
    if (Array.isArray(element)) {
      for (let i = 0; i < element.length; i++) {
        flattener(element[i]);
      }
    } else {
      flattened.push(element);
    }
  }

  for (let i = 0; i < arr.length; i++) {
    flattener(arr[i]);
  }

  return flattened;
}