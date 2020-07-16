//esculta em realtime o value do input
// var input = document.getElementById('aresta') as HTMLInputElement;
//     input.addEventListener('input', function() {
//      console.log('input', this.value);
//     });
var inputNumberEdges = document.getElementById('input-number-of-edges'); //input od edge
var btnNumberEdges = document.getElementById('btn-number-of-edges'); //submit
var select = document.getElementById('select-polygon');
var canvas = document.getElementById('canvas');
var figure = [
    { name: 'Circle', value: 1 },
    { name: 'Triangle', value: 3 },
    { name: 'Squad', value: 4 },
    { name: 'Rectangle', value: 42 },
    { name: 'Others figures', value: 0 },
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
    var divNumberOfEdge = document.getElementById('div-number-of-edges');
    var singleInputDiv = document.getElementById('single-input-div');
    var descriptionCircle = document.getElementById('description-circle');
    var descriptionOthers = document.getElementById('description-others');
    var singleInput = document.getElementById('single-input'); //para poligonos regulares
    var btnSingleInput = document.getElementById('btn-single-input');
    var doubleInputDiv = document.getElementById('double-input-div');
    var doubleInputBase = document.getElementById('double-input-base'); //para retângulos
    var doubleInputHeight = document.getElementById('double-input-height'); //para retângulos
    var btnDoubleInput = document.getElementById('btn-double-input');
    var inputRegularMeasures = document.getElementById('input-regular-measures'); //o proprio input
    var btnRegularMeasures = document.getElementById('btn-regular-measures');
    var labelBase = document.getElementById('label-base');
    var labelHeight = document.getElementById('label-height');
    var descriptionDoubleInput = document.getElementById('description-double-input');
    if (edge == '42') { //Se for retangulo
        divNumberOfEdge === null || divNumberOfEdge === void 0 ? void 0 : divNumberOfEdge.classList.remove('d-block');
        divNumberOfEdge === null || divNumberOfEdge === void 0 ? void 0 : divNumberOfEdge.classList.add('d-none');
        if (singleInputDiv === null || singleInputDiv === void 0 ? void 0 : singleInputDiv.classList.contains('d-block')) {
            singleInputDiv === null || singleInputDiv === void 0 ? void 0 : singleInputDiv.classList.remove('d-block');
            singleInputDiv === null || singleInputDiv === void 0 ? void 0 : singleInputDiv.classList.add('d-none');
        }
        doubleInputDiv === null || doubleInputDiv === void 0 ? void 0 : doubleInputDiv.classList.add('d-block');
        btnDoubleInput.onclick = function () {
            var dib = doubleInputBase.value;
            var dih = doubleInputHeight.value;
            console.log("Base: " + dib + " Altura: " + dih);
        };
    }
    else { //Se for qualquer outra figura
        if (doubleInputDiv === null || doubleInputDiv === void 0 ? void 0 : doubleInputDiv.classList.contains('d-block')) {
            doubleInputDiv.classList.remove('d-block');
            doubleInputDiv.classList.add('d-none');
        }
        if (edge != '0') {
            divNumberOfEdge === null || divNumberOfEdge === void 0 ? void 0 : divNumberOfEdge.classList.remove('d-block');
            divNumberOfEdge === null || divNumberOfEdge === void 0 ? void 0 : divNumberOfEdge.classList.add('d-none');
            if (edge == '1') {
                descriptionCircle === null || descriptionCircle === void 0 ? void 0 : descriptionCircle.classList.remove('d-none');
                descriptionOthers === null || descriptionOthers === void 0 ? void 0 : descriptionOthers.classList.add('d-none');
            }
            else {
                descriptionCircle === null || descriptionCircle === void 0 ? void 0 : descriptionCircle.classList.add('d-none');
                descriptionOthers === null || descriptionOthers === void 0 ? void 0 : descriptionOthers.classList.remove('d-none');
            }
            singleInputDiv === null || singleInputDiv === void 0 ? void 0 : singleInputDiv.classList.add('d-block');
        }
        else { //inserir quantidade de arestas
            divNumberOfEdge === null || divNumberOfEdge === void 0 ? void 0 : divNumberOfEdge.classList.remove('d-none');
            singleInputDiv === null || singleInputDiv === void 0 ? void 0 : singleInputDiv.classList.remove('d-block');
            singleInputDiv === null || singleInputDiv === void 0 ? void 0 : singleInputDiv.classList.add('d-none');
            doubleInputDiv === null || doubleInputDiv === void 0 ? void 0 : doubleInputDiv.classList.add('d-none');
            btnNumberEdges.onclick = function () {
                if (inputNumberEdges.value > '1') {
                    descriptionOthers === null || descriptionOthers === void 0 ? void 0 : descriptionOthers.classList.remove('d-none');
                    console.log(inputNumberEdges.value);
                }
                else if (inputNumberEdges.value == '1') {
                    descriptionCircle === null || descriptionCircle === void 0 ? void 0 : descriptionCircle.classList.remove('d-none');
                    console.log(inputNumberEdges.value);
                }
                if (inputNumberEdges.value < '1') {
                    console.log('invalido');
                }
                singleInputDiv.classList.remove('d-none');
            };
        }
        btnSingleInput.onclick = function () {
            console.log("Lado: " + singleInput.value);
        };
    }
    amoutEdge = edge; //do input vem uma string
    console.log(amoutEdge);
};
inputNumberEdges.addEventListener('input', function () {
    var filter = /^[0-9]+$/;
    var edge = this.value;
    if (!filter.test(edge)) {
        inputNumberEdges.value = edge.substring(0, 0);
    }
    if (edge.length > 2) {
        inputNumberEdges.value = edge.substring(2, 0);
    }
    amoutEdge = parseInt(inputNumberEdges.value);
});
btnNumberEdges.onclick = function () {
    amoutEdge = parseInt(inputNumberEdges === null || inputNumberEdges === void 0 ? void 0 : inputNumberEdges.value);
    console.log(amoutEdge);
};
