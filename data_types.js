let a = null; // we need to write null in order to make it null
let b = 345;
let c = true;
let d = BigInt("567") + BigInt("3");
let e = "mahesh";
console.log(b + e);
console.log(typeof (b + e));
let f = Symbol("I am a nice symbol");
let g = undefined; //not need to write undefined by default it is undefined
console.log(a, b, c, d, e, f, g);
console.log(typeof d);
console.log(typeof g);

//object in js

const item = {
  anil: true,
  suresh: false,
  mahesh: 67,
  rohan: undefined,
  rohit: null,
};
console.log(item["mahesh"]);
console.log(item["anil"]);

const ab = {
  name: "mahesh",
  section: 1,
  isprincipal: false,
};
// ab=45
console.log(ab["isprincipal"]);
ab["friend"] = "abhas";
console.log(ab);
ab["name"] = "anil";
console.log(ab);

const dict = {
  happy: "khush",
  sad: "dukh",
  angry: "gussa",
};
console.log(dict.happy);
