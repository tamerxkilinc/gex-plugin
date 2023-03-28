document.addEventListener("DOMContentLoaded", function() {
    const iframe = document.getElementById("gex-plugin-iframe");

    if (!iframe) {
        console.warn(
            "GEX-Plugin Error: Could not find the iframe. Please make sure the iframe is set and has the correct ID."
        );
        return;
    }

    window.addEventListener("message", (e) => {
        if (!e.data) {
            console.warn("GEX-Plugin Error: Message is not defined.");
            return;
        }

        const messageType = e.data.type;

        if (!messageType) {
            console.warn("GEX-Plugin Error: Message type is not defined.");
            return;
        }

        switch (messageType) {
            case "resize":
                iframe.style.minHeight = `${e.data.data.height + 50}px`;
                break;
            case "location":
                window.scroll(0, iframe.offsetTop);
                break;
            case "settings":
                if (e.data.data.state === "initial") {
                    initialSettingsMessageResponseCallback(iframe);
                } else {
                    console.warn("GEX-Plugin Error: Unknown settings state.");
                }
        }
    });

    const initialSettingsMessageResponseCallback = (
        iframe
    ) => {
        if (!iframe.contentWindow) {
            console.warn(
                "GEX-Plugin Error: Could not find the iframe content window. Please make sure the iframe is set and has the correct ID."
            );
            return;
        }

        const background = iframe.getAttribute("data-background-color");
        if (background) {
            const message = {
                type: "background",
                data: {
                    background,
                },
            };
            iframe.contentWindow.postMessage(message, "*");
        }

        const vehiclesListUrl = iframe.getAttribute("data-vehicles-list-url");
        if (vehiclesListUrl) {
            const message = {
                type: "vehiclesListUrl",
                data: {
                    url: vehiclesListUrl,
                },
            };
            iframe.contentWindow.postMessage(message, "*");
        }
    };
});