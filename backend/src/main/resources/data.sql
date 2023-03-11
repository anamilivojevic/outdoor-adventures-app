-- activities
INSERT INTO `db_outdoor_activities`.`activities`(`name`,`description`, `img_path`) VALUES
("Canyoning", "Dive into an exhilarating adventure with canyoning, a sport that combines hiking, swimming, and abseiling! Explore breathtaking canyons and gorges as you slide down natural rock slides, jump into crystal clear pools, and rappel down cascading waterfalls. With stunning scenery and heart-pumping excitement, canyoning is a must-try for thrill-seekers and nature lovers alike.", "../resources/images/canyoning.jpg"),
("Mountain biking", "Unleash your inner adventurer and explore the great outdoors with mountain biking! Navigate rocky terrain, steep hills, and winding trails as you take in the stunning views of the mountains. Whether you're a casual rider or a hardcore mountain biker, this adrenaline-fueled sport offers an exciting challenge and an escape from the hustle and bustle of everyday life.", "../resources/images/mtb.jpg"),
("Skydiving", "Take the leap of a lifetime and experience the thrill of freefall with skydiving! Step out of a plane thousands of feet in the air and feel the rush of the wind as you hurtle towards the earth. With breathtaking views and a sense of freedom like no other, skydiving is an unforgettable adventure for adrenaline junkies and thrill-seekers alike.", "../resources/images/skydiving.jpg"),
("Kitesurfing", "Get ready to soar with kitesurfing, the ultimate adrenaline rush on the water! Strap on a kite and board and harness the power of the wind to glide across the waves, performing daring tricks and jumps along the way. Whether you're a beginner or a pro, kitesurfing offers an unparalleled experience of speed, skill, and excitement.", "../resources/images/kitesurfing.jpg"),
("Quad biking", "Experience the thrill of off-road adventure with quad biking! Hop on a four-wheeled, all-terrain vehicle and navigate through rugged terrain, zooming past obstacles and feeling the wind in your hair. Whether you're a seasoned rider or a first-time adventurer, quad biking is an exhilarating way to explore the great outdoors.", "../resources/images/quad.jfif"),
("SCUBA diving", "Explore twisting tunnels, swim through crystal-clear waters, and witness stunning geological formations that few others have ever seen. With nothing but your gear and the glow of your flashlight, use a unique combination of skill, experience, and courage to navigate these dark, mysterious caverns.", "../resources/images/cavediving.jpg");

-- ("Rock climbing", "Scale new heights and conquer your fears with rock climbing, the ultimate test of strength, skill, and courage! Climb sheer rock faces, using only your hands and feet, and feel the rush of adrenaline as you reach the summit. With breathtaking views and a sense of accomplishment like no other, rock climbing is an unforgettable adventure for anyone seeking a challenge.", "../resources/images/rockclimbing.jpg"),
-- ("Snowboarding", "Get ready to experience the ultimate rush of carving down the mountain on a snowboard! With your feet strapped, feel the exhilaration of racing through fresh powder, performing daring tricks and jumps along the way. Offering the perfect combination of adrenaline-fueled excitement and amazing scenery, snowboarding will leave you breathless.", "../resources/images/snowboarding.jpg");


-- tags
INSERT INTO `db_outdoor_activities`.`tags` (`name`,`color`) VALUES
("water", "#4fd6d1"),
("air", "#91c3ff"),
("snow/ice", "#bdfcf8"),
("mountain", "#67b570"),
("offroad", "#543c3a"),
("amateur", "#d4c713"),
("intermediate", "#d48413"),
("extreme", "#bd4411");

-- activity_tag table
INSERT INTO `db_outdoor_activities`.`activity_tag` (`activity_id`,`tag_id`) VALUES
(1,1),(1,4),(1,7),(1,8),
(2,4),(2,5),(2,7),(2,8),
(3,2),(3,7),(3,8),
(4,1),(4,2),(4,7),(4,8),
(5,5),(5,6),(5,7),
(6,1),(6,2),(6,7),(6,8);

