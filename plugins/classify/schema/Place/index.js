module.exports = {
  id: 'Place',
  children: {
    Jurisdiction: require('./Jurisdiction'),
    Structure: require('./Structure'),
    BodyOfWater: require('./BodyOfWater'),
  },
  properties: {
    location: () => {},
    coordinates: () => {},
  },
  //
  categories: {
    mapping: [],
    patterns: [
      /populated places/,
      /landforms of ./,
      /railway stations/,
      /parks in ./,
      / district$/,
      /geography stubs$/,
      /sports venue stubs$/,
    ],
  },
  //
  descriptions: {
    patterns: [],
  },
  //
  infoboxes: {
    mapping: [
      'amusement_park',
      'ancient_site',
      'australian_place',
      'casino',
      'cemetery',
      'church',
      'cricket_ground',
      'dam',
      'feature_on_mars',
      'former_country',
      'former_subdivision',
      'french_commune',
      'german_location',
      'golf_facility',
      'historic_site',
      'hospital',
      'hotel',
      'islands',
      'israel_village',
      'italian_comune',
      'launch_pad',
      'military_memorial',
      'military_structure',
      'monument',
      'mountain',
      'mountain_pass',
      'mountain_range',
      'museum',
      'neighborhood_portland_or',
      'oil_field',
      'park',
      'prison',
      'province_or_territory_of_canada',
      'road',
      'road_small',
      'russian_inhabited_locality',
      'russian_town',
      'russian_urban-type_settlement',
      'school',
      'scotland_council_area',
      'settlement',
      'shopping_mall',
      'south_african_subplace_2011',
      'state',
      'station',
      'street',
      'swiss_town',
      'temple',
      'town_at',
      'u.s._metropolitan_area',
      'u.s._state',
      'uk_constituency',
      'uk_disused_station',
      'uk_place',
      'uk_school',
      'unesco_world_heritage_site',
      'university_of_notre_dame_residence_hall',
      'venue',
      'waterfall',
      'windmill',
      'zoo',
      'ecoregion',
      'uk place',
      'italian comune',
      'geobox',
      'australian place',
      'french commune',
      'german location',
      'u.s. county',
      'former country',
      'road small',
      'lunar crater',
      'gb station',
      'greek dimos',
      'uk constituency main',
      'finnish municipality/population count',
      'ancient site',
      'mountain range',
      'london station',
      'former subdivision',
      'uk station',
      'historic site',
      'world heritage site',
      'diocese',
      'uk disused station',
      'belgium municipality',
      'uk constituency',
      'theatre',
      'canada electoral district',
      'nycs',
      'mountain pass',
      'kommune',
      'historic subdivision',
      'u.s. congressional district',
    ],
    patterns: [],
  },
  //
  sections: {
    mapping: [
      'demographics',
      'neighbourhoods',
      'climate',
      'notable people',
      'geography',
      '2010 census',
      '2000 census',
      'economy',
      'transportation',
      'government',
      'communities',
      'transport',
      'culture',
      'sports',
      'adjacent counties',
      'major highways',
      'notable residents',
      'tourism',
      'cities',
      'population',
      'unincorporated communities',
      'international relations',
      'infrastructure',
      'schools',
      'rail',
      'census-designated places',
      'towns',
      'local government',
      'points of interest',
      'attractions',
      'geology',
      'townships',
      'recreation',
      'location',
      'arts and culture',
      'governance',
      'administrative divisions',
      'landmarks',
      'demography',
      'parks and recreation',
      'public transportation',
      'coat of arms',
      'churches',
    ],
    patterns: [],
  },
  //
  templates: {
    mapping: [
      'coord',
      'weather box',
      'us census population',
      'jct',
      'geographic location',
      'representative',
      'historical populations',
      'wikivoyage-inline',
      'election box',
      'zh',
      'wide image',
    ],
    patterns: [/-geo-stub$/],
  },
  //
  titles: {
    mapping: [
      'cape verde',
      'cedar busway station',
      'delhi metro',
      'erie county, new york',
      'new jersey',
      'new orleans',
      'new york City Subway',
      'new york',
      'new zealand',
      'north carolina',
      'northern ireland',
      'sri lanka',
      'uk parliament constituency',
      'united kingdom',
      'united states',
      'alaska',
      'argentina',
      'arkansas',
      'australia',
      'barbados',
      'brazil',
      'california',
      'canada',
      'chad',
      'chicago',
      'colombia',
      'connecticut',
      'dominica',
      'edmonton',
      'france',
      'georgia',
      'india',
      'israel',
      'japan',
      'manhattan',
      'michigan',
      'nigeria',
      'oklahoma',
      'ontario',
      'pennsylvania',
      'portugal',
      'province',
      'spain',
      'sudan',
      'texas',
      'uk',
      'va',
      'Virginia',
      'volcano',
      'washington',
    ],
    patterns: [],
  },
}
