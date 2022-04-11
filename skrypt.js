var iloscZn=8;
var iloscCyfr=0;
var iloscMaleL=0;
var ilocsWolnychZn=0;

function iloscZnakow(){
    iloscZn=document.getElementById("iloscZnakow").value;
    ustawWolne();
}

function wybCyfr(){
    iloscCyfr=document.getElementById("iloscCyfr").value;
    document.getElementById("wybCyfr").value=iloscCyfr;
    ustawWolne();
}
function wybMaleL(){
    iloscMaleL=document.getElementById("iloscMaleL").value;
    document.getElementById("wybMaleL").value=iloscMaleL;
    ustawWolne();
}
function wybDuzeL(){
    iloscDuzeL=document.getElementById("iloscDuzeL").value;
    document.getElementById("wybDuzeL").value=iloscDuzeL;
    ustawWolne();
}
function wybZnS(){
    iloscZnS=document.getElementById("iloscZnS").value;
    document.getElementById("wybZnS").value=iloscZnS;
    ustawWolne();
}
function ustawWolne(){
    ilocsWolnychZn=+iloscZn-iloscCyfr-iloscMaleL-iloscDuzeL-iloscZnS;
    document.getElementById("wynik").value=ilocsWolnychZn;
    document.getElementById("iloscCyfr").max=+iloscCyfr+ +ilocsWolnychZn;
    document.getElementById("iloscMaleL").max=+iloscMaleL+ +ilocsWolnychZn;
    document.getElementById("iloscDuzeL").max=+iloscDuzeL+ +ilocsWolnychZn;
    document.getElementById("iloscZnS").max=+iloscZnS+ +ilocsWolnychZn;

}