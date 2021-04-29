// Question:
// Convert an array of integers into an array of strings representing the phonetic equivalent of the integer.

// For example:
// Given an array: [3, 25, 209], print “Three,TwoFive,TwoZeroNine” into stdout.
// Given an array: [10, 300, 5], print “OneZero,ThreeZeroZero,Five” into stdout.

function phoneticInteger(arrOfNum) {
  const integerPhonetic = {
    0: "Zero",
    1: "One",
    2: "Two",
    3: "Three",
    4: "Four",
    5: "Five",
    6: "Six",
    7: "Seven",
    8: "Eight",
    9: "Nine",
  };

  const integerPhoneticNums = [];

  for (let i = 0; i < arrOfNum.length; i++) {
    let eachNum = arrOfNum[i];
    let str = "";
    for (let j = 0; j < eachNum.length; j++) {
      str += integerPhonetic[eachNum[j]];
    }
    integerPhoneticNums.push(str);
  }
  console.log(integerPhoneticNums.join(","));
}

phoneticInteger(["3", "25", "209"]);
phoneticInteger(["10", "300", "5"]);
