"use strict";

let slide = 1;
let h_text = "";
let text = "";
let src = "";
let time = 500;
let purchases = 0;

let prod1 = 0;
let prod2 = 0;
let prod3 = 0;
let prod4 = 0;
let prod5 = 0;
let prod6 = 0;

let itog = 0;
// слайдер
arr2.addEventListener("click", function(){
    if(slide < 5){
        slide += 1;
    }
    // console.log(slide);
    image.style = "opacity: 0;";
    h31.style = "opacity: 0;";
    p1.style = "opacity: 0;";
    if(slide == 2){
        h_text = "LEGO® Star Wars™";
        text = "LEGO® Star Wars™ пробудит в тебе повстанца. Собери собственную галактику, любимые сцены из фильма или телесериалов или нарушь все правила и придумай свои!";
        src = "img/series/series2.jpg";
    }
    else if(slide == 3){
        h_text = "LEGO® NINJAGO®";
        text = "Под руководством старого мастера Кружитцу Ву наши смелые юные ниндзя всегда готовы вступить в схватку со злом, спасти мир LEGO® NINJAGO® от любых врагов и восстановить гармонию.";
        src = "img/series/series3.jpg";
    }
    else if(slide == 4){
        h_text = "LEGO® City";
        text = "Добро пожаловать в город LEGO® City! Население: множество удивительных минифигурок. Чувствуй себя как дома, играй в бесплатные игры, смотри фильмы, загружай игры и весело проводи время.";
        src = "img/series/series4.jpg";
    }
    else if(slide == 5){
        h_text = "LEGO® Technic";
        text = "Приготовься конструировать по-настоящему. Добро пожаловать в LEGO® Technic! Сложные реалистичные модели большого и маленького размера, наполненные шестеренками, пневматическими устройствами и моторами для начинающих и экспертов!";
        src = "img/series/series5.jpg";
    }
    setTimeout(() => { h31.style = "opacity: 1;"; p1.style = "opacity: 1;"; image.style = "opacity: 1;"; image.src = src; p1.innerHTML = text; h31.innerHTML = h_text;}, time);
})
arr1.addEventListener("click", function(){
    // console.log(slide);
    if(slide > 1){
        slide -= 1;
    }
    
    image.style = "opacity: 0;";
    h31.style = "opacity: 0;";
    p1.style = "opacity: 0;";
    if(slide == 1){
        h_text = "THE LEGO MOVIE";
        text = "Познакомься с наборами из серии THE LEGO® MOVIE 2™, посмотри, как Эммет разворачивает свой новый дом мечты/спасательную ракету, когда Мими Катавасия прибывает на звездолёте.";
        src = "img/series/series1.jpg";
    }
    else if(slide == 2){
        h_text = "LEGO® Technic";
        text = "Приготовься конструировать по-настоящему. Добро пожаловать в LEGO® Technic! Сложные реалистичные модели большого и маленького размера, наполненные шестеренками, пневматическими устройствами и моторами для начинающих и экспертов!";
        src = "img/series/series2.jpg";
    }
    else if(slide == 3){
        h_text = "LEGO® NINJAGO®";
        text = "Под руководством старого мастера Кружитцу Ву наши смелые юные ниндзя всегда готовы вступить в схватку со злом, спасти мир LEGO® NINJAGO® от любых врагов и восстановить гармонию.";
        src = "img/series/series3.jpg";
    }
    else if(slide == 4){
        h_text = "LEGO® City";
        text = "Добро пожаловать в город LEGO® City! Население: множество удивительных минифигурок. Чувствуй себя как дома, играй в бесплатные игры, смотри фильмы, загружай игры и весело проводи время.";
        src = "img/series/series4.jpg";
    }
    setTimeout(() => { h31.style = "opacity: 1;"; p1.style = "opacity: 1;"; image.style = "opacity: 1;"; image.src = src; p1.innerHTML = text; h31.innerHTML = h_text;}, time);
})

// конец слайдера



