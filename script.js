var valorDefault = 16;
var dar=valorDefault;
var selectionDefault = 'colorMode'
var selectionMode=selectionDefault;


const grid = document.getElementById('grid');
const colorPicker = document.getElementById('colorPicker');
const size = document.getElementById('sizeSlider');
const output = document.getElementById('demo');
const colormode = document.getElementById('colorBtn');
const erazer = document.getElementById('eraserBtn');
const res = document.getElementById('sett');

var colour = colorPicker.value;
output.innerHTML = size.value;

size.oninput = function(){
    output.innerHTML=this.value;
    
}

function createGrid(val){
    dar= parseInt(val); 
    play(dar);     
}

function play(dar){
    grid.innerHTML = '';    
    grid.style.background='silver';
    grid.style.gridTemplateColumns = `repeat(${dar}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${dar}, 1fr)`       

    for(let i = 0; i < dar*dar; i++){
        const gridElement = document.createElement('div');
        gridElement.addEventListener('mousemove',alterColor);
        grid.appendChild(gridElement);
    }
}
function selectedMode(modeSelected){
    selectionMode=modeSelected;   
 }


function alterColor(mode){
    
    if(selectionMode === 'colorMode'){
        mode.target.style.backgroundColor=colorPicker.value;
    }else if(selectionMode === 'erazerMode'){
        mode.target.style.backgroundColor='silver';
    }else if(selectionMode === 'rainMode'){
        const randomR = Math.floor(Math.random() * 256);
        const randomG = Math.floor(Math.random() * 256)
        const randomB = Math.floor(Math.random() * 256)
        mode.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`
    }

}
function clearGrid() {
    grid.innerHTML = '';
    selectionMode=selectionDefault;
    play(dar);
  }
  window.onload = () => {//when I want to load something
    play(valorDefault); 
  }