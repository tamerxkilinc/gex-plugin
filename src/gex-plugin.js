document.addEventListener("DOMContentLoaded", function() {
    const iframe = document.getElementById("gex-plugin-iframe");

    if (!iframe) return;

    window.addEventListener("message", (event) => {
        const iframe = document.getElementById("gex-plugin-iframe");

        if (!iframe) {
            console.warn("GEX-Plugin Error: Could not find the iframe. Please make sure the iframe is set and has the correct ID.");
            return;
        }

        iframe.style.minHeight = `${event.data + 50}px`;
    });
});