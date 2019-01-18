const calculateItems = (min, max, chance, item) => {
  const num1 = Math.floor(Math.random() * chance ) + 1;
  const num2 = Math.floor(Math.random() * chance ) + 1;
  if (num1 === num2) {
    return {
      item, 
      amount: Math.floor(Math.random() * (max - min + 1) ) + min
    };
  }
  else return {
    item,
    amount: 0
  }
}
export default calculateItems;