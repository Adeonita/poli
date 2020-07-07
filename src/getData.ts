//esculta em realtime o value do input
// var input = document.getElementById('aresta') as HTMLInputElement;
//     input.addEventListener('input', function() {
//     console.log('input', this.value);
//     });

let submit = document.querySelector('button') as HTMLInputElement; 
let polygon = document.getElementById('select-polygon') as HTMLSelectElement ;
let input = document.getElementById('arestas') as HTMLInputElement; //input od edge
//let regexNumbers = /^[0-9]+$/;
let amoutEdge = 0;

polygon.onclick = () => {
    let edge = polygon.options[polygon.selectedIndex].value; //get courrent value selected
    
    if(edge == 'outro'){
        submit?.classList.remove('d-none');
        input?.classList.remove('d-none');
        input?.classList.add('d-inline-block');
    } else {
        if( !input?.classList.contains('d-none') ) {
            input?.classList.remove('d-inline-block');
            input?.classList.add('d-none');
            submit?.classList.add('d-none');
        }
    }

    amoutEdge = parseInt(edge);
    console.log(amoutEdge)
}

submit.onclick = () => {
    amoutEdge = parseInt(input?.value);
    console.log(amoutEdge)
}

