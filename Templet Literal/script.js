let x=document.querySelector('button');
x.addEventListener('click',pravin);
function pravin() {
  //     let b="Namakkal";
  // let a=document.getElementById("data").value;
  // if(a==b)
  // {
  //      let p = `Welcome ${a} people,  Here the population is 2 lakhs, and your economy is 100,65,781 and Your growth ratio is 7.89% and language is hindi`;
  //     let c=document.getElementById("data1");
  //     c.innerHTML=p;
  // }

  // else{
  //     let d=document.getElementById("data1");
  //     d.innerHTML="Invalid";
  // }
  let a = "Namakkal";
  let b = "karur";
  let l = "Chennai";
  let m = "Coimbatore";
  let A=3;
  let B=3434;
  let C=7.89+"%";
  let c = document.getElementById("data").value;
  switch (c) {
    case "Namakkal":
      let d = `Welcome ${a} people,  Here the population is ${A} lakhs, and your economy is ${B}  and Your growth ratio is ${C} and language is hindi`;
      let e = document.getElementById("data1");
      e.innerHTML = d;
      break;e

    case "Karur":
      let f = `Welcome ${b} people,  Here the population is 2 lakhs, and your economy is 100,65,781 and Your growth ratio is 7.89% and language is hindi`;
      let g = document.getElementById("data1");
      g.innerHTML = f;
      break;

    case "Chennai":
      let h = `Welcome ${l} people,  Here the population is 2 lakhs, and your economy is 100,65,781 and Your growth ratio is 7.89% and language is hindi`;
      let i = document.getElementById("data1");
      i.innerHTML = h;
      break;

    case "Coimbatore":
      let j = `Welcome ${m} people,  Here the population is 2 lakhs, and your economy is 100,65,781 and Your growth ratio is 7.89% and language is hindi`;
      let k = document.getElementById("data1");
      k.innerHTML = j;
      break;

    default:
      let s = document.getElementById("data1");
      s.innerHTML = "Invalid";
      break;
  }
}
