const but2 = document.querySelector(".formSubmit");
const listPlan = document.querySelector(".plan");
let arr = {};
let storage = window.localStorage.getItem("arrayList");
if(storage != null){
    let form = document.querySelector(".getStarted");
    let plan = document.querySelector(".hidden")
    arr = JSON.parse(storage);
    displayPlan(arr);
    form.classList.add("hidden");
    plan.classList.toggle("hidden");
    
}

but2.addEventListener('click', function(event){
    let sel1 = document.querySelector(".conditions").value;
    let sel2 = document.querySelector(".age").value;
    if(sel2 == "select"){
        window.alert("Age range required");
    }
    else{
        //event.preventDefault();
        renderNew(sel1, sel2);
        //window.location.reload();
        //window.stop();
    }
   
});

function renderNew(in1, in2){
    let newArr;
    let arr1=[];
    let ageArr;
    const conditions = {
        "select": [],
        "Cerobrosvascular Disease":['salmon','white potato', 'melon','soybean','albacore tuna','brown rice','no-fat milk'],
        "Diabetes":['non sugary beverages','non sugary whole milk','stevia instead of sugar','apple', 'low sugar fruits'],
        "Heart Disease":['olive oil','edamame','fresh herbs','black beans','salmon', 'oranges', 'tuna','sweet potatoes'],
        "Kidney Disease":['cauliflower','blueberries', 'sea bass','red grapes','garlic', 'buckwheat', 'skinless chicken', 'cabbage' ]
    } ;
    const age = {
        "20s":['skinless white-meat poultry','low-fat dairy', 'beans', 'tofu','apple','banana','plain','yogurt', 'walnuts' ],
        "30s":['chickpeas','asparagus','spinach','broccoli','fortified whole grain','dark chocolate', 'a bit of red wine','a bit of coffee','clams','lean beef','skinless poultry'],
        "40s":['low-fat dairy','oats','barley','pears', 'strawbwerries','beets', 'carrot'],
        "50s":['berries','arugula','brocoli','spinach','cod','trout','flax meal','chia seeds','legumes']
    };
    conArr = conditions[in1];
    ageArr= age[in2];
    arr1.push(conArr);
    arr1.push(ageArr);
    addLocal(arr1);
    arr1=[];

}
function addLocal(input) {
    window.localStorage.setItem("arrayList", JSON.stringify(input));
}

function displayPlan(array){
    let ul = document.createElement("ul");
    ul.className = "Suggestion";
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < array[i].length; j++){
            ul.innerHTML += "<li class='foodItems'>" + array[i][j] + "</li>";
        }
    };
    
    listPlan.appendChild(ul);
}