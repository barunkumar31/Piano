const pianoKeys = document.querySelectorAll(".piano-keys .key");
 volumeSlider = document.querySelector(".volume-slider input");
 keysCheckbox= document.querySelector(".keys-checkbox input");

let allKeys = [],
audio = new Audio("tunes/a.wav");//by default,audio src is 'A' tune

const playTune=(key) => {
    audio.src=`tunes/${key}.wav`//passing audio src based on key pressed
    audio.play();//playing audio

   

    const clickedKey = document.querySelector(`[data-key="${key}"]`);//getting clicked key element
    clickedKey.classList.add("active");

    setTimeout(()=>{//removing active class after 150 ms from the clicked key element
        clickedKey.classList.remove("active");
    },150);
}
pianoKeys.forEach(key=>{
    allKeys.push(key.dataset.key)//adding data-key value to the allkeys array
    //calling playtone function with passing data-key value as an argument
    key.addEventListener("click",() => playTune(key.dataset.key))
  
});

const handleVolume = (e) =>{
    audio.volume= e.target.value;// passing the range slider value ass an audio volume
}

const showHideKeys= () =>{
    //toggling hide class from each key on the checkbox click
    pianoKeys.forEach(key => key.classList.toggle("hide"));
}

const pressedKey = (e) =>{
    //if the pressed key is in the allkeys array,only call the playTune function
  if(allKeys.includes(e.key)) playTune(e.key);
}

keysCheckbox.addEventListener("click",showHideKeys );
volumeSlider.addEventListener("input",handleVolume );
document.addEventListener("keydown", pressedKey);