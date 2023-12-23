$(function () {
    $("#map-container").mapael({
        map: {
            name: "world_countries",
            defaultArea: {
                attrs: {
                    fill: "#e4e4e4",
                    stroke: "#fafafa"
                },
                attrsHover: {
                    fill: "#2196F3"
                }
            }
        },
        areas: {
            // Define the actions for each country
            "FR": {
                attrs: {
                    fill: "#4CAF50"
                },
                attrsHover: {
                    fill: "#8BC34A"
                },
                tooltip: { content: "France" },
                href: "france.html" // Specify the URL to redirect to
            },
            // Add more countries as needed
        }
    });
});