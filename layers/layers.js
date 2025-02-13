var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_monuments_1 = new ol.format.GeoJSON();
var features_monuments_1 = format_monuments_1.readFeatures(json_monuments_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_monuments_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_monuments_1.addFeatures(features_monuments_1);
var lyr_monuments_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_monuments_1, 
                style: style_monuments_1,
                popuplayertitle: 'monuments',
                interactive: true,
                title: '<img src="styles/legend/monuments_1.png" /> monuments'
            });
var format_religieux_2 = new ol.format.GeoJSON();
var features_religieux_2 = format_religieux_2.readFeatures(json_religieux_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_religieux_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_religieux_2.addFeatures(features_religieux_2);
var lyr_religieux_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_religieux_2, 
                style: style_religieux_2,
                popuplayertitle: 'religieux',
                interactive: true,
                title: '<img src="styles/legend/religieux_2.png" /> religieux'
            });
var format_port_3 = new ol.format.GeoJSON();
var features_port_3 = format_port_3.readFeatures(json_port_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_port_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_port_3.addFeatures(features_port_3);
var lyr_port_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_port_3, 
                style: style_port_3,
                popuplayertitle: 'port',
                interactive: true,
                title: '<img src="styles/legend/port_3.png" /> port'
            });

lyr_OSMStandard_0.setVisible(true);lyr_monuments_1.setVisible(true);lyr_religieux_2.setVisible(true);lyr_port_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_monuments_1,lyr_religieux_2,lyr_port_3];
lyr_monuments_1.set('fieldAliases', {'id': 'id', });
lyr_religieux_2.set('fieldAliases', {'id': 'id', });
lyr_port_3.set('fieldAliases', {'id': 'id', });
lyr_monuments_1.set('fieldImages', {'id': 'TextEdit', });
lyr_religieux_2.set('fieldImages', {'id': 'TextEdit', });
lyr_port_3.set('fieldImages', {'id': 'TextEdit', });
lyr_monuments_1.set('fieldLabels', {'id': 'no label', });
lyr_religieux_2.set('fieldLabels', {'id': 'no label', });
lyr_port_3.set('fieldLabels', {'id': 'no label', });
lyr_port_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});