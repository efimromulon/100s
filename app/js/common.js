ymaps.ready(init);

var placemarks = [
    {
        latitude: 55.64666482,
        longitude: 37.65757014,
        hintContent: '<div class="map__hint">Каширская</div>'
    },
    {
        latitude: 55.76789020,
        longitude: 37.64687425,
        hintContent: '<div class="map__hint">Красные ворота</div>'
    },
    {
        latitude: 55.73968735,
        longitude: 37.66354516,
        hintContent: '<div class="map__hint">Таганская</div>'
    },
    {
        latitude: 55.79381913,
        longitude: 37.71318389,
        hintContent: '<div class="map__hint">Преображенская</div>'
    },
    {
        latitude: 55.67263962,
        longitude: 37.51466752,
        hintContent: '<div class="map__hint">Проспект Вернадского</div>'
    },
    {
        latitude: 55.69929719,
        longitude: 37.50364948,
        hintContent: '<div class="map__hint">Раменки</div>'
    },
    {
        latitude: 55.68845755,
        longitude: 37.53442280,
        hintContent: '<div class="map__hint">Университет</div>'
    },
    {
        latitude: 55.78172420,
        longitude: 37.70706000,
        hintContent: '<div class="map__hint">Электрозавдоская</div>'
    },
], geoObjects= [];

function init() {
    var map = new ymaps.Map('map', {
        center: [55.75409081, 37.61745814],
        zoom: 11,
        controls: ['zoomControl'],
        behaviors: ['drag', 'dblClickZoom']
    });

    for (var i = 0; i < placemarks.length; i++) {
            geoObjects[i] = new ymaps.Placemark([placemarks[i].latitude, placemarks[i].longitude],
            {
                hintContent: placemarks[i].hintContent
            },
            {
                iconLayout: 'default#image',
                iconImageHref: 'img/logolo.png',
                iconImageSize: [40, 40],
                iconImageOffset: [-23, -57]
            });
    }

    var clusterer = new ymaps.Clusterer({
        clusterIcons: [
            {
                href: 'img/logolo.png',
                size: [70, 70],
                offset: [-50, -50]
            }
        ],
        clusterIconContentLayout: null
    });

    map.geoObjects.add(clusterer);
    clusterer.add(geoObjects);
};
