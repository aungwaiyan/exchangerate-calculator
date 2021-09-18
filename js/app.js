//UI

const currencyoneel = document.getElementById('currency'),
      amountoneel = document.getElementById('amount-one');


const currencytwoel = document.getElementById('currency-two'),
      amounttwoel = document.getElementById('amount-two');

const swapel = document.getElementById('swap'),
      rateel = document.getElementById('rate');

function calculate(){
   // console.log("hay");
   const crcyone = currencyoneel.value;
   const crcytwo = currencytwoel.value;

   const apikey = "e6f680609310a9b516bd0802"

   const uri = `https://v6.exchangerate-api.com/v6/${apikey}/latest/${crcyone}`;
  // console.log(uri);

   //AJAX request

  fetch(uri)
  .then(res=>res.json())
  .then(req=>{
    //   console.log(data);
    
    // console.log(req.conversion_rates);
    // console.log(typeof req.conversion_rates);
    // console.log(req.conversion_rates[crcytwo]);

    const rate = req.conversion_rates[crcytwo];
    console.log(rate);

    rateel.innerHTML = `1 ${crcyone} = ${rate} ${crcytwo}`;

   amounttwoel.value = (amountoneel.value * rate).toFixed(2);

  });

   
}

//event listener
currencyoneel.addEventListener('change',calculate);
amountoneel.addEventListener('input',calculate);

currencytwoel.addEventListener('change',calculate);
amounttwoel.addEventListener('input',calculate);

swapel.addEventListener('click',()=>{
    console.log('already swape');

    const temp = currencyoneel.value;

    currencyoneel.value = currencytwoel.value;
    currencytwoel.value = temp;
    

    calculate();
});