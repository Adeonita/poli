//esculta em realtime o value do input
// var input = document.getElementById('aresta') as HTMLInputElement;
//     input.addEventListener('input', function() {
//      console.log('input', this.value);
//     });

let inputNumberEdges = document.getElementById('input-number-of-edges') as HTMLInputElement; //input od edge
let btnNumberEdges = document.getElementById('btn-number-of-edges') as HTMLInputElement;  //submit
let select = document.getElementById('select-polygon') as HTMLSelectElement ;
let canvas = document.getElementById('canvas') as HTMLCanvasElement;

let figure: {name: string, value: any}[] = [
    {name: 'Circle', value: 1},
    {name: 'Triangle', value: 3},
    {name: 'Squad', value: 4},
    {name: 'Rectangle', value: 42},
    {name: 'Others figures', value: 0},
];

for (const option of figure) {
    let op = document.createElement('option');
    op.setAttribute('value', option.value);
    op.innerText = option.name;
    select.appendChild(op);
}
//canvas
if(canvas.getContext){
    let context = canvas.getContext('2d');
    canvas.setAttribute('width','150');
    canvas.setAttribute('height', '150');
    canvas.setAttribute('style', 'border: 1px solid black;');

    context.fillStyle = "rgb(200,0,0)";
    context.strokeRect (10, 10, 55, 50); //x,y,Largura,Altura
   
    // strokeRect(x, y, width, height)

    context.fillStyle = "rgba(0, 0, 200, 0.5)";
    context.fillRect (30, 30, 55, 50);
}

let amoutEdge;

select.onclick = () => { //vindo do select

    let edge = select.options[select.selectedIndex].value; //get courrent value selected
    let singleInputDiv = document.getElementById('single-input-div');
    let descriptionCircle = document.getElementById('description-circle');
    let descriptionOthers = document.getElementById('description-others');
    let singleInput = document.getElementById('single-input') as HTMLInputElement; //para poligonos regulares
    let btnSingleInput = document.getElementById('btn-single-input');  
    let doubleInputDiv = document.getElementById('double-input-div'); 
    let doubleInputBase = document.getElementById('double-input-base') as HTMLInputElement; //para retângulos
    let doubleInputHeight = document.getElementById('double-input-height') as HTMLInputElement; //para retângulos
    let btnDoubleInput = document.getElementById('btn-double-input');
    let inputRegularMeasures = document.getElementById('input-regular-measures') as HTMLInputElement; //o proprio input
    let btnRegularMeasures = document.getElementById('btn-regular-measures');
    let labelBase = document.getElementById('label-base');
    let labelHeight = document.getElementById('label-height');
    let descriptionDoubleInput =  document.getElementById('description-double-input');
    
    if(edge == '42'){ //Se for retangulo
        if(singleInputDiv?.classList.contains('d-block')){
            singleInputDiv?.classList.remove('d-block');
            singleInputDiv?.classList.add('d-none');
        }
        doubleInputDiv?.classList.add('d-block');
        btnDoubleInput.onclick = () => { 
            let dib = doubleInputBase.value;
            let dih  = doubleInputHeight.value;
            console.log(`Base: ${dib} Altura: ${dih}`);
        }
    }else{ //Se for qualquer outra figura
        if(doubleInputDiv?.classList.contains('d-block')){
            doubleInputDiv.classList.remove('d-block');
            doubleInputDiv.classList.add('d-none');
        }
        if(edge != '0'){ 
            if(edge == '1'){
                descriptionCircle?.classList.remove('d-none');
                descriptionOthers?.classList.add('d-none');
            }else{
                descriptionCircle?.classList.add('d-none');
                descriptionOthers?.classList.remove('d-none');
            }
            singleInputDiv?.classList.add('d-block');
        }
    }
    // if(edge == '0'){
    //     btnNumberEdges?.classList.remove('d-none');
    //     inputNumberEdges?.classList.remove('d-none');
    //     inputNumberEdges?.classList.add('d-inline-block');
    // } else {
    //     if( !inputNumberEdges?.classList.contains('d-none') ) {
    //         inputNumberEdges?.classList.remove('d-inline-block');
    //         inputNumberEdges?.classList.add('d-none');
    //         btnNumberEdges?.classList.add('d-none');
    //     }
    // }if(edge == '42'){
    //     // inputRegularMeasures?.classList.remove('d-none');
    //     // inputRegularMeasures?.classList.add('d-inline-block');
    //     // btnRegularMeasures?.classList.remove('d-none');
    //     // btnRegularMeasures.onclick = () => {
    //     //     console.log(inputRegularMeasures?.value)
    //     // }
    //     inputRegularMeasures?.classList.remove('d-inline-block');
    //     inputRegularMeasures?.classList.add('d-none');
    //     btnRegularMeasures?.classList.add('d-none');

    //     doubleInputBase.classList.remove('d-none');
    //     doubleInputBase.classList.add('d-inline');
    //     doubleInputHeight.classList.remove('d-none');
    //     doubleInputHeight.classList.add('d-inline');
    //     //remove o anterior

    // }else{
    //     inputRegularMeasures?.classList.remove('d-none');
    //     inputRegularMeasures?.classList.add('d-inline-block');
    //     btnRegularMeasures?.classList.remove('d-none');
    //     btnRegularMeasures.onclick = () => {
    //         console.log(inputRegularMeasures?.value)
    //     }
    //     doubleInputBase.classList.add('d-none');

    //     // if( !inputRegularMeasures?.classList.contains('d-none') ){
    //     //     inputRegularMeasures?.classList.remove('d-inline-block');
    //     //     inputRegularMeasures?.classList.add('d-none');
    //     //     btnRegularMeasures?.classList.add('d-none');
    //     // }
    // }
    
    amoutEdge = edge //do input vem uma string
    console.log(amoutEdge)
}

inputNumberEdges.addEventListener('input', function() { //valida campo para numero 
    let filter = /^[0-9]+$/;
    let edge = this.value;
    if(!filter.test(edge)){
        inputNumberEdges.value = edge.substring(0,0);
    }if(edge.length > 2){
        inputNumberEdges.value = edge.substring(2,0);
    }
    amoutEdge = parseInt(inputNumberEdges.value);
})

btnNumberEdges.onclick = () => { //vindo do input
    amoutEdge = parseInt(inputNumberEdges?.value);
    console.log(amoutEdge);
}

