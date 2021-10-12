function onSubmit(){
  const name=document.querySelector(".fname").value;
  const srName=document.querySelector(".lname").value;
  const ad=document.querySelector(".address").value;
  const pCode=document.querySelector(".pincode").value;
  const gndr=gendervl ();
  const fdItm=fd ();
   
  if(name&&srName&&ad&&pCode&&gndr&&fdItm){

    //insert row and cell in table
    var table=document .querySelector(".table");
    var row=table.insertRow (table.length);
    var fname=row.insertCell(0);
    var lname=row.insertCell(1);
    var adrs=row.insertCell(2);
    var pncode=row.insertCell(3);
    var gender=row.insertCell(4);
    var food=row.insertCell(5);

    console.log("row added");

     //write data in table
    fname.innerText=name;
    lname.innerText=srName;
    adrs.innerText=ad;
    pncode.innerText=pCode;
    gender.innerText=gndr;
    food.innerText=fdItm;
    console.log("data added to table");

    //clear input fields 
    document.querySelector(".fname").value="";
    document.querySelector(".lname").value="";
    document.querySelector(".address").value="";
    document.querySelector(".pincode").value="";
  }
    
} 

//get gender value
var gendervl=function (){
    if(document.querySelector(".male").checked)
      {console.log("male")
      return "Male";
    }
      else if(document.querySelector(".female").checked){
       console.log("female");
      return"Female";
    }
      else if(document.querySelector(".other").checked){
          console.log("other");
      return"Other";
    }
      
}

//to get checked values
var fd=function (){
    var vl=document.querySelectorAll(".food");
    var str="";
    var cnt=0;
    for(var i in vl){
        if(vl[i].checked===true){
          cnt++;
          str+=vl[i].value+",";
         //console.log(str);
        }
    }
    if(cnt<2){
      window.alert("select atleast 2 food items");
    
    }
    else{
    console.log(str);
    return str;
    }
  }
  
