var sum = 300;
current: while (sum < 310) {
  sum++;
  console.log(sum);
  for (; sum < 305; sum++) {
    if (sum == 303) {
      continue current;
    }
  }
}