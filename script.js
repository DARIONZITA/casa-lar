let works = document.getElementById("as");
let btns = document.querySelectorAll('.btnsd');
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
                    if(i > 136){clearInterval(timen)}
                    break
                case 1:
                    if(i > 95){clearInterval(timen)}
                    break
                case 2:
                    if(i > 83){clearInterval(timen)}
                    break
                case 3:
                    if(i > 105){clearInterval(timen)}
                    break
            }
            },30);

        })
      
    }
},{threshold : [0.50]});
obv.observe(works)  
let a = [2,3,4,5,6,7,8,9,10,11,12]
let b =['png','jpg']
function slidef(n){ 
    switch(n){
        case 2:
            slide.style.backgroundImage = `url('img/construções/c${a}.${b}')`;
            break
    }
}

