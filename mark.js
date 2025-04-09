ids = 0;
market_phone = [
    "imges/p1.png", 
    "imges/p2.png", 
    "imges/cha.jpg",
    "imges/bl.jpg",
    "imges/ha.jpg"

]
heading_phone = [
    "sumsong a10",
    "huwawi hot 3",
    "شاحن بطارية",
    "سماعة بلتوث",
    "مكبر شاشة"
]
price_phone = [
    "1000",
    "500",
    "100",
    "250",
    "300"
]
dirction_phone = [
    " sssssssssssssss sssssssssssssss  ssssssssss  ssssssssssssssss التلsssssssssssssss  ssssssssss  ssssssssssssssss التلsssssssssssssss  ssssssssss  ssssssssssssssss التلsssssssssssssss  ssssssssss  ssssssssssssssss التلsssssssssssssss  ssssssssss  ssssssssssssssss التلsssssssssssssss  ssssssssss  ssssssssssssssss التلsssssssssssssss  ssssssssss  ssssssssssssssss التلsssssssssssssss  ssssssssss  ssssssssssssssss التلsssssssssssssss  ssssssssss  ssssssssssssssss التلsssssssssssssss  ssssssssss  ssssssssssssssss التلsssssssssssssss  ssssssssss  ssssssssssssssss التلsssssssssssssss  ssssssssss  ssssssssssssssss التلsssssssssssssss  ssssssssss  ssssssssssssssss التلsssssssssssssss  ssssssssss  ssssssssssssssss التلsssssssssssssss  ssssssssss  ssssssssssssssss التلsssssssssssssss  ssssssssss  ssssssssssssssss التلsssssssssssssss  ssssssssss  ssssssssssssssss التلsssssssssssssss  ssssssssss  ssssssssssssssss التلsssssssssssssss  ssssssssss  ssssssssssssssss التلsssssssssssssss  ssssssssss  ssssssssssssssss التلsssssssssssssss  ssssssssss  ssssssssssssssss التلsssssssssssssss  ssssssssss  ssssssssssssssss التلsssssssssssssss  ssssssssss  ssssssssssssssss التلsssssssssssssss  ssssssssss  ssssssssssssssss التلsssssssssssssss  ssssssssss  ssssssssssssssss التلsssssssssssssss  ssssssssss  ssssssssssssssss التلsssssssssssssss  ssssssssss  ssssssssssssssss التل ssssssssss  ssssssssssssssss التليفون داا سامسونج مفيش زيوا اتنين السعر نار و الحرق نار وكل حاجة نار",
    "التليفون داا مساجتواا 8 بس فوريرا عايز شاشة",
    " شحن بطاريات زمان في سواني ب سعر خيالي",
    "سماعة بلتوث m28 فل الفل",
    "حامل مفيش منو اتنين الصراحة بيكبر مثل التابلت"
]

/////////////////////////////////////////////////////////////////////////////////////////////////////////

for (i = 0; i <= market_phone.length-1; i++)  {
document.getElementById("div_phons").innerHTML += 
`
<div id = "div_img_phons${ids}" class = "div_img_phons"  onclick = "inorder(${ids});">
<img id = "img_phons${ids}" class = "img_phons" src = "${market_phone[i]}">
<div id = "heading_phons${ids}" class = "heading_phons"><h2><span id = "titlehea${ids}" class = "titlehea">النوع: </span> ${heading_phone[i]}</h2></div>
<div id = "price_phons${ids}" class = "price_phons"><h2><span id = "titlepri${ids}" class = "titlepri">السعر: </span> ${price_phone[i]} جنيه</h2></div>
<div id = "dirction_phons${ids}" class = "dirction_phons"><span id = "titledic${ids++}" class = "titledic">الوصف: </span> ${dirction_phone[i]}</div>
</div>
`

}

function inorder(ids){
hide = document.querySelectorAll('.div_img_phons');
hide.forEach(element => {
    element.style.display = 'none';
});
//block
document.getElementById(`div_img_phons${ids}`).style.display = 'block'
document.getElementById(`div_img_phons${ids}`).onclick = ''
//style onclick
document.getElementById(`div_img_phons${ids}`).id = 'div_img_phons'
document.getElementById(`img_phons${ids}`).id = 'img_phons'
document.getElementById(`heading_phons${ids}`).id = 'heading_phons'
document.getElementById(`price_phons${ids}`).id = 'price_phons'
document.getElementById(`dirction_phons${ids}`).id = 'dirction_phons'

document.getElementById(`titlehea${ids}`).id = 'titleheao'
document.getElementById(`titlepri${ids}`).id = 'titleprio'
document.getElementById(`titledic${ids}`).id = 'titledico'

document.body.id = 'bodyon'
}


