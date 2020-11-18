//Pegar container do texto
const postWrap = document.querySelector(".post-wrap")
//Criar barrinha 
let bar = document.createElement("div")

//Estilo da barrinha
bar.style.height = "4px"
bar.style.width = "0"
bar.style.backgroundColor = "#6633cc"
bar.style.position = "fixed"
bar.style.top = "0"
bar.style.left = "0"
bar.style.zIndex = "9999"

//Adiciona no corpo da pag
document.body.append(bar)

//Atualiza barrinha
function updateBar() {
  //o tamanho da caixa que contem o texto
  const textHeight = postWrap.offsetHeight
  // verificar em que posicao da pag estou
  const pagePositionY = window.pageYOffset
  
  //regra de 3
  const updatedBar = pagePositionY * 100 / textHeight
  
  bar.style.width = updatedBar + "%"
}

window.addEventListener("load", () => {
  //Verifica o movimento do scroll
  document.addEventListener("scroll", updateBar)

})
