const id1Block = document.getElementById("button");

const convertStrToNum = (str) => {
    let newStr = str;
    newStr = newStr.replace("ms","")

    let newNum = +newStr;

    return newNum; 
};

const buttonAnimationBound = (boundAnimation, timeDuration) => {
    if (id1Block.className != boundAnimation) {
        id1Block.className += boundAnimation; 
        if (id1Block.className == boundAnimation) {
            setTimeout(() => { 
                id1Block.className = id1Block.className.replace(boundAnimation, "");
            }, timeDuration);
        }
    };
}

const changeBackground = (red, green, blue) => {
    return `rgb(${red}, ${green}, ${blue})`
}

let boundAnimation = "bound-animation";
let smoothChangeBackground = "backgroundChange"
let backgroundChange = document.getElementById("backgroundChange");

const smoothChange = (smoothChangeBackground, timeDuration) => {
    backgroundChange.className += smoothChangeBackground;
    setTimeout(() => {
        backgroundChange.className = "";
    }, timeDuration)
}

const setCssVariable = (value, cssVariable) => {
    let setVariable = document.querySelector(':root')
    setVariable.style.setProperty(cssVariable, value )
}

const changeBackgroundFunc = (timeDuration) => {
    let red = Math.floor(Math.random() * 250)
    let green = Math.floor(Math.random() * 250)
    let blue = Math.floor(Math.random() * 250)

    let backgroundColor = changeBackground(red, green, blue);


    if (backgroundChange.className.length != smoothChangeBackground.length){
        let cssVariable = '--background-change'
        setCssVariable(backgroundColor, cssVariable)
        smoothChange(smoothChangeBackground, timeDuration);
        setTimeout(() => {
            document.getElementById('backgroundChange').style.backgroundColor = backgroundColor;
        }, timeDuration)
    }
}

const getCssVariable = document.querySelector(':root')
let buttonTiming = getComputedStyle(getCssVariable).getPropertyValue('--button-animation-duration');
let backgroundTiming = getComputedStyle(getCssVariable).getPropertyValue('--background-change-duration');
id1Block.addEventListener("click", () => {
    changeBackgroundFunc(convertStrToNum( backgroundTiming ))
    buttonAnimationBound(boundAnimation, convertStrToNum(buttonTiming))
    // id1Block.innerHTML = elemAnimation(buttonTiming)
})
const setDefaultBackground = () => {
    let red = Math.floor(Math.random() * 250)
    let green = Math.floor(Math.random() * 250)
    let blue = Math.floor(Math.random() * 250)

    let cssValue = '--background-color'
    setCssVariable(changeBackground(red, green, blue),cssValue )
}
setDefaultBackground()
