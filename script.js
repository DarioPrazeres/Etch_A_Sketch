
const grid = document.getElementById('grid');
const size = document.getElementById('sizeSlider');
var output = document.getElementById('demo');
var out = document.getElementById('set');

output.innerHTML = size.value;

size.oninput = function(){
    output.innerHTML=this.value;
}
var dar=0;
function valor(val){
     dar= parseInt(val);
    //out.innerHTML= `${dar}`;
}

function play(){
    if(dar>=16){
        grid.style.background='silver';
        grid.style.gridTemplateColumns = `repeat(${dar}, 1fr)`
        grid.style.gridTemplateRows = `repeat(${dar}, 1fr)`

    for(let i = 0; i < dar*dar; i++){
        const gridElement = document.createElement('div');
        grid.appendChild(gridElement);
    }
    }
}
function clearGrid() {
    grid.innerHTML = ''
    dar = 16;
  }