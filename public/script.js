document.getElementById("Productos");

async function obtenerProductos() {
    const container = document.getElementById("productos");
    const pagination = document.getElementById("");
    
    try {
        const response = await fetch(`${offset}`);
        const data = await response.json();

        let htmlAcumulado = "";

        for (const p of data.results) {
            const detailRes = await fetch(p.url);
            const detail = await detailRes.json();


            htmlAcumulado += `
                <div class="productos-card">
                    <div class="product_name">${name}</div>
                    <p><strong>id:</strong> ${id_producto}</p>
                    <p><strong>precio:</strong> ${precio}</p>
                </div>
            `;
        }

        container.innerHTML += htmlAcumulado;
        offset += 30; 

    } catch (error) {
        console.error("Error al cargar:", error);
    }
    pagination.innerHTML = `<button id="btn-mas" onclick="obtenerProductos()">Mostrar más</button>`;
}

async function mostrarHome() {
    const container = document.getElementById("product-container");
    const titulo = document.getElementById("section-title");
    const pagination = document.getElementById("pagination-container");

    titulo.innerText = "Inserte producto";
    
    container.innerHTML = ""; 

    offset = 0; 

    pagination.innerHTML = `<button id="btn-mas" onclick="obtener30Pokemon()">Mostrar más</button>`;

    await obtenerProductos();
};