con4.addEventListener("click", function(e){
  if(e.target.classList.contains("buy")){
    if(e.target.classList.contains("buy1")){
      prod1 += 1;
      itog += 5500;
      val1.innerHTML = prod1;
    }
    if(e.target.classList.contains("buy2")){
      prod2 += 1;
      itog += 5700;
      val2.innerHTML = prod2;
    }
    if(e.target.classList.contains("buy3")){
      prod3 += 1;
      itog += 1700;
      val3.innerHTML = prod3;
    }
    if(e.target.classList.contains("buy4")){
      prod4 += 1;
      itog += 3500;
      val4.innerHTML = prod4;
    }
    if(e.target.classList.contains("buy5")){
      prod5 += 1;
      itog += 4500;
      val5.innerHTML = prod5;
    }
    if(e.target.classList.contains("buy6")){
      prod6 += 1;
      itog += 7500;
      val6.innerHTML = prod6;
    }
    purchases += 1;
    purchase.innerHTML = purchases;
    val0.innerHTML = itog;
  }
});
clearx.addEventListener("click", function(){
  purchases = 0;

prod1 = 0;
prod2 = 0;
prod3 = 0;
prod4 = 0;
prod5 = 0;
prod6 = 0;
itog = 0;

val1.innerHTML = prod1;
val2.innerHTML = prod2;
val3.innerHTML = prod3;
val4.innerHTML = prod4;
val5.innerHTML = prod5;
val6.innerHTML = prod6;
val0.innerHTML = itog;
purchase.innerHTML = purchases;
})
let flag = 0;
// обработка событий при скролле
window.addEventListener("scroll", function(){
// console.log(Math.ceil(window.pageYOffset / (document.body.scrollHeight - window.innerHeight) * 100));
    // прелоадер при добавлении товаров
    if(Math.ceil(window.pageYOffset / (document.body.scrollHeight - window.innerHeight) * 100) >= 100 && flag != 1){
      flag = 1;
      let NewPreloader = document.createElement("div");
      NewPreloader.innerHTML = `<img src = "img/lego.png" class = "load">`;
      NewPreloader.className = "a";
      con4.appendChild(NewPreloader);  

      // добавление новых 6 товаров
      setTimeout(() => { 
        NewPreloader.remove();
        let Newdiv = document.createElement("div");
        Newdiv.className = "goods-wrapper";
        Newdiv.innerHTML = `
        
        <div class="product visible">
        <img src="img/goods/1.png" class="open-popup open-popup1">
        <h4>Пожарная машина</h4>
        <button class = "buy buy1"><img src="img/cart16.png" class = "buy buy1"></button>
    
      </div>
      <!--КОНЕЦ Товар №1-->
      <!--НАЧАЛО Товар №2-->
      <div class="product visible">
        <img src="img/goods/2.jpg" class="open-popup open-popup2">
        <h4>Гоночная машина</h4>
        <button class = "buy buy2"><img src="img/cart16.png" class = "buy buy2"></button>
      </div>
      <!--КОНЕЦ Товар №2-->
      <!--НАЧАЛО Товар №3-->
      <div class="product visible">
        <img src="img/goods/3.jpg" class="open-popup open-popup3">
        <h4>Попугай</h4>
        <button class = "buy buy3"><img src="img/cart16.png" class = "buy buy3"></button>
      </div>
      <!--КОНЕЦ Товар №3-->
      
      <!--НАЧАЛО Товар №4-->
      <div class="product visible">
        <img src="img/goods/4.jpg" class="open-popup open-popup4">
        <h4>Аэропорт</h4>
        <button class = "buy buy4"><img src="img/cart16.png" class = "buy buy4"></button>
      </div>
      <!--КОНЕЦ Товар №4-->
      <!--НАЧАЛО Товар №5-->
      <div class="product visible">
        <img src="img/goods/5.jpg" class="open-popup open-popup5">
        <h4>Вертолет</h4>
        <button class = "buy buy5"><img src="img/cart16.png" class = "buy buy5"></button>
      </div>
      <!--КОНЕЦ Товар №5-->
      <!--НАЧАЛО Товар №6-->
      <div class="product visible">
        <img src="img/goods/6.jpg" class="open-popup open-popup6">
        <h4>Дом (красный)</h4>
        <button class = "buy buy6"><img src="img/cart16.png" class = "buy buy6"></button>
      </div>
          `;
      
        con4.appendChild(Newdiv);  
        arr3 = document.body.querySelectorAll("div");
        // bought = document.getElementsByClassName("buy");
        flag = 0;
      }, 3000);
      
    }
// console.log(w);
    // полоска прокручивания
    let w = window.pageYOffset / (document.body.scrollHeight - window.innerHeight) * 100;
long_pal.style = "width: " + w + "%;";
if(w >= 100){
  long_pal.style = "display: none;";
  long_pal2.style = "display: block;";
}
else{
  long_pal2.style = "display: none;";
}
if(window.pageYOffset >= document.body.clientHeight / 3){
    document.body.querySelector("footer").style.opacity = 1;
  }
else{
    document.body.querySelector("footer").style.opacity = 0;
}
})

