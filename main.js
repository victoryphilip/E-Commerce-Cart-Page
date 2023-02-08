var plus = document.querySelector(".fa-plus");
var minus = document.querySelector(".fa-minus");
var qty = document.querySelector(".qty");

plus.addEventListener('click',function(){
    var increment=parseInt(qty.innerHTML);
    if(increment<9){
        increment=increment+1;
        qty.innerHTML=increment;
    }
});

minus.addEventListener('click',function(){
    var decrement=parseInt(qty.innerHTML);
    if(decrement>1){
        decrement=decrement-1;
        qty.innerHTML=decrement;
    }
});

var heart=document.querySelector(".fa-heart-o");

heart.addEventListener('click',function(){
    if(heart.classList.contains('fa-heart-o')){
        heart.classList.remove('fa-heart-o');
        heart.classList.add('fa-heart');
    }
    else{
        heart.classList.add('fa-heart-o');
        heart.classList.remove('fa-heart');
    }
   
});