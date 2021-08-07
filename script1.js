const but2 = document.querySelector(".formSubmit");
let arr = {};
let storage = window.localStorage.getItem("arrayList");
if(storage != null){
    arr = JSON.parse(storage);
    console.log(arr);
}

but2.addEventListener('click', function(event){
    let sel1 = document.querySelector(".conditions").value;
    let sel2 = document.querySelector(".age").value;
    if(sel2 == "select"){
        window.alert("Age range required");
    }
    else{
        event.preventDefault();
        renderNew(sel1, sel2);
    }
   
});

function renderNew(in1, in2){
    let newArr;
    let arr1=[];
    let ageArr;
    const conditions = {
        "select": [],
        "Cerobrosvascular Disease":['a','b'],
        "Diabetes":['a','b','c'],
        "Heart Diseases":['p','x'],
        "Kidney Disease":['x','q']
    } ;
    const age = {
        "20s":['1','2'],
        "30s":['1','2','3'],
        "40s":['40','40'],
        "50s":['50','50']
    };
    conArr = conditions[in1];
    ageArr= age[in2];
    arr1.push(conArr);
    arr1.push(ageArr);
    console.log(arr1);
    addLocal(arr1);
    arr1=[];

}
function addLocal(input) {
    window.localStorage.setItem("arrayList", JSON.stringify(input));
    //newArr = JSON.parse(window.localStorage.getItem("arrayList"));
}