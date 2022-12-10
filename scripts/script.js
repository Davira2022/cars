// document.getElementsByClassName( "main-title")[0].style.color = "red";

// document.getElementById("main-action").onclick = function () {
//     alert(1);
// }

document.getElementById("main-action").onclick = function () {
    document.getElementById("cars").scrollIntoView({behavior: "smooth"});
}

var buttons = document.getElementsByClassName("car-button");
for (var i=0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
        document.getElementById("price").scrollIntoView({behavior: "smooth"});
    }
}

document.getElementById("price-action").onclick = function () {
    if (document.getElementById("name").value === "") {
        alert("Заполните поле имя!");
    } else if (document.getElementById("phone").value === "") {
        alert("Заполните поле телефон!");
    } else if (document.getElementById("car").value === "") {
        alert("Заполните поле автомобиль!");
    } else {
        alert("Спасибо за заявку! Мы свяжемся с Вами в ближайшее время!")
    }
}

//на главном экране фон передвигается при скроллинге страницы (картинка с автомобилем смещается вправо при скроллинге вниз
document.addEventListener("DOMContentLoaded", function () {
    let layer = document.querySelector('.price-image');
    document.addEventListener('mousemove', (event) => {
        layer.style.transform = 'translate3d(' + ((event.clientX * 0.2) / 8) + 'px,' + ((event.clientY * 0.3) / 8) + 'px,0px)';
    });

//в последнем экране сайта автомобиль изменяет свою позицию при перемещении курсора мыши в разные стороны
    const elem = document.querySelector(".main");
    document.addEventListener('scroll', () => {
        elem.style.backgroundPositionX = '0' + (0.5 * window.pageYOffset) + 'px';
    })
});

