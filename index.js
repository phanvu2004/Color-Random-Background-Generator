const id1Block = document.getElementById("id1");
const timeDuration = 1000;

const elemAnimation = (str) => {
    let newStr = str;
    newStr = newStr.replace("s","")

    let newNum = +newStr;
    newNum *= timeDuration;

    return newNum + 10;
};
let boundAnimation = "bound_animation";
const buttonAnimationBound = (boundAnimation) => {
    if (id1Block.className.length != boundAnimation.length) {
        id1Block.className += boundAnimation; 
        setTimeout(() => { 
            id1Block.className = "";
        }, timeDuration);
    };
    // const elem = document.querySelector('.bound_animation')
    // else if (id1Block.className === boundAnimation) {    
        // }
}
const changeBackground = (red, green, blue) => {
    return `rgb(${red}, ${green}, ${blue})`
}
let smoothChangeBackground = "backgroundChange"
let backgroundChange = document.getElementById("backgroundChange");
const smoothChange = (smoothChangeBackground) => {
    backgroundChange.className += smoothChangeBackground;
    setTimeout(() => {
        backgroundChange.className = "";
    }, timeDuration)
}
const setCssVariable = (value, cssVariable) => {
    let setVariable = document.querySelector(':root')
    setVariable.style.setProperty(cssVariable, value )
}

id1Block.onclick = () => {
    let red = Math.floor(Math.random() * 250)
    let green = Math.floor(Math.random() * 250)
    let blue = Math.floor(Math.random() * 250)

    let backgroundColor = changeBackground(red, green, blue);

    if (backgroundChange.className.length != smoothChangeBackground.length){
        let cssVariable = '--background-change'
        setCssVariable(backgroundColor, cssVariable)
        smoothChange(smoothChangeBackground);
        setTimeout(() => {
            document.getElementById('backgroundChange').style.backgroundColor = backgroundColor;
        }, timeDuration)
    }
}

const setDefaultBackground = () => {
    let red = Math.floor(Math.random() * 250)
    let green = Math.floor(Math.random() * 250)
    let blue = Math.floor(Math.random() * 250)

    let cssValue = '--background-color'
    setCssVariable(changeBackground(red, green, blue),cssValue )
}
setDefaultBackground()
