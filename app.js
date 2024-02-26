const code = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']

function generateHexCode(){
    let colorCode = ''
    for(let i = 1 ; i <= 6 ; i++){
        let randomIndex = Math.floor(Math.random()*code.length)
        colorCode += code[randomIndex]
    }
    return colorCode
}

function generateRGBCode(){
    const red = Math.floor(Math.random()*256)
    const green = Math.floor(Math.random()*256)
    const blue = Math.floor(Math.random()*256)
    return `rgb(${red},${green},${blue})`
}

const btn = document.querySelector('.btn')
const hexCode = document.querySelector('.hexCode')
const rgbBtn = document.querySelector('.rgbBtn')

let bodyElement = document.body

btn.addEventListener('click',() => {
    const getHexCode = generateHexCode()
    hexCode.innerHTML = getHexCode
    bodyElement.style.backgroundColor = '#'+ getHexCode
    btn.style.color = '#'+getHexCode
})

rgbBtn.addEventListener('click',() =>{
    const getRGBCode = generateRGBCode()
    hexCode.innerHTML = getRGBCode
    bodyElement.style.backgroundColor = getRGBCode
    rgbBtn.style.color = getRGBCode
})


