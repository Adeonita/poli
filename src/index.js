var submit = document.querySelector('button');
if (submit) {
    submit.onclick = function () {
        var arestas = document.getElementById('aresta');
        var polygon = document.querySelector('input[name=inlineRadioOptions]:checked');
        var numbers = /^[0-9]+$/;
        console.log(polygon === null || polygon === void 0 ? void 0 : polygon.value);
        console.log(arestas === null || arestas === void 0 ? void 0 : arestas.value);
    };
}
