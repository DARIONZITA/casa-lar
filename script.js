let works = document.getElementById("as");
let btns = document.querySelectorAll('.btnsd');
let deta = document.getElementById('deta')
let summ = document.getElementById('summ')
let slide = document.getElementById('slide')
let num= document.querySelectorAll('.num');
let obv = new IntersectionObserver( entres =>{
    if(entres[0].isIntersecting===true){
        num.forEach((v,k,a) => {
            let i = 0
            const timen = setInterval(()=>{
            v.innerHTML=`+ ${i++}`
            switch(k){
                case 0:
                    if(i > 96){clearInterval(timen)}
                    break
                case 1:
                    if(i > 95){clearInterval(timen)}
                    break
                case 2:
                    if(i > 83){clearInterval(timen)}
                    break
                case 3:
                    if(i > 75){clearInterval(timen)}
                    break
            }
            },30);

        })
      
    }
},{threshold : [0.50]});
obv.observe(works)  
let i = -1
let a = [2,3,4,5,6,7,8,9,10,11,12]
let b =['png','jpg']
let inf = [{nome:"Ponte Icobra",
  des:'Ponte feita em Luanda/Angola'},
 {nome:"Casa Suspensa" ,
 des:'casa de madeira feita em wakanda'},
 {nome:"Prédio Nova-vida" ,
 des:'Prédio de 20 andares feita no São Dário'},
 {nome:"home-what" ,
 des:'casa de Elon Mosk feita em New york'},
 {nome:"chin-chan" ,
 des:'Prédio de 20 andares na China/Pungo'},
 {nome:"Chungai" ,
 des:'Casa principal do Rei Black Panter'},
 {nome:"Escola N'zita" ,
 des:'Melhor escola de América'},
 {nome:"Ponte-cry" ,
 des:'feita em Dáriolandia'},
 {nome:"Escola-Estou" ,
 des:'feita no Alto das cruzes'},
 {nome:"Luz do Naruto" ,
 des:'Campo de basquete dos otakos'},
 {nome:"Casa Nz" ,
 des:'Uma casa inteligente feita em Marte'}]
function slidef(n){ 
    switch(n){
        case 2:
            if (i > 9){i=-1}
            i++
            slide.style.backgroundImage = `url('img/construções/c${a[i]}.${i == 0 ?b[0]:b[1]}')`;
            break
        case 0:
            if (i < 1){i=11}
            i--
            slide.style.backgroundImage = `url('img/construções/c${a[i]}.${i < 2 ?b[0]:b[1]}')`;
            
            break
    }
  summ.innerHTML=inf[i].nome
  deta.innerHTML=inf[i].des
}

function fmenu(n){
  let menu=document.getElementById('nav');
  let hsimbol=document.getElementById('menu');
  if(n==0){
  menu.style.display='grid' 
  hsimbol.style.display='none';}
  else{
    menu.style.display = 'none'
    hsimbol.style.display = 'inline-block'
    
  }
 
  
}

