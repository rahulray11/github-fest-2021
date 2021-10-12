// Calculate Knapsack
function knapsack(arr, maxWeight, size) {
  let currentWeight = 0,
    finalValue = 0;
  let arrRatio = [];

  // Find the ratio of each item
  for (let i = 0; i < size; i++) {
    const { weight, value, name } = arr[i];
    const ratio = value / weight;
    const payload = { weight, value, name, ratio };

    arrRatio.push(payload);
  }

  // Sort ratio
  arrRatio.sort(function (a, b) {
    return b.ratio - a.ratio;
  });

  // Loop for finding best item
  function loopWeight(weight, value) {
    if (currentWeight + weight <= maxWeight) {
      currentWeight += weight;
      finalValue += value;
      loopWeight(weight, value);
    }
  }

  for (let i = 0; i < size; i++) {
    const { weight, value } = arrRatio[i];
    loopWeight(weight, value);
  }

  // Show the final value
  console.log(
    `Maximum profit = ${finalValue} which total weight = ${currentWeight}`
  );
}

function main() {
  const knapsackWeight = 31;
  const arr = [
    { name: "Diamond", value: 5120, weight: 4 },
    { name: "Zamrud", value: 6580, weight: 6 },
    { name: "Ruby", value: 4720, weight: 3 },
    { name: "Sapphire", value: 5860, weight: 5 },
    { name: "Gold", value: 8125, weight: 8 },
    { name: "Pearl", value: 3250, weight: 3 },
  ];

  const size = arr.length;

  console.log(`Knapsack Weight = ${knapsackWeight}`);
  console.log(`Item from array: `);
  console.table(arr);

  knapsack(arr, knapsackWeight, size);
}

main();
