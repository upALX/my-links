function toogleModel(){
    const html = document.documentElement
    html.classList.toggle('light-mode')

    const imgHtml = document.querySelector(".profile img")

    if (html.classList.contains('light-mode')){
        imgHtml.setAttribute('src', './assets/alx-relax.jpeg')
    }else{
        imgHtml.setAttribute('src', "https://avatars.githubusercontent.com/u/59508016?v=4")
    }

}