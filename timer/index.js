 let seconds = 00 ;
 let tens = 00;
let OutPutSeconds = document.getElementById('seconds');
let OutPutTens = document.getElementById('tens');
let buttonStart = document.getElementById('btn-start');
let buttonStop = document.getElementById('btn-stop');
let buttonReset = document.getElementById('btn-reset');

let Interval;

buttonStart.addEventListener('click', () =>{
    clearInterval(Interval);
    Interval = setInterval(startTime, 10);

});

buttonStop.addEventListener('click',() =>{
    clearInterval(Interval)
});

buttonReset.addEventListener('click',() =>{
    clearInterval(Interval);
    tens = "00" ;
    seconds = "00";
    OutPutSeconds.innerHTML = seconds;
    OutPutTens.innerHTML = tens;
})

function startTime(){
    tens++;
    if(tens <= 9){
       OutPutTens.innerHTML = "0" + tens ; 
    }
if (tens > 9){
    OutPutTens.innerHTML = tens ;
}
if (tens >  99){
    seconds ++;
    OutPutSeconds.innerHTML = "0" + seconds+ ":"  ;
    tens =0;
    OutPutTens.innerHTML = "0" + tens   ;
 }

if(seconds > 9){
    OutPutSeconds.innerHTML = seconds+ ":"  ;
}


}