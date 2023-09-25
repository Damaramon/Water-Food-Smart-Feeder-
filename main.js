var iduser = document.querySelector('.productid');
var wifibtn = document.querySelector('.btn');
var logoutbtn = document.querySelector('.btnlogout');
var feed = document.querySelector('.bowl');
var n = 100;
var text1 = document.querySelector('#p1');
var text2 = document.querySelector('#p2');
var text3 = document.querySelector('#p3');

iduser.addEventListener('keyup', () =>{
    if(iduser.value.trim() === 'WF0001'){
        wifibtn.classList.add('active')
    }else{
        wifibtn.classList.remove('active')
    }
})

wifibtn.addEventListener('click', () =>{
    var img = document.createElement('img');
    img.src = "images/Arrow.png";
    img.classList.add('arrow');
    var imgparent = document.getElementById('wifi');
    imgparent.appendChild(img);
})

logoutbtn.addEventListener('click', () =>{
    iduser.value = ''; 
})

feed.addEventListener('click', () =>{
    alert("Nyam! Nyam! Yout pet has been feed <3");
    let foodcapacity = document.querySelector('.percent');
    n -= 10;
    foodcapacity.textContent = n + '%';
    const t = new Date();
    let jam = t.getHours();
    let menit = t.getMinutes();
    let apm;
    if(jam >= 12){
        apm = "PM";
    }else{
        apm = "AM";
    }

    text3.textContent = text2.textContent;
    text2.textContent = text1.textContent;
    if(menit < 10){
        text1.textContent = jam + ':0' + menit + ' ' + apm + ' - 1/4 Cup'; 
    }else{
        text1.textContent = jam + ':' + menit + ' ' + apm + ' - 1/4 Cup'; 
    }
})