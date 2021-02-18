function insert(num){
    document.form.textview.value = document.form.textview.value + num;
}

function equal(){
    exp = document.form.textview.value;
    if(exp){
       document.form.textview2.value = eval(exp);

    }

}

function c(){
    document.form.textview.value = "";
    document.form.textview2.value = "";
}

function back(){
    var exp = document.form.textview.value;
    document.form.textview.value = exp.substring(0, exp.length-1);
    
}
