const pizzas = [
  {
    name: "პეპერონი",
    price: 20
  },
  {
    name: "მარგარიტა",
    price: 15
  },
  {
    name: "კომბინირებული",
    price: 22
  }
]


let x=random(0,pizzas.length);
const z = document.getElementById("txt");

function random(a,b){
  return Math.floor (Math.random () * (b-a) + a);
}


let start;


function step1 (){
    const message = "თქვენი პიცა " + pizzas[x].name + " მზადდება";
    start = new Date ();
    console.log(message);
    z.textContent = message;

    setTimeout(step2, 2000);
}

    
function step2 (){
    const message = "თქვენი პიცა გზაშია";
    
    console.log(message);
    z.textContent = message; 

    setTimeout(step3, 5000);
}


function step3 (){
    const finish = new Date ();
    const message = `
        თქვენი პიცა ადგილზეა, ფასი - ${pizzas[x].price} ₾ <br/>
        შშეკვეთის ხანგრძლივობა დაწყებიდან დასრულებამდე ${(finish-start)/1000} წამი
    `;

    console.log(message);
    z.innerHTML = message;
}
