//esculta em realtime o value do input
// var input = document.getElementById('aresta') as HTMLInputElement;
//     input.addEventListener('input', function() {
//     console.log('input', this.value);
//     });
var submit = document.querySelector('button');
var polygon = document.getElementById('select-polygon');
var input = document.getElementById('arestas'); //input od edge
//let regexNumbers = /^[0-9]+$/;
var amoutEdge = 0;
polygon.onclick = function () {
    var edge = polygon.options[polygon.selectedIndex].value; //get courrent value selected
    if (edge == 'outro') {
        submit === null || submit === void 0 ? void 0 : submit.classList.remove('d-none');
        input === null || input === void 0 ? void 0 : input.classList.remove('d-none');
        input === null || input === void 0 ? void 0 : input.classList.add('d-inline-block');
    }
    else {
        if (!(input === null || input === void 0 ? void 0 : input.classList.contains('d-none'))) {
            input === null || input === void 0 ? void 0 : input.classList.remove('d-inline-block');
            input === null || input === void 0 ? void 0 : input.classList.add('d-none');
            submit === null || submit === void 0 ? void 0 : submit.classList.add('d-none');
        }
    }
    amoutEdge = parseInt(edge);
    console.log(amoutEdge);
};
submit.onclick = function () {
    amoutEdge = parseInt(input === null || input === void 0 ? void 0 : input.value);
    console.log(amoutEdge);
};
