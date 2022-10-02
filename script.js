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
let i = -1
let a = [2,3,4,5,6,7,8,9,10,11,12]
let b =['png','jpg']
function slidef(n){ 
    switch(n){
        case 2:
            if (i > 9){i=-1}
            i++
            slide.style.backgroundImage = `url('img/construções/c${a[i]}.${i < 2 ?b[0]:b[1]}')`;
            break
        case 0:
            if (i < 1){i=11}
            i--
            slide.style.backgroundImage = `url('img/construções/c${a[i]}.${i < 2 ?b[0]:b[1]}')`;
            
            break
    }

    deta.style.backGroundColor='white';
    
}
