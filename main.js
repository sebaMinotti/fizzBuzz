
for(let i = 1; i <= 100; i++){
   
    if(i % 15 ==0){
        
        document.querySelector('#gioco').innerHTML+=`<li style="color:green">${i} Fizz-Buzz</li>`
    } else if(i % 5 ==0){
        
        document.querySelector('#gioco').innerHTML+=`<li style="color:orange">${i} Buzz</li>`
    } else if(i % 3 == 0){
         
         document.querySelector('#gioco').innerHTML+=`<li style="color:yellow">${i} Fizz </li>`
    } else{
         
         document.querySelector('#gioco').innerHTML+=`<li style="color:dodgerblue"> ${i}</li>`
    }
}