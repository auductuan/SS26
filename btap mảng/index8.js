let numberList = [1, 3, 8, 2, 4, 5, 6, 4, 7, 3, 9, 9, 10];
let a = {};
for (let i=0; i < numberList.length; i++) {
    let b = numberList[i];
    a[b] = (a[b] || 0) + 1;
}
console.log("Cac phan tu xuat hien tu hai lan tro len:");

for (let b in a) {
    if (a[b] >= 2) {
        console.log(b);
    }
}