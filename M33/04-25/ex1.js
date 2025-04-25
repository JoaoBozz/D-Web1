function inverterArrayComReverse(arr) {
    arr.reverse();
  }
  function inverterArraySemReverse(arr) {
    for (let i = 0; i < Math.floor(arr.length / 2); i++) {
      let t = arr[i];
      arr[i] = arr[arr.length - 1 - i];
      arr[arr.length - 1 - i] = t;
    }
  }
  const v = [1, 2, 3, 4, 5];
  inverterArrayComReverse(v);
  console.log(v); // [5, 4, 3, 2, 1]
  inverterArraySemReverse(v);
  console.log(v); // [1, 2, 3, 4, 5]
  