//esculta em realtime o value do input
// var input = document.getElementById('aresta') as HTMLInputElement;
//     input.addEventListener('input', function() {
//      console.log('input', this.value);
//     });
var submit = document.querySelector('button');
var select = document.getElementById('select-polygon');
var input = document.getElementById('arestas'); //input od edge
var figure = [
    { name: 'Circle', value: 1 },
    { name: 'Triangle', value: 3 },
    { name: 'Squad', value: 44 },
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
var amoutEdge;
select.onclick = function () {
    var edge = select.options[select.selectedIndex].value; //get courrent value selected
    console.log(edge);
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
    if (edge == 'retangulo') {
        amoutEdge = 4;
    }
    amoutEdge = edge; //do input vem uma string
    //console.log(amoutEdge)
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
