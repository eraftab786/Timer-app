
// animation for card-----------------

var mycard=document.getElementById("my-card");
var open=document.getElementById('open');

mycard.style.visibility='hidden';
open.addEventListener('click',openApp);

function openApp(){
    mycard.style.position='absolute';
    var pos=0;
    var margin=10;
    
    open.remove();
    var s=setInterval(() => {
        pos+=1;
        console.log(pos);
        if(pos==margin){
            clearInterval(s);
            
            
        }
        mycard.style.visibility='visible';
        mycard.style.margin=pos+'%';
        //mycard.style.left=pos+'%';
        
    },20);
    
   
   

}




//----------------------Timer logic----------------------------------
var count_num = document.getElementById("count-num");
var start_count = document.getElementById("start");
start_count.addEventListener('click', start_countt);
var c = 0;
var iscount = 1;
var t;

function counted() {
    count_num.innerHTML = c;
    c += 1;
    t = setTimeout(counted, 100);

}



function start_countt() {
    start_count.removeEventListener('click', start_countt);
    start_count.innerHTML = "Stop";
    start_count.addEventListener('click', Stop_countt);
    function Stop_countt() {
        clearTimeout(t);
        iscount = 1;
        start_count.removeEventListener('click', Stop_countt);
        start_count.innerHTML = "Start";
        start_count.addEventListener('click', start_countt);
    }
    if (iscount) {
        iscount = 0;
        counted();


    }
}

// page reload-------------------------------------------
var reload=document.getElementById('reload-page');
reload.addEventListener('click',function(){
    location.reload();
});
