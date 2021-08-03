let but2 = document.querySelector(".formSubmit")

but2.addEventListener('click', ()=>{
    let sel1 = document.querySelector(".conditions").value;
    let sel2 = document.querySelector(".age").value;
    console.log(sel2);
    if(sel2 === "select"){
       window.alert("Age range required");
    }
    else{
        
    }
})