let görev = [];

function görevEkle(){

    let görevId = document.getElementById("görevId");
    let görevGiriş = görevId.value;

    görevId.value = "";

    let görevListesi = document.getElementById("görevListesi")
    let tekGörev = document.createElement("li")

    

    let görevler = {

        girilenGörev: görevGiriş,
        tarih: new Date().toLocaleString()

    };

    görev.push(görevler);

    if(görevGiriş !== null && görevGiriş !== ""){
    tekGörev.innerHTML = `
    
    <span>${görevGiriş}</span>
    <span>${görevler.tarih}</span>
    <button onclick="görevDüzenle(${görev.length - 1})">Düzenle</button>
    <button onclick="görevSil(${görev.length - 1})">Sil</button>
    <h1>Görev Eklendi Görevi Düzenleyebilir ya da Silebilirsiniz.</h1>
    
    `;
    görevListesi.appendChild(tekGörev);}
    else{
        tekGörev.innerHTML =`
        <h1>Lütfen Geçerli Bir Görev Giriniz!!!</h1>
        `
        görevListesi.appendChild(tekGörev)
    }
    

    görevKaydet()
}



function görevDüzenle(index){
    let göreviDüzenle = prompt("Görevi Düzenleyiniz: ", görev[index].girilenGörev);

    if(göreviDüzenle !== null && göreviDüzenle !== ""){
        görev[index].girilenGörev = göreviDüzenle;
        görev[index].tarih = new Date().toLocaleString();

        let görevListesi = document.getElementById("görevListesi")
        let tekGörev = görevListesi.getElementsByTagName("li")[index];
        tekGörev.innerHTML = `
        
        <span>${göreviDüzenle}</span>
        <span>${görev[index].tarih}</span>
        <button onclick="görevDüzenle(${görev.length - 1})">Düzenle</button>
        <button onclick="görevSil(${görev.length - 1})">Sil</button>
        <h1>Görev Düzenlendi Görevi Tekrar Düzenleyebilir ya da Silebilirsiniz.</h1>
        
        `

        görevKaydet()
    }

}


function görevSil(index){
    görev.splice(index, 1);
    let görevListesi = document.getElementById("görevListesi")
    görevListesi.removeChild(görevListesi.getElementsByTagName("li")[index]);

    görevKaydet()
}


function görevlerinDatasi() {
    let kaydedilenGörev = localStorage.getItem("görev");
    if (kaydedilenGörev) {
        görev = JSON.parse(kaydedilenGörev);

        let görevListesi = document.getElementById("görevListesi")
        görevListesi.innerHTML = "";

        for(let i = 0; i< görev.length; i++){
            let tekGörev = document.createElement("li")
            if(görev[i].girilenGörev !== null && görev[i].girilenGörev !== "")
            tekGörev.innerHTML = `
            <span>${görev[i].girilenGörev}</span>
            <span>${görev[i].tarih}</span>
            <button onclick="görevDüzenle(${i})">Düzenle</button>
            <button onclick="görevSil(${i})">Sil</button>
            <h1>Görev Eklendi Görevi Düzenleyebilir ya da Silebilirsiniz.</h1>
            `
            görevListesi.appendChild(tekGörev);
        }

        console.log(kaydedilenGörev)
    }
}

function görevKaydet() {
    localStorage.setItem("görev", JSON.stringify(görev));
}

window.onload = function() {
    görevlerinDatasi()
}