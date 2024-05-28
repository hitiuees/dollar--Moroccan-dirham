
let dollar=document.getElementsByName("dollar")[0];
let dh=document.getElementById("result");
dollar.onclick=function(){
    let j=dollar.value;
let i=parseFloat(j*9.93)
    dh.textContent=`{${j}} USD Dollar = {${i.toFixed(2)}} MOROCCAN DIRHAM(mad)`
}