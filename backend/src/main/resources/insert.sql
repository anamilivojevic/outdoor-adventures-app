INSERT INTO `db_outdoor_activities`.`activities`
(`name`,`description`, `img_path`)
VALUES
("Rock climbing", "Scale new heights and conquer your fears with rock climbing, the ultimate test of strength, skill, and courage! Climb sheer rock faces, using only your hands and feet, and feel the rush of adrenaline as you reach the summit. With breathtaking views and a sense of accomplishment like no other, rock climbing is an unforgettable adventure for anyone seeking a challenge.", "../resources/images/rockclimbing.jpg"),
("Canyoning", "Dive into an exhilarating adventure with canyoning, a sport that combines hiking, swimming, and abseiling! Explore breathtaking canyons and gorges as you slide down natural rock slides, jump into crystal clear pools, and rappel down cascading waterfalls. With stunning scenery and heart-pumping excitement, canyoning is a must-try for thrill-seekers and nature lovers alike.", "../resources/images/canyoning.jpg"),
("Mountain biking", "Unleash your inner adventurer and explore the great outdoors with mountain biking! Navigate rocky terrain, steep hills, and winding trails as you take in the stunning views of the mountains. Whether you're a casual rider or a hardcore mountain biker, this adrenaline-fueled sport offers an exciting challenge and an escape from the hustle and bustle of everyday life.", "../resources/images/mtb.jpg"),
("Skydiving", "Take the leap of a lifetime and experience the thrill of freefall with skydiving! Step out of a plane thousands of feet in the air and feel the rush of the wind as you hurtle towards the earth. With breathtaking views and a sense of freedom like no other, skydiving is an unforgettable adventure for adrenaline junkies and thrill-seekers alike.", "../resources/images/skydiving.jpg"),
("Kitesurfing", "Get ready to soar with kitesurfing, the ultimate adrenaline rush on the water! Strap on a kite and board and harness the power of the wind to glide across the waves, performing daring tricks and jumps along the way. Whether you're a beginner or a pro, kitesurfing offers an unparalleled experience of speed, skill, and excitement.", "../resources/images/kitesurfing.jpg"),
("Quad biking", "Experience the thrill of off-road adventure with quad biking! Hop on a four-wheeled, all-terrain vehicle and navigate through rugged terrain, zooming past obstacles and feeling the wind in your hair. Whether you're a seasoned rider or a first-time adventurer, quad biking is an exhilarating way to explore the great outdoors.", "../resources/images/quad.jfif"),
("Cave diving", "Explore twisting tunnels, swim through crystal-clear waters, and witness stunning geological formations that few others have ever seen. With nothing but your gear and the glow of your flashlight, use a unique combination of skill, experience, and courage to navigate these dark, mysterious caverns.", "../resources/images/cavediving.jpg"),
("Snowboarding", "Get ready to experience the ultimate rush of carving down the mountain on a snowboard! With your feet strapped, feel the exhilaration of racing through fresh powder, performing daring tricks and jumps along the way. Offering the perfect combination of adrenaline-fueled excitement and amazing scenery, snowboarding will leave you breathless.", "../resources/images/snowboarding.jpg");

INSERT INTO `db_outdoor_activities`.`tags` (`name`,`color`) VALUES ("water", "#4fd6d1"), ("air", "#91c3ff"), ("snow/ice", "#bdfcf8"), ("mountain", "#67b570"), ("extreme", "#ad3e3e");

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

INSERT INTO `db_outdoor_activities`.`location`
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





