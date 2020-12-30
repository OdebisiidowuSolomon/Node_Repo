const fs = require("fs");

fs.readFile("./text.txt", (err, data) => {
  let e = data.toString();
  let dA = e.split("+").join(",+").split("-").join(",-");
  let arr = dA.split(",");
  let total = 0;
  let arrOfT = [];
  let ncheck = null;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].substring(0, 1) == "+") {
      total += Number(arr[i]);
      arrOfT.push(Math.abs(total));
    } else if (arr[i].substring(0, 1) == "-") {
      total += Number(arr[i]);
      arrOfT.push(Math.abs(total));
    }
  }
  console.log(total);

  let test = [1, 2, 3, 4, 5, 1, 2, 3];
  let stest = test;

  for (i = 0; i < test.length; i++) {
    ncheck = test[i];
    console.log(ncheck);
    console.log(test.slice(0, 1));

    test.slice(i, 1).forEach((e) => {
      if (e === ncheck) {
        console.log(`${e} === ${ncheck}`, true);
      }
    });
    // console.log(ncheck);
  }
});
