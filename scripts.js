const main = document.getElementsByClassName("main")[0];
const content = document.getElementsByClassName("content");
const style = window.getComputedStyle(main);

if(style.flexDirection === "row"){
    for (let i = 0; i < content.length; i++) {
        content[i].style.alignItems = 'flex-start';
    }
}
else if(style.flexDirection === "row-reverse"){
    for (let i = 0; i < content.length; i++) {
        content[i].style.alignItems = 'center';
    }
}