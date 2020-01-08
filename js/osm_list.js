  // On initialise la latitude et la longitude de Paris (centre de la carte)
  var lat = 47.633333;
  var lon =1.43896484375;
  var macarte = null;
  // Initialisation des listes de villes où se situent des IUT Info ...
  var villes = {
    "Calais": { "lat": 50.9506876, "lon": 1.8833334999999352 },
    "Lille": { "lat": 50.6107405, "lon": 3.1379094000000123 },
    "Lens": { "lat": 50.43783990000001, "lon": 2.8102155999999923 },
    "Maubeuge": { "lat": 50.2784895, "lon": 3.9816639000000578 },
    "Le Havre": { "lat": 49.5144317, "lon": 0.1612447999999631 },
    "Caen": { "lat": 49.20524700000001, "lon": -0.3835601000000679 },
    "Amiens": { "lat": 49.8728522, "lon": 2.263714299999947 },
    "Reims": { "lat": 49.2407469, "lon": 4.061808000000042 },
    "Metz": { "lat": 49.1202126, "lon": 6.163799700000027 },
    "Lannion": { "lat": 48.758313, "lon": -3.451812000000018 },
    "Villetaneuse": { "lat": 48.9559811, "lon": 2.342332899999974 },
    "Montreuil": { "lat": 48.8624375, "lon": 2.4641748000000234 },
    "Paris 5": { "lat": 48.84185650000001, "lon": 2.2683736999999837 },
    "Marne-la-Vallée": { "lat": 48.83717499999999, "lon": 2.584855800000014 },
    "Vélizy": { "lat": 48.782456, "lon": 2.2188131999999996 },
    "Orsay": { "lat": 48.7116166, "lon": 2.1705336999999645 },
    "Fontainebleau": { "lat": 48.39822299999999, "lon": 2.6872299999999996 },
    "Saint-Dié-des-Vosges": { "lat": 48.2899606, "lon": 6.942229300000008 },
    "Laval": { "lat": 48.085762, "lon": -0.7570580000000291 },
    "Nancy": { "lat": 48.6828361, "lon": 6.161133999999947 },
    "Strasbourg": { "lat": 48.5303327, "lon": 7.735657100000026 },
    "Vannes": { "lat": 47.6443485, "lon": -2.7767767999999933 },
    "Orléans": { "lat": 47.84365589999999, "lon": 1.9252724000000399 },
    "Belfort": { "lat": 47.6443353, "lon": 6.8384465999999975 },
    "Nantes": { "lat": 47.22308289999999, "lon": -1.5445793000000094 },
    "Dijon": { "lat": 47.3099195, "lon": 5.068812900000012 },
    "La Rochelle": { "lat": 46.1418367, "lon": -1.1517781000000014 },
    "Bourg en Bresse": { "lat": 46.2153648, "lon": 5.24156210000001 },
    "Limoges": { "lat": 45.83568349999999, "lon": 1.2297634000000244 },
    "Clermond-Ferrand": { "lat": 45.7613422, "lon": 3.1104526000000305 },
    "Annecy": { "lat": 45.920602, "lon": 6.15338399999996 },
    "Bordeaux": { "lat": 44.7897036, "lon": -0.6125207000000046 },
    "Le Puy": { "lat": 45.0402282, "lon":3.881534600000009 },
    "Lyon": { "lat": 45.7862039, "lon": 4.883549000000016 },
    "Grenoble": { "lat": 45.1921057, "lon": 5.717328899999984 },
    "Blagnac": { "lat": 43.6490844, "lon":1.3747945000000072 },
    "Rodez": { "lat": 44.36024659999999, "lon": 2.575832699999978 },
    "Valence": { "lat": 44.9157141, "lon": 4.915684800000008 },
    "Bayonne": { "lat": 43.4800424, "lon": -1.5093202000000474 },
    "Toulouse": { "lat": 43.5704595, "lon": 1.4645755000000236 },
    "Aix-en-Provence": { "lat": 43.51434070000001, "lon": 5.451355299999932 },
    "Montpelier": { "lat": 43.635355, "lon": 3.850713400000018 },
    "Arles": { "lat": 43.6722909, "lon": 4.640456599999993 },
    "Nice": { "lat": 43.68763860000001, "lon": 7.227478000000019 },

  };
  console.log("Liste des villes (si rien ne s'affiche, vérifier si la variable ville, elle peut alors être érronée):")
  console.log(villes);
  // Arrêté à ST DIE || Reste le reste de la france a mettre lol
  // Fonction d'initialisation de la carte
  function initMap() {
            console.log("Initialisation de la carte en cours ...");
    // Créer l'objet "macarte" et l'insèrer dans l'élément HTML qui a l'ID "map"
            macarte = L.map('map').setView([lat, lon], 5);
            // Leaflet ne récupère pas les cartes (tiles) sur un serveur par défaut. Nous devons lui préciser où nous souhaitons les récupérer. Ici, openstreetmap.fr
            L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
                // Il est toujours bien de laisser le lien vers la source des données',
                minZoom: 1,
                maxZoom: 20
            }).addTo(macarte);
            for (ville in villes) {
      var marker = L.marker([villes[ville].lat, villes[ville].lon]).addTo(macarte);
  marker.bindPopup(ville);
  }
        }
  window.onload = function(){
    // Fonction d'initialisation qui s'exécute lorsque le DOM est chargé
    initMap();
  };
