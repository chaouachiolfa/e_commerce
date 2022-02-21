let total = document.getElementById('total');
console.log(total)




let addButton=document.getElementsByClassName('plus')
console.log(addButton)

for(let i =0;i<addButton.length;i++){
    addButton[i].addEventListener('click',function(){
        let prix =document.getElementsByClassName('prix')
        console.log(prix)
        let qtt=document.getElementsByClassName('qty')
        console.log(qtt)
        qtt[i].innerHTML++
        total.innerHTML = parseInt(total.innerHTML) + parseInt(prix[i].innerHTML)

    })
}


let minButton=document.getElementsByClassName('moin')
console.log(minButton)

for(let i =0;i<minButton.length;i++){
    minButton[i].addEventListener('click',function(){
        let prix =document.getElementsByClassName('prix')
        console.log(prix)
        let qtt=document.getElementsByClassName('qty')
        console.log(qtt)
        if(qtt[i].innerHTML>0)
        {
        qtt[i].innerHTML--
        total.innerHTML=parseInt(total.innerHTML) - parseInt(prix[i].innerHTML)
    }

     else {alert('le pannier est vide') }

    })
}




let hearts=document.querySelectorAll('.heart');
console.log(hearts);
for(let heart of hearts){
    heart.addEventListener('click',function(){
        if ((heart.getAttribute('fill'))==('grey'))
        
       {heart.setAttribute('fill','red')}
       else{
           heart.setAttribute('fill','grey')
       }
    });
}
