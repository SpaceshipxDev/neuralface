async () => {
  let arr = [];
  for (let i = 0; i < 10000000; i++) {
    arr.push(Math.floor(Math.random() * 10000000));
  }
  return arr;
};