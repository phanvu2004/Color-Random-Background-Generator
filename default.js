const setDefaultBackground = () => {
    let red = Math.floor(Math.random() * 250)
    let green = Math.floor(Math.random() * 250)
    let blue = Math.floor(Math.random() * 250)

    let cssValue = '--background-color'
    setCssVariable(changeBackground(red, green, blue),cssValue )
}

setDefaultBackground()
