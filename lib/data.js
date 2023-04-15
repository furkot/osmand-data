const toOsmand = {
    0: 'tourism_hotel',             // hotel
    1: 'special_star',              // stop (default)
    2: 'special_trekking',          // hiking
    3: 'special_openstreetmap',     // guide
    4: 'special_ski_touring',       // snowshoeing
    5: 'shop_books',                // book
    6: 'amenity_atm',               // deal
    7: 'special_marker',            // pin
    8: 'special_bicycle',           // biking
    9: 'tourism_picnic_site',       // picnic
   10: 'charging_station',          // charging
   11: 'tourism_camp_site',         // tent
   12: 'tourism_apartment',         // house
   13: 'sport_climbing',            // climbing
   14: 'special_skiing',            // skiing
   15: 'tourism_hostel',            // hostel
   16: 'tourism_hotel',             // chain
   17: 'personal_transport',        // car
   18: 'special_point_start',       // first
   19: 'special_point_finish',      // last
  //20: '',                         // UNUSED
   21: 'sport_scuba_diving',        // diving
   22: 'special_point_start_finish',// firstlast
   23: 'air_transport',             // airplane
   24: 'restaurants',               // restaurant
   25: 'fuel',                      // fillingstation
   26: 'special_motorcycle',        // motorcycle
   27: 'amenity_marketplace',       // farmstand
   28: 'amenity_biergarten',        // brewery
   29: 'attraction_roller_coaster', // amusementpark
   30: 'shop_alcohol',              // wine
   31: 'amenity_bar',               // bar
   32: 'shop_food',                 // grocery
   33: 'tourism_museum',            // museum
   34: 'building_type_church',      // church
   35: 'building_type_synagogue',   // synagogue
   36: 'historic_ruins',            // ruins
   37: 'special_house',             // villa
   38: 'historic_manor',            // palace
   39: 'special_image',             // artmuseum
   40: 'special_poi_sagrada_familia',// worldheritagesite
   41: 'special_poi_us_capitol',    // town_hall
   42: 'building_type_mosque',      // shrine
   43: 'special_poi_eiffel_tower',  // tower
   44: 'special_poi_taj_mahal',     // temple
   45: 'laboratory',                // sciencemuseum
   46: 'monument',                  // landmark
   47: 'historic_archaeological_site',// historymuseum
   48: 'wood',                      // forest
   49: 'sport_surfing',             // surfing
   50: 'park',                      // park
   51: 'building_type_pyramid',     // structure
   52: 'natural_cave_entrance',     // naturalfeature
   53: 'park',                      // outdoors
   54: 'leisure_water_park',        // watersport
   55: 'routes',                    // scenicroad
   56: 'beach',                     // beach
   57: 'natural_hot_spring',        // hotspring
   58: 'water',                     // water
   59: 'natural_peak_big',          // mountains
   60: 'volcano',                   // volcano
   61: 'tourism_viewpoint',         // lookout
   62: 'reservoir',                 // lake
   63: 'river',                     // river
   64: 'special_offroad',           // jeep
   65: 'grave_yard',                // cemetery
   66: 'shop_books',                // library
   67: 'zoo',                       // zoo
   68: 'sport_stadium',             // stadium
   69: 'man_made_windmill',         // windmill
   70: 'place_town',                // square
   71: 'place_city',                // town
   72: 'memorial_plaque',           // statue
   73: 'tourism_information',       // information
   74: 'bandstand',                 // amphitheater
   75: 'telescope_type_optical',    // observatory
 //76: '',                          // passthru
   77: 'amenity_drinking_water',    // tap
   78: 'shop_food',                 // minimarket
   79: 'leisure_marina',            // anchor
   80: 'toll_booth',                // tollbooth
   81: 'amenity_hospital',          // hospital
   82: 'amenity_toilets',           // toilets
   83: 'special_truck',             // truck
   84: 'special_campervan',         // rvpark
   85: 'bridge_structure_arch',     // bridge
   86: 'special_star',              // star
   87: 'geocache',                  // treasure
   88: 'special_monowheel',         // teleport
   89: 'level_crossing',            // railroadcrossing
   90: 'amenity_cafe',              // coffee
   91: 'special_utv',               // atv
   92: 'dog_park',                  // pets
   93: 'firepit',                   // fire
   94: 'leisure_fishing',           // pier
   95: 'special_sail_boat',         // ferry
   96: 'amenity_theatre',           // theater
   97: 'route_railway_ref',         // train
   98: 'amenity_parking',           // parking
   99: 'shop_supermarket',          // cart
  100: 'leisure_slipway',           // boatramp
  101: 'leisure_bird_hide',         // bird
//102: '',                          // UNUSED
  103: 'amenity_cinema',            // film
  104: 'special_audio',             // music
  105: 'special_microphone',        // entertain
  106: 'special_shuttle_bus',       // bus
  107: 'special_taxi',              // taxi
  108: 'route_track',               // off-road
  109: 'dam',                       // dam
  110: 'special_symbol_exclamation_mark',// danger
  111: 'special_building',          // office
  112: 'shop_gift',                 // gift
  113: 'shop_hairdresser',          // hairdresser
  114: 'special_heart',             // heart
  115: 'generator_source_coal',     // industry
  116: 'shop_laundry',              // laundry
  117: 'man_made_lighthouse',       // lighthouse
//118: '',                          // UNUSED
  119: 'leisure_playground',        // playground
  120: 'amenity_police',            // police
  121: 'amenity_prison',            // prison
  122: 'special_symbol_minus',      // roadblock
  123: 'spaceport',                 // rocket
  124: 'amenity_school',            // school
  125: 'isolated_dwelling',         // shelter
  126: 'travel_agent',              // suitcase
  127: 'amenity_veterinary',        // veterinary
  128: 'waste_disposal',            // remove
  129: 'wetland',                   // wetland
  130: 'wheelchair_designated',     // wheelchair
  131: 'sport_golf',                // golf
  132: 'amenity_post_box',          // envelope
  133: 'aerialway_transport',       // aerialway
  134: 'air_transport',             // airfield
  135: 'shop_alcohol',              // alcohol_shop
  136: 'american_football',         // american_football
  137: 'tourism_aquarium',          // aquarium
  138: 'special_photo_camera',      // attraction
  139: 'shop_bakery',               // bakery
  140: 'sport_baseball',            // baseball
  141: 'sport_basketball',          // basketball
  142: 'building',                  // building
  143: 'shop_butcher',              // butcher
  144: 'historic_castle',           // castle
//145: '',                          // UNUSED
//146: '',                          // UNUSED
  147: 'shop_department_store',     // clothing_store
  148: 'amenity_university',        // college
  149: 'shop_department_store',     // commercial
  150: 'sport_cricket',             // cricket
//151: '',                          // UNUSED
  152: 'amenity_dentist',           // dentist
  153: 'amenity_doctors',           // doctor
  154: 'amenity_embassy',           // embassy
  155: 'conveying_yes',             // entrance
  156: 'amenity_fast_food',         // fast_food
  157: 'special_helicopter',        // heliport
  158: 'ice_cream',                 // ice_cream
  159: 'shop_food',                 // food_shop
  160: 'natural_peak',              // mountain
  161: 'parking_underground',       // parking_garage
  162: 'amenity_pharmacy',          // pharmacy
  163: 'amenity_telephone',         // phone
  164: 'pitch',                     // pitch
  165: 'building_type_cathedral',   // place_of_worship
  166: 'route_light_rail_ref',      // rail_light
  167: 'special_subway',            // rail_metro
  168: 'sport_soccer',              // soccer
//169: '',                          // UNUSED
//170: '',                          // UNUSED
//171: '',                          // UNUSED
  172: 'restaurants',               // sushi
  173: 'sport_tennis',              // tennis
//174: '',                          // UNUSED
//175: '',                          // UNUSED
  176: 'trade',                     // warehouse
  177: 'garden',                    // garden
  178: 'fuel',                      // diesel
  179: 'fuel',                      // ethanol-free
  180: 'sport_swimming'             // swimming
};

const toFurkot = {
  air_transport: 23,          // airplane
  fuel: 25,                   // fillingstation
  park: 50,                   // park
  restaurants: 24 ,           // restaurant
  shop_alcohol: 135,          // alcohol_shop
  shop_books: 66,             // library
  shop_department_store: 149, // commercial
  shop_food: 32,              // grocery
  special_star: 1,            // stop (default)
  tourism_hotel: 0            // hotel
};

const colors = {
  2: 'Black',
  3: 'Blue',
  4: 'Cyan',
  5: 'Navy',
  6: 'Teal',
  7: 'DarkGray',
  8: 'DarkGreen',
  9: 'Purple',
 10: 'Maroon',
 11: '#eecc22', // dark yellow
 12: 'Green',
 14: 'LightGray',
 15: 'Magenta',
 18: 'Red',
 20: 'White',
 21: 'Yellow',
 22: 'Silver'
};

module.exports = {
  toOsmand,
  toFurkot,
  colors
};
