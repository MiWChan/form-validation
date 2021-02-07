let favorites = JSON.parse(localStorage.getItem('favorites')) || []

//pegar imagem externa 
async function getExternalImage() {
    const response = await fetch('https://source.unsplash.com/random')

    document.querySelector('.image')
    .innerHTML = `<img src ="${response.url}" />`
}
getExternalImage()

//clica no botao, pega imagem externa
document.querySelector('button').onclick = function() {
    getExternalImage()
}

//clica na imagem
document.querySelector('.image').onclick = function() {
    const imageContainer = document.querySelector('.image')
    const imageSource = document.querySelector('.image img').src

    //se esta na localStorage, remover
    const index = favorites.indexOf(imageSource)
    const existsInLocalStorage = index != -1
    if(existsInLocalStorage) {
        favorites.splice(index, 1)
        imageContainer.classList.remove('fav')
    } else { //salvar no local storage
        favorites.push(imageSource)
        imageContainer.classList.add('fav')
    }

    localStorage.setItem('favorites', JSON.stringify(favorites))
}