import { ContextMenuItemClickEvent, Map } from "leaflet";
import "leaflet-contextmenu";

const map: Map = new Map("map", {
    center: [37.1259, -4.75107],
    zoom: 3,
    minZoom: 8,
    contextmenu: true,
    contextmenuItems: [
        {
            text: "Center map here",
            callback: (event) => map.panTo(event.latlng),
        },
        {
            text: "Zoom in",
            // icon: 'img/zoom-in.png',
            callback: (event) => map.zoomIn(),
        },
        {
            text: "Zoom out",
            // icon: 'img/zoom-out.png',
            callback: (event) => map.zoomOut(),
        },
    ],
});
