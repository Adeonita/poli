//esculta em realtime o value do input
// var input = document.getElementById('aresta') as HTMLInputElement;
//     input.addEventListener('input', function() {
//      console.log('input', this.value);
//     });
var submit = document.querySelector('button');
var select = document.getElementById('select-polygon');
var input = document.getElementById('arestas'); //input od edge
var canvas = document.getElementById('canvas');
var figure = [
    { name: 'Circle', value: 1 },
    { name: 'Triangle', value: 3 },
    { name: 'Squad', value: 4 },
    { name: 'Rectangle', value: 42 },
    { name: 'Others', value: 0 },
];
for (var _i = 0, figure_1 = figure; _i < figure_1.length; _i++) {
    var option = figure_1[_i];
    var op = document.createElement('option');
    op.setAttribute('value', option.value);
    op.innerText = option.name;
    select.appendChild(op);
}
//canvas
if (canvas.getContext) {
    var context = canvas.getContext('2d');
    canvas.setAttribute('width', '150');
    canvas.setAttribute('height', '150');
    canvas.setAttribute('style', 'border: 1px solid black;');
    context.fillStyle = "rgb(200,0,0)";
    context.strokeRect(10, 10, 55, 50); //x,y,Largura,Altura
    // strokeRect(x, y, width, height)
    context.fillStyle = "rgba(0, 0, 200, 0.5)";
    context.fillRect(30, 30, 55, 50);
}
var amoutEdge;
select.onclick = function () {
    var edge = select.options[select.selectedIndex].value; //get courrent value selected
    var placeholderRegularMeasures = document.getElementById('placeholder-regular-measures'); //placeholder para input do tamanho das arestas
    var inputRegularMeasures = document.getElementById('input-regular-measures'); //o proprio input
    var btnRegularMeasures = document.getElementById('btn-regular-measures');
    if (edge == '0') {
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
    if (edge == '4') {
        inputRegularMeasures === null || inputRegularMeasures === void 0 ? void 0 : inputRegularMeasures.classList.remove('d-none');
        inputRegularMeasures === null || inputRegularMeasures === void 0 ? void 0 : inputRegularMeasures.classList.add('d-inline-block');
        btnRegularMeasures === null || btnRegularMeasures === void 0 ? void 0 : btnRegularMeasures.classList.remove('d-none');
        btnRegularMeasures.onclick = function () {
            console.log(inputRegularMeasures === null || inputRegularMeasures === void 0 ? void 0 : inputRegularMeasures.value);
        };
    }
    else {
        if (!(inputRegularMeasures === null || inputRegularMeasures === void 0 ? void 0 : inputRegularMeasures.classList.contains('d-none'))) {
            inputRegularMeasures === null || inputRegularMeasures === void 0 ? void 0 : inputRegularMeasures.classList.remove('d-inline-block');
            inputRegularMeasures === null || inputRegularMeasures === void 0 ? void 0 : inputRegularMeasures.classList.add('d-none');
            btnRegularMeasures === null || btnRegularMeasures === void 0 ? void 0 : btnRegularMeasures.classList.add('d-none');
        }
    }
    amoutEdge = edge; //do input vem uma string
    console.log(amoutEdge);
};
input.addEventListener('input', function () {
    var filter = /^[0-9]+$/;
    var edge = this.value;
    if (!filter.test(edge)) {
        input.value = edge.substring(0, 0);
    }
    if (edge.length > 2) {
        input.value = edge.substring(2, 0);
    }
    amoutEdge = parseInt(input.value);
});
submit.onclick = function () {
    amoutEdge = parseInt(input === null || input === void 0 ? void 0 : input.value);
    console.log(amoutEdge);
};
