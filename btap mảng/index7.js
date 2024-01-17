let number=+prompt("Nhap 1 so nguyen bat ki");
let numberList=[1,5,6,3,2,1,1,5,6,7];
let a;
for(let i=0; i<numberList.length; i++){
    a=1;
    for(let j=i+1;j<numberList.length;j++){
        if(numberList[i]==numberList[j]){
            a++
        }
    }
    if(a>=2){
        console.log(numberList[i]);
    }
    }

14