// прокручивание до верха
document.body.querySelector("footer").addEventListener("click", function(){
    window.scrollTo(0, 0);
})
// elem.innerHTML = elem.getBoundingClientRect().top + "px";
let arr3 = document.body.querySelectorAll("div");
    window.addEventListener("scroll", function(){
      for(let elem of arr3){
        if (elem.getBoundingClientRect().top <= 600 && elem.getBoundingClientRect().top >= 0 && elem.classList.contains("product")){
          elem.classList.remove("visible");
        }
      }
    })



// активные разделы
  let arr = document.body.querySelectorAll("section");

  window.addEventListener("scroll", function(){
    for(let elem of arr){
      if (parseInt(elem.getBoundingClientRect().top) <= 200 && parseInt(elem.getBoundingClientRect().top) >= 0){
        
        if(elem.classList.contains("t1")){
            
          li1.classList.add("activev");
          li2.classList.remove("activev");
          li3.classList.remove("activev");
          li4.classList.remove("activev");
        }
        if(elem.classList.contains("t2")){
          li2.classList.add("activev");
          li1.classList.remove("activev");
          li3.classList.remove("activev");
          li4.classList.remove("activev");
        }
        if(elem.classList.contains("t3")){
          li3.classList.add("activev");
          li2.classList.remove("activev");
          li1.classList.remove("activev");
          li4.classList.remove("activev");
        }
        if(elem.classList.contains("t4")){
          li4.classList.add("activev");
          li2.classList.remove("activev");
          li3.classList.remove("activev");
          li1.classList.remove("activev");
        }
      }
    }
})

// плавный скролл
li1.addEventListener('click', () => window.scrollTo({
    top: con1.getBoundingClientRect().top + window.pageYOffset - 100,
    behavior: 'smooth',
}));
li2.addEventListener('click', () => window.scrollTo({
    top: con2.getBoundingClientRect().top + window.pageYOffset - 100,
    behavior: 'smooth',
}));
li3.addEventListener('click', () => window.scrollTo({
    top: con3.getBoundingClientRect().top + window.pageYOffset - 100,
    behavior: 'smooth',
}));
li4.addEventListener('click', () => window.scrollTo({
    top: con4.getBoundingClientRect().top + window.pageYOffset - 100,
    behavior: 'smooth',
}));


// obr.innerHTML = "Уважаемый " + lastname_field.value + " " + firstname_field.value[0] + ".";
    // num.innerHTML = phone_field.value;
form.addEventListener("click", function(){  
  if((lastname_field.value != "" && lastname_field.value != " ") && (firstname_field.value != "" && firstname_field.value != " ") && (phone_field.value != "" && phone_field.value != " ")){
    mess.classList.remove("visible");
    text_mess.innerHTML = "<strong id = \"obr\">Уважаемый " + lastname_field.value + " " + firstname_field.value[0] +".</strong><br> Наши специалисты уже получили Вашу заявку и свяжутся с Вами в ближайшее время по телефону <strong id = \"num\"><nobr>" + phone_field.value + "</nobr></strong><br>Спасибо за обращение!";
  }
  else{
    text_mess.innerHTML = "Заполните, пожалуйста, все поля";
    mess.classList.remove("visible");
  }
});

// document.querySelector(".buy").addEventListener("click", function(){
  
// });




