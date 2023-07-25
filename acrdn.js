/*
аккордеон сначала пробовала сделать сама, с помощью switch.
Коряво, но получилось.Хотя УЖЕ интуитивно казалось, что нужен цикл.  
С помощью цикла очень долго билась (несколько дней)... Всё где-то рядом, но что-нибудь, 
да не работало. Когда все заработало (не понятно как...), + на - не менялся... 
Пролила еще некоторое количество крови и все-таки решила посмотреть видео,
которое ты скидывал...
Често говоря, до второго цикла for of я б не додумалась...(
Так что, получилось, что script у меня списан(
    Я все это к тому, что в наглую решение не списываю... 

*/


const items = document.querySelectorAll(".item");
console.log(items);

for(let item of items){ 
    item.addEventListener('click', function (e){
        console.log(e.target);
        if(this.classList.contains('show')){
            this.classList.remove('show');
        }else{
           for(el of items){
            el.classList.remove('show');
           }
           this.classList.toggle('show');
        }
    })
}



//const subtitle  = document.getElementsByClassName("subtitle");
//const title = document.querySelectorAll(".title");
  /* for(let a=0; a<title.length;a++){ 
    title[a].addEventListener('click', function (e){
        console.log(e.target);
        for(let i=0; i<subtitle.length; i++){
            subtitle[i].classList.toggle('show');
        }
    })
}
*/