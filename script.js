function toggleMode(){
    const html = document.documentElement
    const img = document.querySelector("#profile img")

    if(html.classList.contains('light-mode')){
        html.classList.remove('light-mode')
        img.setAttribute('src', '/assets/Avatar.png')
    }else{
        html.classList.add('light-mode')
        img.setAttribute('src', '/assets/Avatar-lightmode.png')
    }

    // existe uma versão mais simples de fazer isso - html.classList.toggle('light-mode')
}