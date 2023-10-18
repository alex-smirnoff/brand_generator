const languageOptions = document.querySelector(".languageOptions");
const languageChoice = document.getElementsByClassName("languageChoice");
const languageChosenSVG = document.querySelector(".languageChosenSVG");
const languageSwitcherArrow = document.querySelector(".languageSwitcherArrow");
const languageSwitcherArrowPath = document.querySelector(".languageSwitcherArrowPath");
const pageLanguage = document.querySelector(".pageLanguage")
let dropdownState = false;

document.addEventListener("click", function(event) {
    if (event.target.matches(".languageSwitcherArrow") || event.target.matches(".languageSwitcherArrowPath")) {
        if (languageOptions.style.height === "fit-content") {
            dropdownClose()
        }
        else {
            dropdownOpen()
        }   
    }
    else if (event.target.matches(".pageLanguage")) {
        if (languageOptions.style.height === "fit-content") {
            dropdownClose()
        }
        else {
            dropdownOpen()
        }  
    }
    else {
        dropdownClose()
    }
})
function dropdownOpen() {
    languageOptions.style.height = "fit-content";
    languageOptions.style.padding = "max(.9vw, 12px) 0 max(.2vw, 5px) 0";
    languageOptions.style.boxShadow = "0 max(.6vw, 8px) max(1.2vw, 16px) 0 rgba(0, 0, 0, 0.1)";
    languageOptions.style.opacity = "1";
    for (let i = 0; i < languageChoice.length; i++) {
        languageChoice[i].style.fontSize = "max(1.2vw, 14px)";
        languageChoice[i].style.margin = "max(.5vw, 8px) 0 max(1vw, 14px) 0";
        languageChoice[i].style.opacity = "1";
    }
    languageChosenSVG.style.height = "1.7vw";
    languageChosenSVG.style.minHeight = "21px";
    languageChosenSVG.style.margin = "max(.42vw, 7px) 0 max(.4vw, 6px) 0";
    languageChosenSVG.style.opacity = "1";
    languageSwitcherArrow.style.transform = "rotate(180deg)";
}
function dropdownClose() {
    languageOptions.style.height = "0";
    languageOptions.style.padding = "0";
    languageOptions.style.boxShadow = "none";
    languageOptions.style.opacity = "0";
    for (let i = 0; i < languageChoice.length; i++) {
        languageChoice[i].style.fontSize = "0px";
        languageChoice[i].style.margin = "0px";
        languageChoice[i].style.opacity = "0";
    }
    languageChosenSVG.style.height = "0";
    languageChosenSVG.style.minHeight = "0";
    languageChosenSVG.style.margin = "0";
    languageChosenSVG.style.opacity = "0";
    languageSwitcherArrow.style.transform = "rotate(0deg)";

}