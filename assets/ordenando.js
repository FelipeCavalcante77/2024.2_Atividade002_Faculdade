let listaValores = []; // Array para armazenar os valores adicionados

// Função para adicionar um valor
function adicionar() {
    let valor = document.getElementById("valor").value;
    if (valor) {
        listaValores.push(parseInt(valor)); // Adiciona o valor ao array
        atualizarLista();
        document.getElementById("valor").value = ""; // Limpa o input
    }
}

// Função para atualizar a lista visual
function atualizarLista() {
    const ul = document.getElementById("valores");
    ul.innerHTML = ""; // Limpa a lista existente
    listaValores.forEach(function(valor) {
        let li = document.createElement("li");
        li.textContent = valor;
        ul.appendChild(li);
    });
}

// Função para ordenar os valores
function ordenar() {
    let tipoOrdenacao = document.getElementById("ordenar").value;
    switch (tipoOrdenacao) {
        case "1":
            bubbleSort(listaValores);
            break;
        case "2":
            selectionSort(listaValores);
            break;
        case "3":
            quickSort(listaValores, 0, listaValores.length - 1);
            break;
    }
    atualizarLista(); // Atualiza a lista ordenada visualmente
}

// Função para misturar (embaralhar) os valores
function misturar() {
    listaValores = embaralharArray(listaValores);
    atualizarLista(); // Atualiza a lista visualmente após embaralhar
}

// Algoritmo de Bubble Sort
function bubbleSort(arr) {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

// Algoritmo de Selection Sort
function selectionSort(arr) {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        let min = i;
        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        if (min !== i) {
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }
}

// Algoritmo de Quick Sort
function quickSort(arr, left, right) {
    if (left < right) {
        let pivotIndex = partition(arr, left, right);
        quickSort(arr, left, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, right);
    }
}

function partition(arr, left, right) {
    let pivot = arr[right];
    let i = left - 1;
    for (let j = left; j < right; j++) {
        if (arr[j] < pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    [arr[i + 1], arr[right]] = [arr[right], arr[i + 1]];
    return i + 1;
}

// Função para embaralhar o array (método Fisher-Yates)
function embaralharArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}