-- kitesurfing
INSERT INTO `db_outdoor_activities`.`companies`(`website_link`,`name`) VALUES
("https://kiteschoolsicily.com","Flow Kiteschool Sicily"),
("https://www.stagnonekiteboarding.com/","Stagnone Kiteboarding"),
("https://www.kiteboarding-club.com/sizilien/","Kiteboarding Club Sizilien"),
("http://www.kitelab.info/en","Kite Lab"),
("https://www.kitesangelsbeach.it/","Kite's Angels Beach"),
("http://www.lacalettakite.com/","La Caletta Kitesurf"),
("https://www.kitesurflatina.it/","Kitesurfing School Latin"),
("https://kitegeneration.com/","KiteGeneration"),
("https://www.kitezone.it/","KiteZone"),
("http://www.gizzeriakite.it/","Gizzeria Kite"),
("https://prokitesardegna.com/","ProKite Sardegna"),
("http://www.windriders.eu/","Wind riders"),
("https://avidkiteboarding.de/","Avid Kiteboarding"),
("http://www.gardasee-kiteschule.de/de","Kitesurf Adventure");
INSERT INTO `db_outdoor_activities`.`locations`
(`city`,`address`,`latitude`, `longitude`,`company_id`) VALUES
("Marsala","Contrada Birgi Vecchio",37.894523,12.466776,1),
("Marsala","Contrada Birgi Vecchio",37.8858734,12.4713526,2),
("Marsala","Via Vajarassa 176",37.8930287,12.4668827,3),
("Marsala","Contrada Birgi Vecchio, 380",37.889517,12.4710208,4),
("Marina di Grosseto","Via Costiera",42.739059,10.958483,5),
("Santa Lucia","Viale dei Pini, 2",40.5808081,9.7729271,6),
("Latina","Str. Lungomare",41.410206,12.8594951,7),
("Cagliari","Via Giardini, 15",39.2213828,9.119233,8),
("Capoterra","Via Cassiopea, 6",39.156757,9.018116,9),
("Gizzeria","Gizzeria Lido",38.937767,16.1851692,10),
("Matzaccara","Punta Trettu",39.246590,8.447849,11),
("Limone Sul Garda","Via IV Novembre, 3",45.809404,10.786635,12),
("Brenzone","Via IV Novembre, 10",45.732345,10.731451,13),
("Malcesine","Via Gardesana, 4",45.723459,10.749901,14);
-- quad biking
INSERT INTO `db_outdoor_activities`.`companies`(`website_link`,`name`) VALUES
("https://www.etnaquad.it/","Etna Quad Adventure"),
("https://www.tuscanyadventure.it/","Tuscany Adventure"),
("http://www.valdilimaoffroad.com/","Val di Lima Off Road"),
("http://www.alcantaraquad.com/alcantara.html","Alcantara Quad"),
("https://www.euroetnatourism.it/","Euro Etna Tourism"),
("https://www.umbriainquad.com/","Umbria in Quad"),
("http://www.valpolicellaadventure.it/","Valpolicella Adventure Travel"),
("https://www.quadvallealcantara.com/","Quad Valle Alcantara"),
("https://segestatour4x4.com/","Segesta Tour 4X4"),
("http://www.escursioniquad.it/","Escursioni Quad"),
("https://www.quadexcursions.com/","Quad Excursions Cefalù"),
("http://www.discoveryquad.it/","Discovery Quad"),
("http://pugliaquad.it/","Vivi la Puglia in Quad by QEE"),
("http://assisiinquad.it/","Assisi In Quad");
INSERT INTO `db_outdoor_activities`.`locations`
(`city`,`address`,`latitude`, `longitude`,`company_id`) VALUES
("Linguaglossa","Via Mareneve",37.8081395,15.075221, 15),
("Asciano","Località Torre a, Castello, 21",43.3191223,11.5498085, 16),
("Bagni di Lucca","Livizzano San Cassiano di Controne",44.0363189,10.632259, 17),
("Fondaco Motta","Via Nazionale",37.8927612,15.1611537, 18),
("Nicolosi","Piazzale Funivia Etna Sud",37.700249,14.9991454, 19),
("Montebuono","Via Pievania, 3",43.0897375,12.1894511, 20),
("Fumane","Via Progni, 1",45.543402,10.885177, 21),
("Gravà","Via Volta Pafumi",37.8885692,15.1573916, 22),
("Calatafimi","SP68",37.9482203,12.8284913, 23),
("Chiuro","Via Armisa, 1",46.1606987,9.9884805, 24),
("Cefalù","Contrada S. Lucia",38.0316338,13.9991941, 25),
("Martano-Borgagne","Via SP 147",40.221665,18.3253461, 26),
("Alberobello","Largo Svevo Italo, 7",40.7883742,17.2331397, 27),
("Assisi","Località Pian della Pieve",43.0973276,12.662824, 28);
-- MTB
INSERT INTO `db_outdoor_activities`.`companies`(`website_link`,`name`) VALUES
("https://www.cervinia.it/cosa-fare/bike-park","Bike Park Breuil-Cervinia"),
("https://www.mtbfinale.eu/","MTB Italy EU"),
("http://www.mtbguidefinale.com/","MTB Guide Finale Ligure"),
("http://www.etnabiketours.com/","Etna Bike Tours"),
("https://www.cerviniamtbexperience.com/","Cervinia Mtb experience"),
("https://calabriabikeresort.com/","Calabria Bike Resort Srl"),
("http://mtb-dolomites.com/","MTB Dolomites"),
("https://www.dolomitipaganellabike.com/en","Dolomiti Paganella Bike"),
("http://www.mtblivigno.eu/","MTB Livigno"),
("http://www.allmost.it/","Allmost MTB"),
("https://www.sicilybiketouristservice.it/","Sicily Bike Tourist Service");
INSERT INTO `db_outdoor_activities`.`locations`
(`city`,`address`,`latitude`, `longitude`,`company_id`) VALUES
("Breuil-Cervinia","Via A. Carrel",45.9298503,7.6796632,29),
("Finale Ligure","Via Nicol� Saccone, 19",44.16822,8.3415563,30),
("Finale Ligure","Strada di Gorra, 10",44.1747048,8.3245204,31),
("Milo","Corso Italia, 11/a",37.7219427,15.1159925,32),
("Cervinia","Piazzale Funivie",45.9341201,7.6337049,33),
("Belmonte Calabro","Via Giuseppe Ianni, 56",39.1628344,16.0849692,34),
("Santa Cristina Valgardena","Str. Dursan, 80/c",46.5578897,11.7232867,35),
("Andalo","Via Rindole, 3b",46.1636505,11.0055926,36),
("Livigno","Via Freita, 1709",46.5170643,6.8609672,37),
("Brenzone","Via D. Alighieri, 4",44.16822,3.8591344,38),
("Catania","Via Federico Ciccaglione, 70",37.643908,14.7832726,39);
-- skydiving
INSERT INTO `db_outdoor_activities`.`companies`(`website_link`,`name`) VALUES
("https://skydivesicilia.it/","SkydiveSicilia"),
("http://www.paracadutismonettuno.it/","Crazy Fly Nettuno"),
("https://www.skydive-venice.com/","Skydive Venice"),
("http://www.skydivefano.com/","Skydive Fano"),
("http://www.thezooskydive.com/","The Zoo Paracadutismo"),
("http://www.skydivethiene.it/","Skydive Thiene"),
("http://www.skydivesalerno.it/","Skydive Salerno"),
("http://www.skydivedream.com/","Skydive Dream Florence"),
("http://www.pullout.it/","Pull Out Skydive"),
("https://www.skydivecostadargento.com/","Skydive Costa D'Argento"),
("http://www.paracadutismolucca.it/","Lucca Skydiving School"),
("http://www.skydivecalabria.it/","Skydive Calabria"),
("http://www.skydivesardegna.it/","Skydive Sardegna"),
("http://www.paracadutismoverona.it/","Skydive Verona"),
("http://paracadutismoroma.com/","Paracadutismo Roma"),
("https://skydiveitalia.it/","Skydive Italia"),
("http://www.skyteamcremona.it/","SkyTeam Cremona"),
("https://www.italiaskydive.it/","Italia Skydive"),
("https://skydiveiseo.it/","Skydive Iseo"),
("http://www.skydreamcenter.it/","Sky Dream Center");
INSERT INTO `db_outdoor_activities`.`locations`
(`city`,`address`,`latitude`, `longitude`,`company_id`) VALUES
("Siracusa","Strada Laganelli, 20",37.0302453,15.2440585,40),
("Nettuno","Strada Ponte Materiale",41.4664038,12.7458216,41),
("San Stino di Livenza","Via Condulmer, 12A",45.6980438,12.7648134,42),
("Fano","Via E. Mattei, 50",43.825473,13.0342923,43),
("Terni","Via Gianni Caproni, 4",42.571842,12.585883,44),
("Thiene","Via Pr� Novei, 15",45.6746039,11.4950969,45),
("Capaccio","Via Olmopanno, 2",40.471932,14.961433,46),
("Firenze","Via delle Campora, 28",43.7576189,11.2344475,47),
("Ravenna","Via Dismano, 160",44.3606998,12.2151218,48),
("Orbetello","Strada Provinciale Parrina",42.4952125,11.2384738,49),
("Capannori","Via Carrara, 1/6",43.825429,10.574729,50),
("Sibari","Contrada Pantano Rotondo",39.758411,16.435367,51),
("Serdiana","SS387",39.4008216,9.1413278,52),
("Verona","Via Turbina",45.4703725,10.930155,53),
("Roma","Via Prenestina Nuova, KM 2",41.8844617,12.7142848,54),
("Monferrato","Aeroporto F.Cappa - S.S. 35",45.1147277,8.4516939,55),
("Cremona","Via dell'Aeroporto",45.1664031,10.0078546,56),
("Reggio Emilia","Via dell'Aeronautica, 15",44.6979282,10.6714683,57),
("Costa Volpino","Via Baiguini",45.8164437,10.0960405,58),
("Cumiana","Strada Galassa, 11",44.9401512,7.428821,59);

