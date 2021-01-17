const { body } = document

try {
    body.style.background = lumiance("#6633cctT", 0.2)
} catch (error) {
    console.log("HOUVE UM ERRO: ", error.message)
}
function lumiance(hex, luminosity = 0) {

    //hexadecimal e um valor que vai do 0 ate f
    //contem 16 digitos
    //0 = black e f = white
    
    //logica para converter o hex em uma cor mais clara
    //ou mais escura

    //eu aceito hexadecimal com 3 ou 6 digitos
    hex = hex.replace(/[^0-9a-f]/gi, '')
    const isValidHex = hex.lenght === 6 || hex.lenght === 3
    if(!isValidHex) throw new Error("Invalid HEX")

    //se for 3 digitos, transformar para 6 digitos
    if(hex.length === 3) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2]
    }

    //aplicar uma formula para aumentar ou diminuir a luminosidade do RGB
    //diminuir a luminosidade de um hex

    //preciso transformar o hex em rgb
    // 0 = black e 255 = white

    const twoDigitGroup = hex.match(/([0-9a-f]){2}/gi)

    let newHex = "#"
    for (let twoDigit of twoDigitGroup ) {
        const numberFromHex = parseInt(twoDigit, 16)
        const calculateLuminosity = numberFromHex + ( luminosity * 255)
        
        const blackOrLuminosity = Math.max(0, calculateLuminosity)
        const partialColor = Math.min(255, blackOrLuminosity)
       
        const newColor = Math.round(partialColor)
        const numberToHex = newColor.toString(16)
        const finalHex = `0${numberToHex}`.slice(-2)
        
        newHex = newHex + finalHex
    }
    return hex
}