sia = ["abc", "d", "efghi", "j", "klmnop", "qr", "st", "uv", "wxyz"];
let firstLastName = [
  sia[4][3] +
    sia[0][0] +
    sia[6][1] +
    sia[0][0] +
    sia[4][1] +
    sia[2][4] +
    sia[0][0] +
    " " +
    sia[5][0] +
    sia[0][0] +
    sia[7][1] +
    sia[6][1] +
    sia[0][0] +
    sia[5][1] +
    sia[0][0] +
    sia[1][0] +
    sia[8][3] +
    sia[2][0],
];
console.log(
  firstLastName[0][5] +
    firstLastName[0][6] +
    firstLastName[0][8] +
    firstLastName[0][9] +
    firstLastName[0][10]
);
let a = "age";
let b = prompt();
let c = prompt();
firstLastName.push(a, b, c);
console.log(firstLastName);
