var arr = [1, 2, 3, 4, 5],
    index = 0;
arr[3] = "strick";
arr[index + 4] = [6, 7];

arr["pw"] = "strick";
arr[-1] = "strick";
arr["3.14"] = "strick";
arr[10] = "strick";
console.log(arr);