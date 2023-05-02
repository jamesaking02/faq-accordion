
const accordion = document.getElementsByClassName('acc__button')
const acc__p = document.getElementsByClassName('acc__paragraph')
const downArrow = document.getElementsByClassName('acc__img')

accordion[0].addEventListener('click', function(){
  accordion[0].classList.toggle('acc__button--bold')
  downArrow[0].classList.toggle('acc__img--flip')
  acc__p[0].classList.toggle('active')
})

accordion[1].addEventListener('click', function(){
  accordion[1].classList.toggle('acc__button--bold')
  downArrow[1].classList.toggle('acc__img--flip')
  acc__p[1].classList.toggle('active')
})

accordion[2].addEventListener('click', function(){
  accordion[2].classList.toggle('acc__button--bold')
  downArrow[2].classList.toggle('acc__img--flip')
  acc__p[2].classList.toggle('active')
})

accordion[3].addEventListener('click', function(){
  accordion[3].classList.toggle('acc__button--bold')
  downArrow[3].classList.toggle('acc__img--flip')
  acc__p[3].classList.toggle('active')
})

accordion[4].addEventListener('click', function(){
  accordion[4].classList.toggle('acc__button--bold')
  downArrow[4].classList.toggle('acc__img--flip')
  acc__p[4].classList.toggle('active')
})

