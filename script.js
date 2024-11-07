// const BASE_URL = "https://v6.exchangerate-api.com/v6/d913651b4a90812cb0703d9f/latest/USD";
const BASE_URL = "https://v6.exchangerate-api.com/v6/d913651b4a90812cb0703d9f/latest/";

const FomBtn = document.querySelector("form button")
let amountInp = document.querySelector(".amount input");

 //*1. const fromSelect = document.querySelector('.fromSelect select') //📗🔖 we can get element reference  in javascriptt like css selector.console.log(dropDownSelects); // output: select  
 //*2. const toSelect = document.querySelector('.toSelect select') //📗🔖 we can get element reference  in javascriptt like css selector.console.log(dropDownSelects); // output:  select  
 const dropDownSelects = document.querySelectorAll('.dropdown-Area select') //📗🔖 we can get element reference  in javascriptt like css selector.console.log(dropDownSelects); // output: NodeList(2) select, select  

const fromCurr = document.querySelector(".from-area select")
const toCurr = document.querySelector(".to-area select")
const msgfiled = document.querySelector('.msg')

// console.log(dropDownSelects);




// for( in )  only used for object iteration.
// 1. country code/name.  like IN, JP, FR
// 2. currency code/name.  like INR, JPY, EUR


//?  for(let Code in countryList ){  // for in is used for object iteration it gives only key key. like array's index no.
 
//?      console.log(Code); // output: it gives only key key which are country currency name or currency code.
//?      console.log(countryList[Code]); // we can get object value-value when we have just object key-key via this array look style.
//?      console.log(code, countryList[code]);

//?  };

 //? for(let Currcode in countryList){ // iteration in object. so we use for in and it gives only key key.
 //?     let newOption = document.createElement('option')
 //?     newOption.innerHTML = Currcode;
 //?     newOption.value = Currcode; //📗🔖 creating value named attribute as well object key as value put in that.
 //?     console.log(newOption);
 //?    //  fromSelect.append(newOption);
 //?    //  toSelect.append(newOption);
 //? };


//? 
//? for(let selectts of dropDownSelects){
//? 
//?     console.log(selectts); //output: NodeList(2) select, select 
//? }


 // 1.

 //* for(let currency in countryList){
 //* 
 //*   // fromSelect.innerHTML = `<option value="${currency}">${currency}</option>`;  //📗🔖❌ overwrite solution is += see below
 //*   
 //*   // or 
 //*   
 //*   fromSelect.innerHTML =  fromSelect.innerHTML +  `<option value="${currency}">${currency}</option>`; //🔖📗 REAL USE += overwrite problem solved.
 //*   // fromSelect.innerHTML += `<option value="${currency}">${currency}</option>`; //🔖📗 REAL USE += overwrite problem solved.
 //*   
 //*   
 //*   // or append()
 //*   
 //*   // let neOption = document.createElement('option')
 //*   // neOption.innerHTML = currency;
 //*   // neOption.value = currency;
 //*   // fromSelect.append(neOption)
 //* 
 //* };


 // 2. 

 //* for(let currency in countryList){
 //* 
 //*   // toSelect.innerHTML = `<option value="${currency}">${currency}</option>`;  //📗🔖❌ overwrite solution is += see below
 //*   
 //*   // or 
 //*   
 //*   toSelect.innerHTML =  toSelect.innerHTML +  `<option value="${currency}">${currency}</option>`; //🔖📗 REAL USE += overwrite problem solved.
 //*   
 //*   
 //*   // or append()
 //*   
 //*   // let neOption = document.createElement('option')
 //*   // neOption.innerHTML = currency;
 //*   // neOption.value = currency;
 //*   // toSelect.append(neOption)
 //* 
 //* };



 // instaed of 1. , 2. at a time via loop

for(let selectts of dropDownSelects){   // NodeList or Array
    

    for(let Currcode in countryList){ // iteration in object. so we use for in and it gives only key key. but id yu pass key with object vai bracket style thenu will get data -data.
         
        // selectts.innerHTML =  selectts.innerHTML +  `<option value="${Currcode}">${Currcode}</option>`; ORRRRRR use append()

         let newOption = document.createElement('option')
         newOption.innerHTML = Currcode;
         newOption.value = Currcode; //📗🔖 creating and adding value named attribute as well object key as value put in that. no need bcz we can get option value directly via value attribute.
         console.log(newOption);

         if(selectts.name == "from" && newOption.innerHTML == "USD"){
            newOption.selected = "selected"; //📗🔖 creating and adding selected attribute and its value also selected OR newOption.selected = " ";
         }else if (selectts.name == "to" && newOption.innerHTML == "INR"){
            newOption.selected = "selected";  // OR newOption.selected = " ";
         }

        selectts.append(newOption);
    }

    selectts.addEventListener("change", (e)=>{
         // alert("hhhh")
        updateFlag(e.target); // call
        // console.log(e.target);
        // console.log(e.target.value);
    });
}


const updateFlag = (elemnt)=>{
//    console.log("eeee",elemnt);
//    console.log("eeee",elemnt.parentElement); <div class="select-container"></div>
   let Currcode = elemnt.value;
   console.log(Currcode);
   let countryCode = countryList[Currcode]; // 2nd Style. for in loop in object by default key but if u use this style object[key] then it gives value or data.
//    console.log(countryCode);
   let newSrc =  `https://flagsapi.com/${countryCode}/flat/64.png`;
//    let img = elemnt.previousElementSibling ; // till now my style.
   let img = elemnt.parentElement.querySelector("img"); //📗🔖 new style to accesses any relation element.
   img.src = newSrc;
}

   

FomBtn.addEventListener('click', async (e)=>{
   e.preventDefault();
   // after click 2 works are being done.

  // task 1 - takeoff the input element value

   userAmount = amountInp.value
   console.log(userAmount);

   if(userAmount == "" || userAmount < 1){

    userAmount = 1;
    amountInp.value = "1";

   }

// task 2 - takeoff the input(from select element and its option element)  its value.

//   fromData = fromCurr.value; or direct pass to url
//   toData = toCurr.value; or direct pass to url

console.log(fromCurr.value, toCurr.value); //📗🔖📗 USD INR which option(e.target.innerHTML) is change or click that innertext and then pass to url and its template.
// const URL = `BASE_URL/usd`;
const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}`; // our values coming in capital and api takes and works with small letter.
  
  let response =  await fetch(URL)
  console.log(response);
  let data = await response.json();
  console.log(data);

//1st style to get rate  
  let rate = data.conversion_rates[toCurr.value] // how to access data,value of obj via key - it is 2nd style bracket style and normally dot style also exist.
  console.log(rate);

//2nd way to get rate or in details

//   let rateObj = data.conversion_rates; 
//   console.log(rateObj);

//   rate = rateObj[toCurr.value]
//   console.log(rate);


//3rd way to get rate or in loop

// for(let tobeCurr in rate){

//     if(tobeCurr === toCurr.value){
//       console.log(tobeCurr);
//       console.log(rate[tobeCurr]);
           
//       let finalAmount = userAmount * rate[tobeCurr].toFixed(2);

//                            // 1USD = 84INR
//       msgfiled.innerText = `${userAmount} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;

//     }

//   }


  
  let finalAmount = userAmount * rate.toFixed(2);

  // 1USD = 84INR
  msgfiled.innerText = `${userAmount} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
});
