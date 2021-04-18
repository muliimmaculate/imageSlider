var images = [
    "https://i.guim.co.uk/img/media/64735373b593af70e9b38b65eb04c908427720e1/0_143_3500_2100/master/3500.jpg?width=465&quality=45&auto=format&fit=max&dpr=2&s=7be3918a0a4ab58db12f7b34cbfc059e",

    "https://cdn.motor1.com/images/mgl/Yp07j/s1/tesla-pricing-lead.jpg",
    "https://images.hgmsites.net/hug/tesla-model-x_100777013_h.jpg"
];

var i = 0;
var time = 5000;
var rightBtn = document.getElementById('right');
var leftBtn = document.getElementById('left');


function setImage(){
    document.slide.src = images[i];
}

function slideImage(){
    if(i<images.length-1){
        i++;
    } else{
        i=0;
    }
    setImage()
    setTimeout('slideImage()', time)
}

window.onload = slideImage;

rightBtn.addEventListener('click', function(){
    if(i< images.length-1){
        i++;
    } else{
        i=0;
    }
    console.log(i)
    setImage();
})

leftBtn.addEventListener('click', function(){
    if(i>0){
        i--;
    } else{
        i=images.length-1
    }
    setImage();
})