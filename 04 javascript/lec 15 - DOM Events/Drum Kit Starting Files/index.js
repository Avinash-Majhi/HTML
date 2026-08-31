function makeSound(key){
    switch (key) {
        case "w":
            const audio = new Audio("./sounds/tom-1.mp3");
                audio.play(); 
            break;
    
        case "a" :
            const audio = new Audio("./sounds/tom-2.mp3");
                audio.play();
            break;

        case "s" :
            const audio = new Audio("./sounds/tom-3.mp3");
                audio.play();
            break;

        case "d" :
            const audio = new Audio("./sounds/tom-4.mp3");
                audio.play();
            break;

        case "j" :
            const audio = new Audio("./sounds/snare.mp3");
                audio.play();
            break;

        case "k" :
            const audio = new Audio("./sounds/crash.mp3");
                audio.play();
            break;

        case "l" :
            const audio = new Audio("./sounds/kick-bass.mp3");
                audio.play();
            break;
        default:
            break;
    }
}

function buttonAnimation (currentKey){
    const activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100)
} 