var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Reprojectedwilayah_1 = new ol.format.GeoJSON();
var features_Reprojectedwilayah_1 = format_Reprojectedwilayah_1.readFeatures(json_Reprojectedwilayah_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Reprojectedwilayah_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Reprojectedwilayah_1.addFeatures(features_Reprojectedwilayah_1);
var lyr_Reprojectedwilayah_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Reprojectedwilayah_1, 
                style: style_Reprojectedwilayah_1,
                interactive: false,
                title: '<img src="styles/legend/Reprojectedwilayah_1.png" /> Reprojected wilayah'
            });
var format_Snappedjalan_2 = new ol.format.GeoJSON();
var features_Snappedjalan_2 = format_Snappedjalan_2.readFeatures(json_Snappedjalan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Snappedjalan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Snappedjalan_2.addFeatures(features_Snappedjalan_2);
var lyr_Snappedjalan_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Snappedjalan_2, 
                style: style_Snappedjalan_2,
                interactive: true,
                title: '<img src="styles/legend/Snappedjalan_2.png" /> Snapped jalan'
            });
var format_SNAFIX_3 = new ol.format.GeoJSON();
var features_SNAFIX_3 = format_SNAFIX_3.readFeatures(json_SNAFIX_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SNAFIX_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SNAFIX_3.addFeatures(features_SNAFIX_3);
var lyr_SNAFIX_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SNAFIX_3, 
                style: style_SNAFIX_3,
                interactive: true,
    title: 'SNA FIX<br />\
    <img src="styles/legend/SNAFIX_3_0.png" /> 1200 meter<br />\
    <img src="styles/legend/SNAFIX_3_1.png" /> 400 meter<br />\
    <img src="styles/legend/SNAFIX_3_2.png" /> 800 meter<br />\
    <img src="styles/legend/SNAFIX_3_3.png" /> lebih dari 1,2 km<br />\
    <img src="styles/legend/SNAFIX_3_4.png" /> <br />'
        });
var format_KESEHATANNNN_4 = new ol.format.GeoJSON();
var features_KESEHATANNNN_4 = format_KESEHATANNNN_4.readFeatures(json_KESEHATANNNN_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KESEHATANNNN_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KESEHATANNNN_4.addFeatures(features_KESEHATANNNN_4);
var lyr_KESEHATANNNN_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KESEHATANNNN_4, 
                style: style_KESEHATANNNN_4,
                interactive: true,
    title: 'KESEHATANNNN<br />\
    <img src="styles/legend/KESEHATANNNN_4_0.png" /> Fasilitas Kesehatan Lainnya<br />\
    <img src="styles/legend/KESEHATANNNN_4_1.png" /> <br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_Reprojectedwilayah_1.setVisible(true);lyr_Snappedjalan_2.setVisible(true);lyr_SNAFIX_3.setVisible(true);lyr_KESEHATANNNN_4.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Reprojectedwilayah_1,lyr_Snappedjalan_2,lyr_SNAFIX_3,lyr_KESEHATANNNN_4];
lyr_Reprojectedwilayah_1.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Snappedjalan_2.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_SNAFIX_3.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'type': 'type', 'Service_AreaWADMKC': 'Service_AreaWADMKC', 'Service_AreaNAMA': 'Service_AreaNAMA', });
lyr_KESEHATANNNN_4.set('fieldAliases', {'ID': 'ID', 'NAMOBJ': 'NAMOBJ', 'LUAS': 'LUAS', 'REMARK': 'REMARK', 'TIPSHT': 'TIPSHT', 'FCODE': 'FCODE', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'FSKADD': 'FSKADD', });
lyr_Reprojectedwilayah_1.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_Snappedjalan_2.set('fieldImages', {'NAMRJL': 'TextEdit', 'KONRJL': 'TextEdit', 'MATRJL': 'TextEdit', 'FGSRJL': 'TextEdit', 'UTKRJL': 'TextEdit', 'TOLRJL': 'TextEdit', 'WLYRJL': 'TextEdit', 'AUTRJL': 'TextEdit', 'KLSRJL': 'TextEdit', 'SPCRJL': 'TextEdit', 'JPARJL': 'TextEdit', 'ARHRJL': 'TextEdit', 'STARJL': 'TextEdit', 'KLLRJL': 'TextEdit', 'MEDRJL': 'TextEdit', 'LOCRJL': 'TextEdit', 'JARRJL': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_SNAFIX_3.set('fieldImages', {'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', 'type': 'TextEdit', 'Service_AreaWADMKC': 'TextEdit', 'Service_AreaNAMA': 'TextEdit', });
lyr_KESEHATANNNN_4.set('fieldImages', {'ID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'LUAS': 'TextEdit', 'REMARK': 'TextEdit', 'TIPSHT': 'TextEdit', 'FCODE': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'FSKADD': 'TextEdit', });
lyr_Reprojectedwilayah_1.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_Snappedjalan_2.set('fieldLabels', {'NAMRJL': 'no label', 'KONRJL': 'no label', 'MATRJL': 'no label', 'FGSRJL': 'no label', 'UTKRJL': 'no label', 'TOLRJL': 'no label', 'WLYRJL': 'no label', 'AUTRJL': 'no label', 'KLSRJL': 'no label', 'SPCRJL': 'no label', 'JPARJL': 'no label', 'ARHRJL': 'no label', 'STARJL': 'no label', 'KLLRJL': 'no label', 'MEDRJL': 'no label', 'LOCRJL': 'no label', 'JARRJL': 'no label', 'FCODE': 'no label', 'REMARK': 'header label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_SNAFIX_3.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'inline label', 'name': 'no label', 'type': 'no label', 'Service_AreaWADMKC': 'inline label', 'Service_AreaNAMA': 'header label', });
lyr_KESEHATANNNN_4.set('fieldLabels', {'ID': 'no label', 'NAMOBJ': 'no label', 'LUAS': 'no label', 'REMARK': 'header label', 'TIPSHT': 'no label', 'FCODE': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'FSKADD': 'no label', });
lyr_KESEHATANNNN_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});