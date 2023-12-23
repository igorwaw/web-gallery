$(function () {


    var getElemID = function(elem) {
        // Show element ID
        return $(elem.node).attr("data-id");
    };

    $("#map-container").mapael({
        map: {
            name: "world_countries",
            zoom: {
                        enabled: true,
                        init: {
                            latitude: 45,
                            longitude: 10,
                            level: 10
                        },
                    },
                    defaultArea: {
                        tooltip: {  content: getElemID  },
                    },
        },
        areas: {
            // Define the actions for each country
            "AT": {
                attrs: { fill: "#484802"  },
                href: "/austria"
            },
            "IE": {
                attrs: { fill: "#484802"  },
                href: "/ireland"
            },
            "PL": {
                attrs: { fill: "#484802"  },
                href: "/poland"
            },
            "LT": {
                attrs: { fill: "#484802"  },
                href: "/lithuania"
            },
            "BE": {
                attrs: { fill: "#484802"  },
                href: "/belgium"
            },
            "HR": {
                attrs: { fill: "#484802"  },
                href: "/croatia"
            },
            "CZ": {
                attrs: { fill: "#484802"  },
                href: "/czechia"
            },
            "DE": {
                attrs: { fill: "#484802"  },
                href: "/germany"
            },
            "IT": {
                attrs: { fill: "#484802"  },
                href: "/italy"
            },
            "GB": {
                attrs: { fill: "#484802"  },
                href: "/uk"
            },
            "ES": {
                attrs: { fill: "#484802"  },
                href: "/spain"
            },

        }
    });
});

