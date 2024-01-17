let pick = prompt("Nhap 1 thu bat ki");
let student1="Quang";
let student2="Truong";
let student3="Tung";
let a=0;
let studentList = new Array(student1, student2, student3);
for(let i=0; i <= studentList.length; i++){
    if (pick==studentList[i]) {
        console.log("Vi tri",i);
        a++;
    }
}
if (a==0) {
    console.log("Kh phan tu nao ton tai");
    
}