-- canyoning
INSERT INTO `db_outdoor_activities`.`companies`(`website_link`,`name`) VALUES
("http://www.canyonadv.com/","Canyon Adventures"),
("https://sicily-green-adventure.business.site/","Alcantara Canyoning SicilyGreenAdventure"),
("http://www.outdoorplanet.net/","Outdoorplanet"),
("http://www.mmove.it/","Mmove into Nature"),
("http://sardegnacanyoning.com/","Sardegna Canyoning"),
("http://www.canyoningvalledaosta.com/","Canyoning Valle D'Aosta"),
("http://www.rockonda.it/","Rockonda"),
("https://www.arcomountainguide.com/sport/canyoning-lago-garda-trentino/","Arco Mountain Guide"),
("http://www.mountainlive.org/","MountainLive"),
("http://www.trentinoclimb.com/","Trentino Climb"),
("http://www.canyoningcentre.com/","Canyoning Centre Valle d'Aosta"),
("https://lol-garda.it/","LOLgarda"),
("http://www.pangea-italia.com/","Pangea Rafting Umbria - Centro Outdoor"),
("https://www.skyclimber.it/en","SkyClimber"),
("http://www.canyoningborgovalbelluna.it/","Canyoning Borgovalbelluna");

INSERT INTO `db_outdoor_activities`.`locations`
(`city`,`address`,`latitude`, `longitude`,`company_id`) VALUES
("Nago-Torbole","Via Giacomo Matteotti, 122",45.875457,10.872172,60),
("Motta Camastra","SS185, km54",37.8769057,15.1775833,61),
("Affi","Caorsa, 10",45.546069,10.7718352,62),
("Prabi Arco","Via dei Legionari Cecoslovacchi, 14",45.9272347,10.8914898,63),
("Cargheghe","Via Brigata Sassari",40.6683186,8.6154746,64),
("Champdepraz","Frazione Fabbrica, 173",45.6859551,7.6615788,65),
("Bagni di Lucca","Strada dell'Abetone e del Brennero",44.0255069,10.6405355,66),
("Arco","Parcheggio Caneve",45.9160337,10.8904703,67),
("Storo","Via Emilio Miglio, 2",45.8441772,10.5838871,68),
("Pieve di Ledro","Via Nuova, 7",45.8892755,10.7291213,69),
("Verrès","Località Chopine",45.6711997,7.6833987,70),
("Riva del Garda","Viale Rovereto, 27",45.8830929,10.8536634,71),
("Scheggino","Piazza Carlo Urbani",42.7127057,12.8303326,72),
("Tremosine sul Garda","Via Provinciale 1",45.783262,10.722753,73),
("Borgo Valbelluna","Via Montagna di Carve, 1",46.042022,12.106365,74);
-- scuba diving
INSERT INTO `db_outdoor_activities`.`companies`(`website_link`,`name`) VALUES
("http://cmasdivingcenter.org/","Cmas Diving Center"),
("http://www.ansdivingischia.it/","Diving Ischia"),
("http://www.bikinidiving.com/","Bikini Diving"),
("http://www.centrosubcampiflegrei.it/","Centro Sub Campi Flegrei"),
("http://www.centrosubpozzuoli.it/","centro sub Pozzuoli"),
("http://www.oloturiasub.it/","oloturia sub"),
("http://www.salentodiving.it/","Salento Diving"),
("http://www.trigonediving.it/","Trigone Diving Catania - Padi"),
("http://www.usticadiving.it/","Diving Center Ustica"),
("https://www.aquaelementdiving.com/","Aqua Element Diving"),
("https://www.argentariodivers.com/","Argentario Divers"),
("https://www.divesardegna.com/","Nautilus Diving Center"),
("https://www.divingline.it/","Diving Line"),
("https://www.divingpuglia.center/","Diving Puglia"),
("https://www.megalehellas.net/","Diving Center Megale Hellas"),
("https://www.orcadivingcenter.it/","Orca Diving Center");
INSERT INTO `db_outdoor_activities`.`locations`
(`city`,`address`,`latitude`, `longitude`,`company_id`) VALUES
("Bologna","Via del Pilastro, 4",44.575864,11.379141,75),
("Ischia","Via G. Rocca, 13",41.050873,13.937508,76),
("Castellammare di Stabia","Cosros Alcide de Gasperi, 313",40.746673,14.469379,77),
("Pozzuoli","Via Miliscola, 165",40.8310479,14.0911064,78),
("Lido Montenuovo","Via Miliscola, Sottopasso Stazione Cumana",40.8303474,14.0871172,79),
("Messina","Via Consolare Pompea, 253",38.229344,15.5697849,80),
("Santa Maria di Leuca", "Lungomare C. Colombo",39.935951,18.354958,81),
("Catania","Viale Africa, 186",37.5112142,15.102302,82),
("Ustica","Piazza Umberto I, SNC",38.7088373,13.1932978,83),
("San Giorgio","Via Pola",38.1669053,14.9512773,84),
("Porto Ercole","Lungomare Andrea Doria, 103",42.39036,11.2082389,85),
("Palau","Via Roma, 14",41.352443,9.364817,86),
("Rome","Via del Fontanile Arenato, 66",41.8864723,12.4197046,87),
("Monopoli","Via Cala Fontanella, 13",41.009006,17.298522,88),
("Grotteria Mare","Via Cristoforo Colombo, II trav. 1/B",38.301556,16.3355271,89),
("Porto Cesareo", "Via Torre Lapillo",40.2881411,17.8536981,90);
--
-- INSERT INTO `db_outdoor_activities`.`companies`(`website_link`,`name`) VALUES
-- INSERT INTO `db_outdoor_activities`.`locations` (`city`,`address`,`latitude`, `longitude`,`company_id`) VALUES