// прелоадер
function IntervalPreloader(){ 
  p += 1;
  
  if(p == 1){
      preloader.style = "transform: scale(1);";
  }
  if(p == 2){
      preloader.style = "transform: scale(0.5);";
  }
  if(p == 3){
      preloader.style = "transform: scale(1);";
  }
  if(p == 4){
    preloader.style = "transform: scale(1.5);";
  }

  if(p == 5){
    preloader.style = "transform: scale(1);";
  }
  if(p == 6){
      preloader.style = "transform: scale(0.5);";
  }
  if(p == 7){
      preloader.style = "transform: scale(1);";
  }
  if(p == 8){
    preloader.style = "transform: scale(1.5);";
  }

  if(p == 9){
    preloader.style = "transform: scale(1); opacity: 0%;";
    // clearInterval(intId);
  }
  if(p == 10){
    preloader.style = "display: none;";
    main.style = "display: block;";
    clearInterval(intId);
  }

}
// display: none;
let p = 0;
let intId = setInterval(IntervalPreloader, 500, p);
// setTimeout(() => {  }, 3000);


let pop = false;
body.addEventListener("click", function(e){
  if(e.target.classList.contains("open-popup1")){
      document.querySelector('.popup__bg1').classList.add('active');
      document.querySelector('.popup1').classList.add('active');
  }
  if(e.target.classList.contains("popup__bg1")){
    document.querySelector('.popup__bg1').classList.remove('active');
    document.querySelector('.popup1').classList.remove('active');
  }

  if(e.target.classList.contains("open-popup2")){
    document.querySelector('.popup__bg2').classList.add('active');
    document.querySelector('.popup2').classList.add('active');
}
if(e.target.classList.contains("popup__bg2")){
  document.querySelector('.popup__bg2').classList.remove('active');
  document.querySelector('.popup2').classList.remove('active');
}

if(e.target.classList.contains("open-popup3")){
  document.querySelector('.popup__bg3').classList.add('active');
  document.querySelector('.popup3').classList.add('active');
}
if(e.target.classList.contains("popup__bg3")){
document.querySelector('.popup__bg3').classList.remove('active');
document.querySelector('.popup3').classList.remove('active');
}

if(e.target.classList.contains("open-popup4")){
  document.querySelector('.popup__bg4').classList.add('active');
  document.querySelector('.popup4').classList.add('active');
}
if(e.target.classList.contains("popup__bg4")){
document.querySelector('.popup__bg4').classList.remove('active');
document.querySelector('.popup4').classList.remove('active');
}

if(e.target.classList.contains("open-popup5")){
  document.querySelector('.popup__bg5').classList.add('active');
  document.querySelector('.popup5').classList.add('active');
}
if(e.target.classList.contains("popup__bg5")){
document.querySelector('.popup__bg5').classList.remove('active');
document.querySelector('.popup5').classList.remove('active');
}

if(e.target.classList.contains("open-popup6")){
  document.querySelector('.popup__bg6').classList.add('active');
  document.querySelector('.popup6').classList.add('active');
}
if(e.target.classList.contains("popup__bg6")){
document.querySelector('.popup__bg6').classList.remove('active');
document.querySelector('.popup6').classList.remove('active');
}
})
let popupBg0 = document.querySelector('.popup__bg0'); // Фон попап окна
let popup0 = document.querySelector('.popup0'); // Само окно
let openPopupButtons0 = document.querySelectorAll('.open-popup0'); // Кнопки для показа окна
let closePopupButton0 = document.querySelector('.close-popup0'); // Кнопка для скрытия окна
openPopupButtons0.forEach((button) => { // Перебираем все кнопки
    button.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
        e.preventDefault(); // Предотвращаем дефолтное поведение браузера
        popupBg0.classList.add('active'); // Добавляем класс 'active' для фона
        popup0.classList.add('active'); // И для самого окна
    })
});
closePopupButton0.addEventListener('click',() => { // Вешаем обработчик на крестик
    popupBg0.classList.remove('active'); // Убираем активный класс с фона
    popup0.classList.remove('active'); // И с окна
});
document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
    if(e.target === popupBg0) { // Если цель клика - фот, то:
        popupBg0.classList.remove('active'); // Убираем активный класс с фона
        popup0.classList.remove('active'); // И с окна
    }
});
