const tbody = document.querySelector("#captainsTable tbody");
const searchInput = document.getElementById("searchInput");
const resultsInfo = document.getElementById("resultsInfo");

let todosLosCapitanes = [];

categorias.forEach(cat => {
    cat.vidas.forEach((vida, index) => {
        todosLosCapitanes.push({
            categoria: cat.nombre,
            nivel: index + 1,
            vida: vida
        });
    });
});

function renderTable(lista) {
    tbody.innerHTML = "";

    lista.forEach(capitan => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${capitan.categoria}</td>
            <td>${capitan.nivel}</td>
            <td>${capitan.vida}</td>
        `;

        tbody.appendChild(row);
    });

    resultsInfo.textContent = `Resultados: ${lista.length}`;
}

function filtrar() {
    const texto = searchInput.value.toLowerCase().trim();

    const filtrados = todosLosCapitanes.filter(c =>
        c.categoria.toLowerCase().includes(texto) ||
        c.nivel.toString().includes(texto) ||
        c.vida.toString().includes(texto)
    );

    renderTable(filtrados);
}

searchInput.addEventListener("input", filtrar);

renderTable(todosLosCapitanes);
