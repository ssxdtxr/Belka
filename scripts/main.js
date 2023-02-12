const btnPlus = document.getElementById("btn-plus");
const menuMobile = document.getElementById("menu-mobile");
const btnConnect = document.getElementById("btn-connect");
const btnContact = document.getElementById("btn-contact");
const btnBlog = document.getElementById("btn-blog");


console.log(btnPlus);

btnPlus.onclick = function() {
    menuMobile.classList.toggle("open");
}

btnConnect.onclick = function() {
    alert('Заявка оставлена');
}

btnContact.onclick = function() {
    let name = document.getElementById('contact-name').value;
    let tel = document.getElementById('contact-tel').value;
    let mail = document.getElementById('contact-email').value;
    alert('Имя: ' + name); 
    alert('Номер телефона: ' + tel);
    alert('E-mail: ' + mail);
}

btnBlog.onclick = function() {
    alert("Статей больше нет)");
}