/* Reverse Any Input */
console.log("************* 1 *************");

var x= "ayat";
var xstr = x.toString();
var reversed=''; // if we dont init, it will be undefined
for(var i=xstr.length -1; i>= 0 ; i--){
    reversed += xstr[i];
}
console.log("Input: ", x);
console.log("Reversed Output : ", reversed);


/*  if Number Exist */
console.log("************* 2 *************");

var n =4;
arr = [3, 0 ,1,4,6,8];
flag =0;

for(var i = 0 ; i<arr.length; i++){
    if(arr[i] == n){
        console.log("Element Esixt in index : ",i);
        flag = 1;
        
    }
}
if(!flag){
    console.log("Element Doesn't Esixt ", -1);
}


/*  Remove Element  */
console.log("************* 3 *************");

var arrSize =prompt("enter Array Size ");
arr2 = [];
for(var i =0 ; i<parseInt(arrSize) ; i++){
    var ele = prompt("enter Element ");
    arr2.push(ele);
}
console.log("Array Before Remove ", arr2);
rvElement = prompt("Enter index of number to remove ");

if(rvElement > arr2.length || reversed <0){
    console.log("out of Index ");
}else{
    arr2.splice(rvElement,1);
    console.log("Array Aferre REmove ", arr2);
}

/*  palindrome  */
console.log("************* 4*************");

var inputStr = prompt("Check palindrome :");
inputStr = inputStr.toString();
flag2 =1;
for(var i =0 ; i<inputStr.length ;i++ ){

    if(inputStr[i] != inputStr[inputStr.length -i-1] ){
        flag2= 0;
        break;
    }   
}
if(flag2){
    console.log("Yes");
}else{
    console.log("No");
}

/*  Studesnt Grades  */
console.log("************* 4*************");

avg =0;
sum =0
cnt =0;
studgentGrade = [60, 100,10,15,85,70,45,30];
stdNumber  =studgentGrade.length ;
for(var i = 0 ; i< stdNumber; i++){
    sum += studgentGrade[i];
    if(studgentGrade[i] >= 60){
        cnt++;
    }
}
avg = sum/stdNumber;
console.log("The Average = ", avg);
console.log("The Sum = ", sum);
console.log("No Student pass = ", cnt);


/*  AVG Sum and Cont  */
console.log("************* 6  *************");

sum = 0;
var n,n2;
while(n2 != 0 || sum <100){
    n = prompt("Enter Numerc value");
    n2 = parseFloat(n);
   if(isNaN(n2)){
       console.log("please enter numeric value ");
       continue;
   }
   sum += n2;
   if(sum >100){
       console.log("The sum >100 ");
       break;
   }
}

console.log("Total Sum is = ", sum);