let action = document.getElementById("texxt");

function opr(number){
    action.value +=number;
}
function result(){
    try{
        action.value = eval(action.value);
    }
    catch(err){
        action.value = "E"
    }
}
function cancle(){
    action.value="";
}
function del(){
    action.value=action.value.slice(0,-1);
}
function darklight(){
    document.getElementsByTagName('div')[0].classList.toggle('spacedl');
    document.getElementsByTagName('div')[1].classList.toggle('datadl');
    document.getElementsByTagName('div')[2].classList.toggle('calcdl');
    document.getElementsByTagName('div')[3].classList.toggle('rowdl');
    document.getElementsByTagName('div')[4].classList.toggle('rowdl');
    document.getElementsByTagName('div')[5].classList.toggle('rowdl');
    document.getElementsByTagName('div')[6].classList.toggle('rowdl');
}