const nav_list = document.getElementById('nav_list')
const menu = document.getElementById('menu')

menu.addEventListener('click',()=>{
   if(nav_list.classList.contains('hide')){
    nav_list.classList.remove('hide')
   }
   else{
    nav_list.classList.add('hide')

   }
})
