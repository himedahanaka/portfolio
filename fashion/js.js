'use strict';


// $('.big').on('click',function(event){

//     const newImg=$(event.currentTarget).data('image');
//     $('#big').attr('src',newImg);
// });



{const click=document.getElementsByClassName('coordinate');}

for (let i=0;i<click.length;i++{

    click[i].onclick = function(event){
        const newImg=event.currentTarget.dataset.image;
    
    document.getElementById('big').setAttribute('src',newImg)
;}

;}