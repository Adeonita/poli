//esculta em realtime o value do input
// var input = document.getElementById('aresta') as HTMLInputElement;
//     input.addEventListener('input', function() {
//      console.log('input', this.value);
//     });

let submit = document.querySelector('button') as HTMLInputElement; 
let select = document.getElementById('select-polygon') as HTMLSelectElement ;
let input = document.getElementById('arestas') as HTMLInputElement; //input od edge
let canvas = document.getElementById('canvas') as HTMLCanvasElement;

let figure: {name: string, value: any}[] = [
    {name: 'Circle', value: 1},
    {name: 'Triangle', value: 3},
    {name: 'Squad', value: 4},
    {name: 'Rectangle', value: 42},
    {name: 'Others', value: 0},
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
    let placeholderRegularMeasures = document.getElementById('placeholder-regular-measures'); //placeholder para input do tamanho das arestas
    let inputRegularMeasures = document.getElementById('input-regular-measures') as HTMLInputElement; //o proprio input
    let btnRegularMeasures = document.getElementById('btn-regular-measures');

    if(edge == '0'){
        submit?.classList.remove('d-none');
        input?.classList.remove('d-none');
        input?.classList.add('d-inline-block');
    } else {
        if( !input?.classList.contains('d-none') ) {
            input?.classList.remove('d-inline-block');
            input?.classList.add('d-none');
            submit?.classList.add('d-none');
        }
    }if(edge == '4'){
        inputRegularMeasures?.classList.remove('d-none');
        inputRegularMeasures?.classList.add('d-inline-block');
        btnRegularMeasures?.classList.remove('d-none');
        btnRegularMeasures.onclick = () => {
            console.log(inputRegularMeasures?.value)
        }
    }else{
        if( !inputRegularMeasures?.classList.contains('d-none') ){
            inputRegularMeasures?.classList.remove('d-inline-block');
            inputRegularMeasures?.classList.add('d-none');
            btnRegularMeasures?.classList.add('d-none');
        }
    }
    
    amoutEdge = edge //do input vem uma string
    console.log(amoutEdge)
}

input.addEventListener('input', function() { //valida campo para numero 
    let filter = /^[0-9]+$/;
    let edge = this.value;
    if(!filter.test(edge)){
       input.value = edge.substring(0,0);
    }if(edge.length > 2){
        input.value = edge.substring(2,0);
    }
    amoutEdge = parseInt(input.value);
})

submit.onclick = () => { //vindo do input
    amoutEdge = parseInt(input?.value);
    console.log(amoutEdge);
}

