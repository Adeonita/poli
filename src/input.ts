//esculta em realtime o value do input
// var input = document.getElementById('aresta') as HTMLInputElement;
//     input.addEventListener('input', function() {
//      console.log('input', this.value);
//     });

let submit = document.querySelector('button') as HTMLInputElement; 
let select = document.getElementById('select-polygon') as HTMLSelectElement ;
let input = document.getElementById('arestas') as HTMLInputElement; //input od edge

let figure: {name: string, value: any}[] = [
    {name: 'Circle', value: 1},
    {name: 'Triangle', value: 3},
    {name: 'Squad', value: 44},
    {name: 'Rectangle', value: 42},
    {name: 'Others', value: 0},
];

for (const option of figure) {
    let op = document.createElement('option');
    op.setAttribute('value', option.value);
    op.innerText = option.name;
    select.appendChild(op);
}


let amoutEdge;

select.onclick = () => {

    let edge = select.options[select.selectedIndex].value; //get courrent value selected
    console.log(edge)   

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
    }if(edge == 'retangulo'){
        amoutEdge = 4;
    }  
    amoutEdge = edge //do input vem uma string
    //console.log(amoutEdge)
}

input.addEventListener('input', function() {
    let filter = /^[0-9]+$/;
    let edge = this.value;
    if(!filter.test(edge)){
       input.value = edge.substring(0,0);
    }if(edge.length > 2){
        input.value = edge.substring(2,0);
    }
    amoutEdge = parseInt(input.value);
})

submit.onclick = () => {
    amoutEdge = parseInt(input?.value);
    console.log(amoutEdge)
}

