let myArr = [];
let inputValue;
while ((inputValue = prompt("Enter a value"))){
  myArr.push(String(inputValue));
}

function pravin(){
    let a= document.getElementById("datas").value;
    let c="";
    for(let i=0; i<myArr.length;i++)
    {
        c+=myArr[i];
        if(myArr.includes(a))
        {
            let b=document.getElementById("getvalue");
            b.innerHTML=c;
        }
        else{
            let b=document.getElementById("getvalue");
            b.innerHTML="Invalid";
        }
    }
    
}

console.log(myArr);
