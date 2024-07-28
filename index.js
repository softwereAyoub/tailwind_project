var header =document.getElementById('header');
var button=document.getElementById('butt');
button.onclick=function(){
scrollTo(0,0);
console.log('test');

}
console.log(window.screen);
onscroll=function(){
 
    if(scrollY<2020){
        button.style.display='none';
    }
    else{
        button.style.display='block'; 
    }

 
    
}