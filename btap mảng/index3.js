let number=+prompt("Nhap 1 so nguyen bat ki");
let numberList=[1, 2, 3, 4, 5, 1, 1, 3, 4];
let a=0;
for(let i=0; i<numberList.length; i++){
    if (number==numberList[i]) {
        a++;
    }
}
if (a>=1) {
    console.log("So lan xuat hien la:"+a);
}else{
    console.log("Kh xuat hien trong mang");
}

    
    