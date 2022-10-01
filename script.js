
let works = document.getElementById("works");
let number= document.querySelectorAll('.num');
let obv = new IntersectionObserver( entres =>{
    if(entres[0].isIntersecting===true){
        number.forEach((v,k,a) => {
            setInterval(()=>{
            
            },3000)
        })
       
    }
},{threshold : [0.50]});
obv.observe(works)

