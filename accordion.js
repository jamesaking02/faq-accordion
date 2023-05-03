
const acc = document.getElementsByClassName('acc__button')
let i

for (i = 0; i < acc.length; i++) {//looping through the classList of acc__button
  acc[i].addEventListener('click', function(){
    let content = this.nextElementSibling
    if (content.style.maxHeight) {
      content.style.maxHeight = null
    } else {
      let active = document.querySelectorAll('.active', 'acc__button--active')
      for (let j = 0; j < active.length; j++) {
        active[j].classList.remove('active', 'acc__button--active')
        active[j].nextElementSibling.style.maxHeight = null
      }
      this.classList.toggle('active')
      content.style.maxHeight = content.scrollHeight + "px"
    }
    if (this.classList.contains('acc__button--active')){
      this.classList.remove('acc__button--active')
      this.classList.add('acc__button--inactive')
    } else {
      this.classList.remove('acc__button--inactive')
      this.classList.toggle('acc__button--active')

    }
  })
}

