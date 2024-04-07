let currentdisplay='0';
let resultdisplay=false;
function appendtodisplay(value){
    if(currentdisplay==0||resultdisplay){
        resultdisplay=false;
        currentdisplay=value;
    }
    else{
        currentdisplay+=value;
    }
    updatedisplay();
}
 function updatedisplay(){
    const disp=document.getElementsByClassName('display');
    disp[0].textContent=currentdisplay;
}
function calcresult(){
    resultdisplay=true;
    try{
    let result=eval(currentdisplay);
    result=Math.trunc(result*100);
    result=result/100;
    currentdisplay=result+'';
    updatedisplay();}
    catch{
        currentdisplay='error';
        updatedisplay();
    }
}
function cleardisplay(){
    currentdisplay='0';
    resultdisplay=false;
    updatedisplay();
}
function deletelast(){
    currentdisplay=currentdisplay.slice(0,-1);
    if(currentdisplay==''){
        currentdisplay='0';
    }
    updatedisplay();
}