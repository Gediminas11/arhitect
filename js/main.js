"user strict"






let burger = document.querySelector('.burger');
let navigation = document.querySelector('.nav')


burger.addEventListener('click', () => {

    if (navigation.className == 'nav on') {

       navigation.classList.remove('on')
        // console.log(true)
    } else {
        navigation.classList.add('on')
        
   }

});

