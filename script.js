function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 11,
        center: { lat: 41.8781, lng: -87.6298 },
    });

    const marker1 = new google.maps.Marker({
        position: { lat: 41.8826, lng: -87.6226 },
        map,
        title: "Millennium Park",
    });

    const info = new google.maps.InfoWindow({
        content: "<h3>Millennium Park</h3><p>Home of The Bean and downtown concerts.</p>",
    });

    marker1.addListener("click", () => {
        info.open(map, marker1);
    });

    const marker2 = new google.maps.Marker({
        position: { lat: 41.8917, lng: -87.6078 },
        map,
        title: "Navy Pier",
    });

    const info2 = new google.maps.InfoWindow({
        content: "<h3>Navy Pier</h3><p>A popular tourist spot on Lake Michigan.</p>",
    });

    marker2.addListener("click", () => {
        info2.open(map, marker2);
    });

    const chicagoRiver = new google.maps.Marker({
        position: { lat: 41.8880, lng: -87.6278 },
        map,
        title: "Chicago River",
    });

    const chicagoRiverInfo = new google.maps.InfoWindow({
        content: "<h3>Chicago River</h3><p>Famous for its green dye on St. Patrick’s Day.</p>",
    });

    chicagoRiver.addListener("click", () => {
        chicagoRiverInfo.open(map, chicagoRiver);
    });

    const fieldMuseum = new google.maps.Marker({
        position: { lat: 41.8663, lng: -87.6176 },
        map,
        title: "Field Museum",
    });

    const fieldMuseumInfo = new google.maps.InfoWindow({
        content: "<h3>Field Museum</h3><p>See the T. Rex and world-class exhibits.</p>",
    });

    fieldMuseum.addListener("click", () => {
        fieldMuseumInfo.open(map, fieldMuseum);
    });
}

window.initMap = initMap;
