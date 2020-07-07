var submit = document.querySelector('button');
// var input = document.getElementById('aresta') as HTMLInputElement;
//     input.addEventListener('input', function() {
//     console.log('input', this.value);
//     });
var polygon = document.getElementById('select-polygon');
var inputArestas = document.getElementById('input-arestas');
polygon.onclick = function () {
    var aresta = polygon.options[polygon.selectedIndex].value;
    var regexNumbers = /^[0-9]+$/;
    console.log(aresta);
    var input = document.getElementById('arestas');
    if (aresta == 'outro') {
        // let input = document.createElement('input');
        // input.setAttribute('class', 'form-control w-50 d-inline-block mt-2');
        // let button = document.createElement('button');
        // button.setAttribute('type', 'submit');
        // button.setAttribute('class', 'btn btn-outline-secondary btn-sm ml-2');
        // inputArestas?.append(input, button);
        input === null || input === void 0 ? void 0 : input.classList.remove('d-none');
    }
    else {
        if (!(input === null || input === void 0 ? void 0 : input.classList.contains('d-none'))) {
            input === null || input === void 0 ? void 0 : input.classList.add('d-none');
        }
    }
};