-- activity-location table:
INSERT INTO `db_outdoor_activities`.`activity_location` (`activity_id`,`location_id`) VALUES
(4,1),(4,2),(4,3),(4,4),(4,5),(4,6),(4,7),(4,8),(4,9),(4,10),(4,11),(4,12),(4,13),(4,14),
(5,15),(5,16),(5,17),(5,18),(5,19),(5,20),(5,21),(5,22),(5,23),(5,24),(5,25),(5,26),(5,27),(5,28),
(2,29),(2,30),(2,31),(2,32),(2,33),(2,34),(2,35),(2,36),(2,37),(2,38),(2,39),(2,63), (2,73),
(3,40),(3,41),(3,42),(3,43),(3,44),(3,45),(3,46),(3,47),(3,48),(3,49),(3,50),(3,51),(3,52),(3,53),(3,54),(3,55),(3,56),(3,57),(3,58),(3,59),
(1,60),(1,61),(1,62),(1,63),(1,64),(1,65),(1,66),(1,67),(1,68),(1,69),(1,70),(1,71),(1,72),(1,73),(1,74),(1,75),
(6,76),(6,77),(6,78),(6,79),(6,80),(6,81),(6,82),(6,83),(6,84),(6,85),(6,86),(6,87),(6,88),(6,89),(6,90);