const toOsmand = {
    0: 'tourism_hotel',             // hotel
  //1: '',                          // stop (default)
    2: 'piste_hike',                // hiking
    3: 'piste_hike',                // guide
    4: 'special_ski_touring',       // snowshoeing
    5: 'shop_books',                // book
    6: 'amenity_bank',              // deal
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
   17: 'shop_car',                  // car
   18: 'special_point_start',       // first
   19: 'special_point_finish',      // last
   20: 'tourism_hotel',             // multinight
   21: 'sport_diving',              // diving
   22: 'special_point_start_finish',// firstlast
   23: 'aeroway_aerodrome',         // airplane
   24: 'restaurants',               // restaurant
   25: 'fuel',                      // fillingstation
   26: 'special_enduro_motorcycle', // motorcycle
   27: 'amenity_marketplace',       // farmstand
   28: 'craft_brewery',             // brewery
   29: 'attraction_carousel',       // amusementpark
   30: 'craft_winery',              // wine
   31: 'amenity_bar',               // bar
   32: 'shop_food',                 // grocery
   33: 'tourism_museum',            // museum
   34: 'building_type_church',      // church
   35: 'building_type_synagogue',   // synagogue
   36: 'historic_ruins',            // ruins
   37: 'special_house',             // villa
   38: 'historic_castle',           // palace
   39: 'tourism_museum',            // artmuseum
   40: 'special_poi_sagrada_familia',// worldheritagesite
   41: 'office',                    // officebuilding
   42: 'building_type_chapel',      // shrine
   43: 'man_made_tower',            // tower
   44: 'special_poi_taj_mahal',     // temple
   45: 'tourism_museum',            // sciencemuseum
   46: 'special_poi_eiffel_tower',  // landmark
   47: 'tourism_museum',            // historymuseum
   48: 'forest',                    // forest
   49: 'sport_surfing',             // surfing
   50: 'park',                      // park
   51: 'construction',              // structure
   52: 'natural_peak_big',          // naturalfeature
   53: 'park',                      // outdoors
   54: 'leisure_water_park',        // watersport
   55: 'information_guidepost',     // scenicroad
   56: 'beach',                     // beach
   57: 'natural_hot_spring',        // hotspring
   58: 'water_transport',           // water
   59: 'natural_peak_big',          // mountains
   60: 'volcano',                   // volcano
   61: 'tourism_viewpoint',         // lookout
   62: 'water',                     // lake
   63: 'stream',                    // river
   64: 'special_offroad',           // jeep
   65: 'grave_yard',                // cemetery
   66: 'amenity_library',           // library
   67: 'zoo',                       // zoo
   68: 'sport_stadium',             // stadium
   69: 'man_made_windmill',         // windmill
   70: 'square',                    // square
   71: 'place_town',                // town
   72: 'memorial_statue',           // statue
   73: 'tourism_information',       // information
   74: 'special_poi_colosseum',     // amphitheater
   75: 'observation_tower',         // observatory
 //76: '',                          // passthru
   77: 'amenity_drinking_water',    // tap
   78: 'shop_convenience',          // minimarket
   79: 'leisure_marina',            // anchor
   80: 'toll_booth',                // tollbooth
   81: 'amenity_hospital',          // hospital
   82: 'amenity_toilets',           // toilets
   83: 'special_truck',             // truck
   84: 'special_campervan',         // rvpark
   85: 'bridge_structure_arch',     // bridge
   86: 'special_star',              // star
   87: 'geocache',                  // treasure
   88: 'special_sail_boat',         // teleport
   89: 'level_crossing',            // railroadcrossing
   90: 'amenity_cafe',              // coffee
   91: 'special_utv',               // atv
   92: 'shop_pet',                  // pets
   93: 'firepit',                   // fire
   94: 'leisure_fishing',           // pier
   95: 'amenity_ferry_terminal',    // ferry
   96: 'amenity_theatre',           // theater
   97: 'railway_station',           // train
   98: 'amenity_parking',           // parking
   99: 'shop_supermarket',          // cart
  100: 'leisure_slipway',           // boatramp
  101: 'leisure_bird_hide',         // bird
  102: 'special_time_span',         // clock
  103: 'amenity_cinema',            // film
  104: 'music',                     // music
  105: 'entertainment',             // entertain
  106: 'special_shuttle_bus',       // bus
  107: 'special_taxi',              // taxi
  108: 'special_offroad',           // off-road
  109: 'dam',                       // dam
  110: 'military_danger_area',      // danger
  111: 'building_entrance',         // enter
  112: 'shop_gift',                 // gift
  113: 'shop_hairdresser',          // hairdresser
  114: 'special_heart',             // heart
  115: 'generator_source_coal',     // industry
  116: 'shop_laundry',              // laundry
  117: 'man_made_lighthouse',       // lighthouse
  118: 'oneway_gray_big',           // one-way
  119: 'leisure_playground',        // playground
  120: 'amenity_police',            // police
  121: 'amenity_prison',            // prison
  122: 'barrier_block',             // roadblock
  123: 'spaceport',                 // rocket
  124: 'amenity_school',            // school
  125: 'amenity_shelter',           // shelter
  126: 'travel_agent',              // suitcase
  127: 'amenity_veterinary',        // veterinary
  128: 'trash_disposal',            // remove
  129: 'wetland',                   // wetland
  130: 'wheelchair_designated',     // wheelchair
  131: 'sport_golf',                // golf
  132: 'amenity_post_box',          // envelope
  133: 'aerialway_transport',       // aerialway
  134: 'aeroway_aerodrome',         // airfield
  135: 'shop_alcohol',              // alcohol_shop
  136: 'american_football',         // american_football
  137: 'tourism_aquarium',          // aquarium
  138: 'tourism_viewpoint',         // attraction
  139: 'shop_bakery',               // bakery
  140: 'sport_baseball',            // baseball
  141: 'sport_basketball',          // basketball
  142: 'building',                  // building
  143: 'shop_butcher',              // butcher
  144: 'historic_castle',           // castle
  145: 'turning_circle',            // radio-unchecked
  146: 'playground_roundabout',     // circle
  147: 'shop_department_store',     // clothing_store
  148: 'amenity_college',           // college
  149: 'commercial',                // commercial
  150: 'sport_cricket',             // cricket
  151: 'cross',                     // cross
  152: 'amenity_dentist',           // dentist
  153: 'amenity_doctors',           // doctor
  154: 'amenity_embassy',           // embassy
  155: 'entrance_exit',             // entrance
  156: 'amenity_fast_food',         // fast_food
  157: 'special_helicopter',        // heliport
  158: 'ice_cream',                 // ice_cream
  159: 'special_marker',            // marker
  160: 'natural_peak_big',          // mountain
  161: 'parking_underground',       // parking_garage
  162: 'amenity_pharmacy',          // pharmacy
  163: 'amenity_telephone',         // phone
  164: 'pitch',                     // pitch
  165: 'building_type_cathedral',   // place_of_worship
  166: 'route_light_rail_ref',      // rail_light
  167: 'subway_station',            // rail_metro
  168: 'sport_soccer',              // soccer
  169: 'square',                    // square-stroke
  170: 'square',                    // square-fill
  171: 'special_star_stroked',      // star-stroke
  172: 'restaurants',               // sushi
  173: 'sport_tennis',              // tennis
//174: '',                          // triangle
//175: '',                          // triangle_stroked
  176: 'crane',                     // warehouse
  177: 'garden',                    // garden
  178: 'fuel',                      // diesel
  179: 'fuel',                      // ethanol-free
  180: 'sport_swimming',            // swimming
  181: 'special_symbol_question_mark'// question
};

const toFurkot = {
  'aeroway_aerodrome': 23,          // airplane
  'fuel': 25,                       // fillingstation
  'historic_castle': 38,            // palace
  'natural_peak_big': 59,           // mountains
  'park': 50,                       // park
  'piste_hike': 2,                  // hiking
  'restaurants':24,                 // restaurant
  'special_marker': 7,              // pin
  'special_offroad': 108,           // off-road
  'square': 70,                     // square
  'tourism_hotel': 0,               // hotel
  'tourism_museum': 33,             // museum
  'tourism_viewpoint': 61           // lookout
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
