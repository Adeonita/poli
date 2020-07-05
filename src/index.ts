let submit = document.querySelector('button');

if( submit ) {
    submit.onclick = function(){
        let arestas = document.getElementById('aresta') as HTMLInputElement;
        let polygon = document.querySelector('input[name=inlineRadioOptions]:checked') as HTMLInputElement;
        
        var numbers = /^[0-9]+$/;

        console.log(polygon?.value);
        console.log(arestas?.value);
    }
}
