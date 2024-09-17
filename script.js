// image slider
const slides=document.querySelectorAll(".slide");
var counter=0;
slides.forEach(
  (slide,index) => {
    slide.style.left=`${index*100}%`
  }
)

const prev=() =>{
    counter--
    slideImage()
}

const next=() =>{
    counter++
    slideImage()
}

const slideImage=() =>{
    slides.forEach(
        (slide)=>{
            slide.style.transform=`translateX(-${counter*100}%)`
        }
    )
}

//=========== navbar menu
const bar=document.getElementById('bar');
const close=document.getElementById('close');
const nav=document.getElementById('navbar');

if(bar)
{
    bar.addEventListener('click',()=>{
       nav.classList.add('active');
    })
}

if(close)
    {
        close.addEventListener('click',()=>{
           nav.classList.remove('active');
        })
    }