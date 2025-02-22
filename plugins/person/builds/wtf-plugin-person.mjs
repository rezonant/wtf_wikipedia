/* wtf-plugin-person 0.2.1  MIT */
function getDefaultExportFromNamespaceIfNotNamed (n) {
	return n && Object.prototype.hasOwnProperty.call(n, 'default') && Object.keys(n).length === 1 ? n['default'] : n;
}

// https://en.wikipedia.org/wiki/Category:People_and_person_infobox_templates

var _infoboxes = {
  actor: true,
  adult_biography: true,
  afl_biography: true,
  alpine_ski_racer: true,
  archbishop: true,
  architect: true,
  artist: true,
  athlete: true,
  baseball_biography: true,
  basketball_biography: true,
  boxer: true,
  canadianmp: true,
  cfl_player: true,
  chef: true,
  chess_player: true,
  christian_leader: true,
  college_coach: true,
  college_football_player: true,
  comedian: true,
  comics_creator: true,
  cricketer: true,
  criminal: true,
  cyclist: true,
  economist: true,
  engineer: true,
  fashion_designer: true,
  field_hockey_player: true,
  figure_skater: true,
  football_biography: true,
  gaa_player: true,
  golfer: true,
  governor: true,
  gridiron_football_person: true,
  gymnast: true,
  handball_biography: true,
  hindu_leader: true,
  horseracing_personality: true,
  ice_hockey_player: true,
  indian_politician: true,
  judge: true,
  lacrosse_player: true,
  martial_artist: true,
  mass_murderer: true,
  medical_person: true,
  military_person: true,
  minister: true,
  mlb_player: true,
  model: true,
  monarch: true,
  mp: true,
  nascar_driver: true,
  nba_biography: true,
  nfl_biography: true,
  nfl_player: true,
  officeholder: true,
  person: true,
  philosopher: true,
  police_officer: true,
  politician: true,
  'politician_(general)': true,
  presenter: true,
  president: true,
  professional_wrestler: true,
  racing_driver: true,
  religious_biography: true,
  roman_emperor: true,
  royalty: true,
  rugby_biography: true,
  rugby_league_biography: true,
  saint: true,
  scholar: true,
  scientist: true,
  skier: true,
  sportsperson: true,
  squash_player: true,
  state_representative: true,
  state_senator: true,
  swimmer: true,
  tennis_biography: true,
  volleyball_biography: true,
  volleyball_player: true,
  wrc_driver: true,
  writer: true,
  'hockey team player': true,
  'snooker player': true,
  bishop: true,
  'football biography': true,
  'military person': true,
  'baseball biography': true,
  'ice hockey player': true,
  'nfl player': true,
  'christian leader': true,
  congressman: true,
  'basketball biography': true,
  'comics creator': true,
  'professional wrestler': true,
  'college coach': true,
  'tennis biography': true,
  'afl biography': true,
  'nfl biography': true,
  'rugby biography': true,
  'rugby league biography': true,
  'prime minister': true,
  'nba biography': true,
  'figure skater': true,
  'f1 driver': true,
  'gridiron football person': true,
  'indian politician': true,
  'racing driver': true,
  'martial artist': true,
  'chinese-language singer and actor': true,
  astronaut: true,
  senator: true,
  'nascar driver': true,
  'adult biography': true,
  'state representative': true,
  'state senator': true,
  'coa wide': true,
  'religious biography': true,
  'chess player': true,
  'pageant titleholder': true,
  'gaa player': true,
  'us cabinet official': true
};

const mapping = _infoboxes;

const byInfobox$5 = function (doc, prop) {
  let infoboxes = doc.infoboxes();

  for (let i = 0; i < infoboxes.length; i++) {
    let inf = infoboxes[i];
    let type = inf.type();
    type = type.toLowerCase();
    type = type.trim();

    if (mapping.hasOwnProperty(type)) {
      let s = inf.get(prop);

      if (s) {
        return s.text();
      }
    }
  }

  return null;
};

var getInfobox = byInfobox$5;

const e = (e, t, a) => {
  const [n, r] = e.split("/"),
        [o, i] = r.split(":");
  return Date.UTC(a, n - 1, o, i) - 36e5 * t;
};

var t = (t, a, n, r, o) => {
  const i = new Date(t).getUTCFullYear(),
        s = e(a, o, i),
        u = e(n, r, i);
  return t >= s && t < u;
};

var a = e => {
  let a = e.timezones[e.tz];
  if (void 0 === a) return console.warn("Warning: couldn't find timezone " + e.tz), 0;
  if (void 0 === a.dst) return a.offset;
  let n = a.offset,
      r = a.offset + 1;
  "n" === a.hem && (r = n - 1);
  let o = a.dst.split("->");
  return !0 === t(e.epoch, o[0], o[1], n, r) ? n : r;
};

var n,
    r = (n = Object.freeze({
  __proto__: null,
  default: {
    "9|s": "2/dili,2/jayapura",
    "9|n": "2/chita,2/khandyga,2/pyongyang,2/seoul,2/tokyo,11/palau",
    "9.5|s|04/04:03->10/03:02": "4/adelaide,4/broken_hill,4/south,4/yancowinna",
    "9.5|s": "4/darwin,4/north",
    "8|s|03/08:01->10/04:00": "12/casey",
    "8|s": "2/kuala_lumpur,2/makassar,2/singapore,4/perth,2/ujung_pandang,4/west",
    "8|n": "2/brunei,2/choibalsan,2/hong_kong,2/irkutsk,2/kuching,2/macau,2/manila,2/shanghai,2/taipei,2/ulaanbaatar,2/chongqing,2/chungking,2/harbin,2/macao,2/ulan_bator",
    "8.75|s": "4/eucla",
    "7|s": "12/davis,2/jakarta,9/christmas",
    "7|n": "2/bangkok,2/barnaul,2/hovd,2/krasnoyarsk,2/novokuznetsk,2/novosibirsk,2/phnom_penh,2/pontianak,2/saigon,2/tomsk,2/vientiane,2/ho_chi_minh",
    "6|s": "12/vostok",
    "6|n": "2/almaty,2/bishkek,2/dhaka,2/omsk,2/qyzylorda,2/qostanay,2/thimphu,2/urumqi,9/chagos,2/dacca,2/kashgar,2/thimbu",
    "6.5|n": "2/rangoon,9/cocos,2/yangon",
    "5|s": "12/mawson,9/kerguelen",
    "5|n": "2/aqtau,2/aqtobe,2/ashgabat,2/atyrau,2/baku,2/dushanbe,2/karachi,2/oral,2/samarkand,2/tashkent,2/yekaterinburg,9/maldives,2/ashkhabad",
    "5.75|n": "2/katmandu,2/kathmandu",
    "5.5|n": "2/calcutta,2/colombo,2/kolkata",
    "4|s": "9/reunion",
    "4|n": "2/dubai,2/muscat,2/tbilisi,2/yerevan,8/astrakhan,8/samara,8/saratov,8/ulyanovsk,8/volgograd,2/volgograd,9/mahe,9/mauritius",
    "4.5|n|03/22:00->09/21:24": "2/tehran",
    "4.5|n": "2/kabul",
    "3|s": "12/syowa,9/antananarivo",
    "3|n|03/28:03->10/31:04": "2/famagusta,2/nicosia,8/athens,8/bucharest,8/helsinki,8/kiev,8/mariehamn,8/riga,8/sofia,8/tallinn,8/uzhgorod,8/vilnius,8/zaporozhye,8/nicosia",
    "3|n|03/28:02->10/31:03": "8/chisinau,8/tiraspol",
    "3|n|03/28:00->10/30:24": "2/beirut",
    "3|n|03/27:00->10/30:01": "2/gaza,2/hebron",
    "3|n|03/26:02->10/31:02": "2/jerusalem,2/tel_aviv",
    "3|n|03/26:00->10/29:01": "2/amman",
    "3|n|03/26:00->10/28:24": "2/damascus",
    "3|n": "0/addis_ababa,0/asmera,0/dar_es_salaam,0/djibouti,0/juba,0/kampala,0/mogadishu,0/nairobi,2/aden,2/baghdad,2/bahrain,2/kuwait,2/qatar,2/riyadh,8/istanbul,8/kirov,8/minsk,8/moscow,8/simferopol,9/comoro,9/mayotte,0/asmara,2/istanbul",
    "2|s|03/28:02->10/31:02": "12/troll",
    "2|s": "0/gaborone,0/harare,0/johannesburg,0/lubumbashi,0/lusaka,0/maputo,0/maseru,0/mbabane",
    "2|n|03/28:02->10/31:03": "0/ceuta,arctic/longyearbyen,8/amsterdam,8/andorra,8/belgrade,8/berlin,8/bratislava,8/brussels,8/budapest,8/busingen,8/copenhagen,8/gibraltar,8/ljubljana,8/luxembourg,8/madrid,8/malta,8/monaco,8/oslo,8/paris,8/podgorica,8/prague,8/rome,8/san_marino,8/sarajevo,8/skopje,8/stockholm,8/tirane,8/vaduz,8/vatican,8/vienna,8/warsaw,8/zagreb,8/zurich,3/jan_mayen",
    "2|n": "0/blantyre,0/bujumbura,0/cairo,0/khartoum,0/kigali,0/tripoli,8/kaliningrad",
    "1|s": "0/brazzaville,0/kinshasa,0/luanda,0/windhoek",
    "1|n|04/11:03->05/16:02": "0/casablanca,0/el_aaiun",
    "1|n|03/28:01->10/31:02": "3/canary,3/faeroe,3/madeira,8/dublin,8/guernsey,8/isle_of_man,8/jersey,8/lisbon,8/london,3/faroe,8/belfast",
    "1|n": "0/algiers,0/bangui,0/douala,0/lagos,0/libreville,0/malabo,0/ndjamena,0/niamey,0/porto-novo,0/tunis",
    "14|n": "11/kiritimati",
    "13|s|04/04:04->09/26:03": "11/apia",
    "13|s|01/15:02->11/05:03": "11/tongatapu",
    "13|n": "11/enderbury,11/fakaofo",
    "12|s|04/04:03->09/26:02": "12/mcmurdo,11/auckland,12/south_pole",
    "12|s|01/17:03->11/14:02": "11/fiji",
    "12|n": "2/anadyr,2/kamchatka,2/srednekolymsk,11/funafuti,11/kwajalein,11/majuro,11/nauru,11/tarawa,11/wake,11/wallis",
    "12.75|s|04/04:03->09/26:02": "11/chatham",
    "11|s|04/04:03->10/03:02": "12/macquarie",
    "11|s": "11/bougainville",
    "11|n": "2/magadan,2/sakhalin,11/efate,11/guadalcanal,11/kosrae,11/noumea,11/ponape,11/pohnpei",
    "11.5|n|04/04:03->10/03:02": "11/norfolk",
    "10|s|04/04:03->10/03:02": "4/currie,4/hobart,4/melbourne,4/sydney,4/act,4/canberra,4/nsw,4/tasmania,4/victoria",
    "10|s": "12/dumontdurville,4/brisbane,4/lindeman,11/port_moresby,4/queensland",
    "10|n": "2/ust-nera,2/vladivostok,2/yakutsk,11/guam,11/saipan,11/truk,11/chuuk,11/yap",
    "10.5|s|04/04:01->10/03:02": "4/lord_howe,4/lhi",
    "0|n|03/28:00->10/31:01": "1/scoresbysund,3/azores",
    "0|n": "0/abidjan,0/accra,0/bamako,0/banjul,0/bissau,0/conakry,0/dakar,0/freetown,0/lome,0/monrovia,0/nouakchott,0/ouagadougou,0/sao_tome,1/danmarkshavn,3/reykjavik,3/st_helena,13/gmt,13/utc,0/timbuktu,13/gmt-0,13/gmt+0,13/gmt0,13/greenwich,13/uct,13/universal,13/zulu",
    "-9|n|03/14:02->11/07:02": "1/adak,1/atka,us/aleutian",
    "-9|n": "11/gambier",
    "-9.5|n": "11/marquesas",
    "-8|n|03/14:02->11/07:02": "1/anchorage,1/juneau,1/metlakatla,1/nome,1/sitka,1/yakutat,us/alaska",
    "-8|n": "11/pitcairn",
    "-7|n|03/14:02->11/07:02": "1/los_angeles,1/santa_isabel,1/tijuana,1/vancouver,1/ensenada,6/pacific,10/bajanorte,us/pacific-new,us/pacific",
    "-7|n|03/08:02->11/01:01": "1/dawson,1/whitehorse,6/yukon",
    "-7|n": "1/creston,1/dawson_creek,1/fort_nelson,1/hermosillo,1/phoenix,us/arizona",
    "-6|s|04/03:22->09/04:22": "11/easter,7/easterisland",
    "-6|n|04/04:02->10/31:02": "1/chihuahua,1/mazatlan,10/bajasur",
    "-6|n|03/14:02->11/07:02": "1/boise,1/cambridge_bay,1/denver,1/edmonton,1/inuvik,1/ojinaga,1/yellowknife,1/shiprock,6/mountain,us/mountain",
    "-6|n": "1/belize,1/costa_rica,1/el_salvador,1/guatemala,1/managua,1/regina,1/swift_current,1/tegucigalpa,11/galapagos,6/east-saskatchewan,6/saskatchewan",
    "-5|s": "1/lima,1/rio_branco,1/porto_acre,5/acre",
    "-5|n|04/04:02->10/31:02": "1/bahia_banderas,1/merida,1/mexico_city,1/monterrey,10/general",
    "-5|n|03/14:02->11/07:02": "1/chicago,1/matamoros,1/menominee,1/rainy_river,1/rankin_inlet,1/resolute,1/winnipeg,1/indiana/knox,1/indiana/tell_city,1/north_dakota/beulah,1/north_dakota/center,1/north_dakota/new_salem,1/knox_in,6/central,us/central,us/indiana-starke",
    "-5|n|03/12:03->11/05:01": "1/north_dakota",
    "-5|n": "1/bogota,1/cancun,1/cayman,1/coral_harbour,1/eirunepe,1/guayaquil,1/jamaica,1/panama,1/atikokan",
    "-4|s|05/13:23->08/13:01": "12/palmer",
    "-4|s|04/03:24->09/05:00": "1/santiago,7/continental",
    "-4|s|03/27:24->10/03:00": "1/asuncion",
    "-4|s|02/16:24->11/03:00": "1/campo_grande,1/cuiaba",
    "-4|s": "1/la_paz,1/manaus,5/west",
    "-4|n|03/14:02->11/07:02": "1/detroit,1/grand_turk,1/indianapolis,1/iqaluit,1/louisville,1/montreal,1/nassau,1/new_york,1/nipigon,1/pangnirtung,1/port-au-prince,1/thunder_bay,1/toronto,1/indiana/marengo,1/indiana/petersburg,1/indiana/vevay,1/indiana/vincennes,1/indiana/winamac,1/kentucky/monticello,1/fort_wayne,1/indiana/indianapolis,1/kentucky/louisville,6/eastern,us/east-indiana,us/eastern,us/michigan",
    "-4|n|03/14:00->11/07:01": "1/havana",
    "-4|n|03/12:03->11/05:01": "1/indiana,1/kentucky",
    "-4|n": "1/anguilla,1/antigua,1/aruba,1/barbados,1/blanc-sablon,1/boa_vista,1/caracas,1/curacao,1/dominica,1/grenada,1/guadeloupe,1/guyana,1/kralendijk,1/lower_princes,1/marigot,1/martinique,1/montserrat,1/port_of_spain,1/porto_velho,1/puerto_rico,1/santo_domingo,1/st_barthelemy,1/st_kitts,1/st_lucia,1/st_thomas,1/st_vincent,1/tortola,1/virgin",
    "-3|s": "1/argentina,1/buenos_aires,1/catamarca,1/cordoba,1/fortaleza,1/jujuy,1/mendoza,1/montevideo,1/punta_arenas,1/sao_paulo,12/rothera,3/stanley,1/argentina/la_rioja,1/argentina/rio_gallegos,1/argentina/salta,1/argentina/san_juan,1/argentina/san_luis,1/argentina/tucuman,1/argentina/ushuaia,1/argentina/buenos_aires,1/argentina/catamarca,1/argentina/comodrivadavia,1/argentina/cordoba,1/argentina/jujuy,1/argentina/mendoza,1/rosario,5/east",
    "-3|n|03/14:02->11/07:02": "1/glace_bay,1/goose_bay,1/halifax,1/moncton,1/thule,3/bermuda,6/atlantic",
    "-3|n": "1/araguaina,1/bahia,1/belem,1/cayenne,1/maceio,1/paramaribo,1/recife,1/santarem",
    "-2|n|03/27:22->10/30:23": "1/godthab,1/nuuk",
    "-2|n|03/14:02->11/07:02": "1/miquelon",
    "-2|n": "1/noronha,3/south_georgia,5/denoronha",
    "-2.5|n|03/14:02->11/07:02": "1/st_johns,6/newfoundland",
    "-1|n": "3/cape_verde",
    "-11|n": "11/midway,11/niue,11/pago_pago,11/samoa,us/samoa",
    "-10|n": "11/honolulu,11/johnston,11/rarotonga,11/tahiti,us/hawaii"
  }
})) && n.default || n,
    o = ["africa", "america", "asia", "atlantic", "australia", "brazil", "canada", "chile", "europe", "indian", "mexico", "pacific", "antarctica", "etc"];
let i = {};
Object.keys(r).forEach(e => {
  let t = e.split("|"),
      a = {
    offset: Number(t[0]),
    hem: t[1]
  };
  t[2] && (a.dst = t[2]), r[e].split(",").forEach(e => {
    e = e.replace(/(^[0-9]+)\//, (e, t) => (t = Number(t), o[t] + "/")), i[e] = a;
  });
}), i.utc = {
  offset: 0,
  hem: "n"
};

for (let e = -14; e <= 14; e += .5) {
  let t = e;
  t > 0 && (t = "+" + t);
  let a = "etc/gmt" + t;
  i[a] = {
    offset: -1 * e,
    hem: "n"
  }, a = "utc/gmt" + t, i[a] = {
    offset: -1 * e,
    hem: "n"
  };
}

const s = /(\-?[0-9]+)h(rs)?/i,
      u = /(\-?[0-9]+)/,
      l = /utc([\-+]?[0-9]+)/i,
      h = /gmt([\-+]?[0-9]+)/i,
      c = function (e) {
  return (e = Number(e)) >= -13 && e <= 13 ? "etc/gmt" + (e = ((e *= -1) > 0 ? "+" : "") + e) : null;
};

var d$1 = i,
    m = function (e) {
  let t = e.match(s);
  if (null !== t) return c(t[1]);
  if (t = e.match(l), null !== t) return c(t[1]);

  if (t = e.match(h), null !== t) {
    let e = -1 * Number(t[1]);
    return c(e);
  }

  return t = e.match(u), null !== t ? c(t[1]) : null;
};

const p = (() => {
  let e = (() => {
    if ("undefined" == typeof Intl || void 0 === Intl.DateTimeFormat) return null;
    let e = Intl.DateTimeFormat();
    if (void 0 === e || void 0 === e.resolvedOptions) return null;
    let t = e.resolvedOptions().timeZone;
    return t ? t.toLowerCase() : null;
  })();

  return null === e ? "utc" : e;
})(),
      f = Object.keys(d$1).reduce((e, t) => {
  let a = t.split("/")[1] || "";
  return a = a.replace(/_/g, " "), e[a] = t, e;
}, {});

var y,
    g = (e, t) => {
  if (!e) return p;
  "string" != typeof e && console.error("Timezone must be a string - recieved: '", e, "'\n");
  let a = e.trim();
  if (a = a.toLowerCase(), !0 === t.hasOwnProperty(a)) return a;
  if (a = (e => (e = (e = (e = (e = (e = e.replace(/ time/g, "")).replace(/ (standard|daylight|summer)/g, "")).replace(/\b(east|west|north|south)ern/g, "$1")).replace(/\b(africa|america|australia)n/g, "$1")).replace(/\beuropean/g, "europe")).replace(/\islands/g, "island"))(a), !0 === t.hasOwnProperty(a)) return a;
  if (!0 === f.hasOwnProperty(a)) return f[a];

  if (!0 === /[0-9]/.test(a)) {
    let e = m(a);
    if (e) return e;
  }

  throw new Error("Spacetime: Cannot find timezone named: '" + e + "'. Please enter an IANA timezone id.");
},
    b = (function (e, t) {
  t.isLeapYear = e => e % 4 == 0 && e % 100 != 0 || e % 400 == 0, t.isDate = e => "[object Date]" === Object.prototype.toString.call(e) && !isNaN(e.valueOf()), t.isArray = e => "[object Array]" === Object.prototype.toString.call(e), t.isObject = e => "[object Object]" === Object.prototype.toString.call(e), t.isBoolean = e => "[object Boolean]" === Object.prototype.toString.call(e), t.zeroPad = function (e) {
    let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
    return (e += "").length >= t ? e : new Array(t - e.length + 1).join("0") + e;
  }, t.titleCase = e => e ? e[0].toUpperCase() + e.substr(1) : "", t.ordinal = e => {
    let t = e % 10,
        a = e % 100;
    return 1 === t && 11 !== a ? e + "st" : 2 === t && 12 !== a ? e + "nd" : 3 === t && 13 !== a ? e + "rd" : e + "th";
  }, t.toCardinal = e => (e = (e = String(e)).replace(/([0-9])(st|nd|rd|th)$/i, "$1"), parseInt(e, 10)), t.normalize = function () {
    let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    return "day" === (e = (e = (e = (e = e.toLowerCase().trim()).replace(/ies$/, "y")).replace(/s$/, "")).replace(/-/g, "")) || "days" === e ? "date" : "min" === e || "mins" === e ? "minute" : e;
  }, t.getEpoch = e => "number" == typeof e ? e : t.isDate(e) ? e.getTime() : e.epoch ? e.epoch : null, t.beADate = (e, a) => !1 === t.isObject(e) ? a.clone().set(e) : e, t.formatTimezone = function (e) {
    let a = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    const n = e > 0 ? "+" : "-",
          r = Math.abs(e);
    return "".concat(n).concat(t.zeroPad(parseInt("" + r, 10))).concat(a).concat(t.zeroPad(r % 1 * 60));
  };
}(y = {
  exports: {}
}, y.exports), y.exports);

b.isLeapYear, b.isDate, b.isArray, b.isObject, b.isBoolean, b.zeroPad, b.titleCase, b.ordinal, b.toCardinal, b.normalize, b.getEpoch, b.beADate, b.formatTimezone;
const k = {
  year: new Date().getFullYear(),
  month: 0,
  date: 1
};
var w = {
  parseArray: (e, t, a) => {
    if (0 === t.length) return e;
    let n = ["year", "month", "date", "hour", "minute", "second", "millisecond"];

    for (let r = 0; r < n.length; r++) {
      let o = t[r] || a[n[r]] || k[n[r]] || 0;
      e = e[n[r]](o);
    }

    return e;
  },
  parseObject: (e, t, a) => {
    if (0 === Object.keys(t).length) return e;
    t = Object.assign({}, k, a, t);
    let n = Object.keys(t);

    for (let r = 0; r < n.length; r++) {
      let o = n[r];
      if (void 0 === e[o] || "function" != typeof e[o]) continue;
      if (null === t[o] || void 0 === t[o] || "" === t[o]) continue;
      let i = t[o] || a[o] || k[o] || 0;
      e = e[o](i);
    }

    return e;
  },
  parseNumber: function (e, t) {
    return t > 0 && t < 25e8 && !1 === e.silent && (console.warn("  - Warning: You are setting the date to January 1970."), console.warn("       -   did input seconds instead of milliseconds?")), e.epoch = t, e;
  }
};

const v = function (e) {
  return e.epoch = Date.now(), Object.keys(e._today || {}).forEach(t => {
    "function" == typeof e[t] && (e = e[t](e._today[t]));
  }), e;
},
      z = {
  now: e => v(e),
  today: e => v(e),
  tonight: e => e = (e = v(e)).hour(18),
  tomorrow: e => e = (e = (e = v(e)).add(1, "day")).startOf("day"),
  yesterday: e => e = (e = (e = v(e)).subtract(1, "day")).startOf("day"),
  christmas: e => {
    let t = v(e).year();
    return e = e.set([t, 11, 25, 18, 0, 0]);
  },
  "new years": e => {
    let t = v(e).year();
    return e = e.set([t, 11, 31, 18, 0, 0]);
  }
};

z["new years eve"] = z["new years"];
var _ = z;

var j = function (e) {
  return e = (e = (e = (e = e.replace(/\b(mon|tues?|wed|wednes|thur?s?|fri|sat|satur|sun)(day)?\b/i, "")).replace(/([0-9])(th|rd|st|nd)/, "$1")).replace(/,/g, "")).replace(/ +/g, " ").trim();
};

let O = {
  millisecond: 1,
  second: 1e3,
  minute: 6e4,
  hour: 36e5,
  day: 864e5
};
O.date = O.day, O.month = 25488e5, O.week = 6048e5, O.year = 3154e7, Object.keys(O).forEach(e => {
  O[e + "s"] = O[e];
});
var $ = O;

const D = (e, t, a, n, r) => {
  let o = e.d[a]();
  if (o === t) return;
  let i = null === r ? null : e.d[r](),
      s = e.epoch,
      u = t - o;
  e.epoch += $[n] * u, "day" === n && Math.abs(u) > 28 && t < 28 && (e.epoch += $.hour), null !== r && i !== e.d[r]() && (e.epoch = s);
  const l = $[n] / 2;

  for (; e.d[a]() < t;) e.epoch += l;

  for (; e.d[a]() > t;) e.epoch -= l;

  null !== r && i !== e.d[r]() && (e.epoch = s);
},
      M = {
  year: {
    valid: e => e > -4e3 && e < 4e3,
    walkTo: (e, t) => D(e, t, "getFullYear", "year", null)
  },
  month: {
    valid: e => e >= 0 && e <= 11,
    walkTo: (e, t) => {
      let a = e.d,
          n = a.getMonth(),
          r = e.epoch,
          o = a.getFullYear();
      if (n === t) return;
      let i = t - n;

      for (e.epoch += $.day * (28 * i), o !== e.d.getFullYear() && (e.epoch = r); e.d.getMonth() < t;) e.epoch += $.day;

      for (; e.d.getMonth() > t;) e.epoch -= $.day;
    }
  },
  date: {
    valid: e => e > 0 && e <= 31,
    walkTo: (e, t) => D(e, t, "getDate", "day", "getMonth")
  },
  hour: {
    valid: e => e >= 0 && e < 24,
    walkTo: (e, t) => D(e, t, "getHours", "hour", "getDate")
  },
  minute: {
    valid: e => e >= 0 && e < 60,
    walkTo: (e, t) => D(e, t, "getMinutes", "minute", "getHours")
  },
  second: {
    valid: e => e >= 0 && e < 60,
    walkTo: (e, t) => {
      e.epoch = e.seconds(t).epoch;
    }
  },
  millisecond: {
    valid: e => e >= 0 && e < 1e3,
    walkTo: (e, t) => {
      e.epoch = e.milliseconds(t).epoch;
    }
  }
};

var P = (e, t) => {
  let a = Object.keys(M),
      n = e.clone();

  for (let r = 0; r < a.length; r++) {
    let o = a[r],
        i = t[o];
    if (void 0 === i && (i = n[o]()), "string" == typeof i && (i = parseInt(i, 10)), !M[o].valid(i)) return e.epoch = null, void (!1 === e.silent && console.warn("invalid " + o + ": " + i));
    M[o].walkTo(e, i);
  }
};

let S = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sept", "oct", "nov", "dec"],
    q = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];

var T = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    E = b,
    N = {
  short: () => S,
  long: () => q,
  mapping: () => function () {
    const e = {
      sep: 8
    };

    for (let t = 0; t < S.length; t++) e[S[t]] = t;

    for (let t = 0; t < q.length; t++) e[q[t]] = t;

    return e;
  }(),
  set: e => {
    S = e.short || S, q = e.long || q;
  }
},
    C = (e, t) => {
  if (!t) return e;
  "Z" !== t && "z" !== t || (t = "+0000");
  let a = 0;
  /^[\+-]?[0-9]{2}:[0-9]{2}$/.test(t) && (!0 === /:00/.test(t) && (t = t.replace(/:00/, "")), !0 === /:30/.test(t) && (t = t.replace(/:30/, ".5"))), /^[\+-]?[0-9]{4}$/.test(t) && (t = t.replace(/30$/, ".5")), a = parseFloat(t), Math.abs(a) > 100 && (a /= 100), a *= -1, a >= 0 && (a = "+" + a);
  let n = "etc/gmt" + a;
  return e.timezones[n] && (e.tz = n), e;
},
    I = function (e) {
  let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  let a = (t = t.replace(/^\s+/, "").toLowerCase()).match(/([0-9]{1,2}):([0-9]{1,2}):?([0-9]{1,2})?[:\.]?([0-9]{1,4})?/);

  if (null !== a) {
    let n = Number(a[1]);
    if (n < 0 || n > 24) return e.startOf("day");
    let r = Number(a[2]);
    if (a[2].length < 2 || r < 0 || r > 59) return e.startOf("day");
    a[4] > 999 && (a[4] = parseInt(("" + a[4]).substring(0, 3), 10)), e = (e = (e = (e = e.hour(n)).minute(r)).seconds(a[3] || 0)).millisecond(a[4] || 0);
    let o = t.match(/[\b0-9] ?(am|pm)\b/);
    return null !== o && o[1] && (e = e.ampm(o[1])), e;
  }

  if (a = t.match(/([0-9]+) ?(am|pm)/), null !== a && a[1]) {
    let t = Number(a[1]);
    return t > 12 || t < 1 ? e.startOf("day") : e = (e = (e = e.hour(a[1] || 0)).ampm(a[2])).startOf("hour");
  }

  return e = e.startOf("day");
};

const Y = E.isLeapYear,
      A = N.mapping();
var x = P,
    L = {
  parseOffset: C,
  parseTime: I,
  parseYear: function () {
    let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    let t = arguments.length > 1 ? arguments[1] : undefined;

    if (e = e.trim(), !0 === /^'[0-9][0-9]$/.test(e)) {
      let t = Number(e.replace(/'/, ""));
      return t > 50 ? 1900 + t : 2e3 + t;
    }

    let a = parseInt(e, 10);
    return !a && t && (a = t.year), a = a || new Date().getFullYear(), a;
  },
  parseMonth: function (e) {
    return e = e.toLowerCase().trim(), A[e];
  },
  validate: e => {
    if (!0 !== T.hasOwnProperty(e.month)) return !1;
    if (1 === e.month) return !!(Y(e.year) && e.date <= 29) || e.date <= 28;
    let t = T[e.month] || 0;
    return e.date <= t;
  }
};
const {
  validate: F,
  parseTime: B,
  parseYear: Z,
  parseMonth: H,
  parseOffset: Q
} = L;
var G = [{
  reg: /^(\-?0?0?[0-9]{3,4})-([0-9]{1,2})-([0-9]{1,2})[T| ]([0-9.:]+)(Z|[0-9\-\+:]+)?$/i,
  parse: (e, t) => {
    let a = {
      year: t[1],
      month: parseInt(t[2], 10) - 1,
      date: t[3]
    };
    return !1 === F(a) ? (e.epoch = null, e) : (Q(e, t[5]), x(e, a), e = B(e, t[4]));
  }
}, {
  reg: /^([0-9]{4})[\-\/\. ]([0-9]{1,2})[\-\/\. ]([0-9]{1,2})( [0-9]{1,2}(:[0-9]{0,2})?(:[0-9]{0,3})? ?(am|pm)?)?$/i,
  parse: (e, t) => {
    let a = {
      year: t[1],
      month: parseInt(t[2], 10) - 1,
      date: parseInt(t[3], 10)
    };
    return a.month >= 12 && (a.date = parseInt(t[2], 10), a.month = parseInt(t[3], 10) - 1), !1 === F(a) ? (e.epoch = null, e) : (x(e, a), e = B(e, t[4]));
  }
}, {
  reg: /^([0-9]{4})[\-\/\. ]([a-z]+)[\-\/\. ]([0-9]{1,2})( [0-9]{1,2}(:[0-9]{0,2})?(:[0-9]{0,3})? ?(am|pm)?)?$/i,
  parse: (e, t) => {
    let a = {
      year: Z(t[1], e._today),
      month: H(t[2]),
      date: E.toCardinal(t[3] || "")
    };
    return !1 === F(a) ? (e.epoch = null, e) : (x(e, a), e = B(e, t[4]));
  }
}];
const {
  validate: U,
  parseTime: V,
  parseYear: W,
  parseMonth: J
} = L;
var K = [{
  reg: /^([0-9]{1,2})[\-\/.]([0-9]{1,2})[\-\/.]?([0-9]{4})?( [0-9]{1,2}:[0-9]{2}:?[0-9]{0,2}? ?(am|pm|gmt))?$/i,
  parse: (e, t) => {
    let a = parseInt(t[1], 10) - 1,
        n = parseInt(t[2], 10);
    (e.british || a >= 12) && (n = parseInt(t[1], 10), a = parseInt(t[2], 10) - 1);
    let r = {
      date: n,
      month: a,
      year: W(t[3], e._today) || new Date().getFullYear()
    };
    return !1 === U(r) ? (e.epoch = null, e) : (x(e, r), e = V(e, t[4]));
  }
}, {
  reg: /^([a-z]+)[\-\/\. ]([0-9]{1,2})[\-\/\. ]?([0-9]{4}|'[0-9]{2})?( [0-9]{1,2}(:[0-9]{0,2})?(:[0-9]{0,3})? ?(am|pm)?)?$/i,
  parse: (e, t) => {
    let a = {
      year: W(t[3], e._today),
      month: J(t[1]),
      date: E.toCardinal(t[2] || "")
    };
    return !1 === U(a) ? (e.epoch = null, e) : (x(e, a), e = V(e, t[4]));
  }
}, {
  reg: /^([a-z]+) ([0-9]{1,2})( [0-9]{4})?( ([0-9:]+( ?am| ?pm| ?gmt)?))?$/i,
  parse: (e, t) => {
    let a = {
      year: W(t[3], e._today),
      month: J(t[1]),
      date: E.toCardinal(t[2] || "")
    };
    return !1 === U(a) ? (e.epoch = null, e) : (x(e, a), e = V(e, t[4]));
  }
}, {
  reg: /^([a-z]+) ([0-9]{1,2})( [0-9:]+)?( \+[0-9]{4})?( [0-9]{4})?$/i,
  parse: (e, t) => {
    let a = {
      year: W(t[5], e._today),
      month: J(t[1]),
      date: E.toCardinal(t[2] || "")
    };
    return !1 === U(a) ? (e.epoch = null, e) : (x(e, a), e = V(e, t[3]));
  }
}];
const {
  validate: R,
  parseTime: X,
  parseYear: ee,
  parseMonth: te
} = L;
var ae = [{
  reg: /^([0-9]{1,2})[\-\/]([a-z]+)[\-\/]?([0-9]{4})?$/i,
  parse: (e, t) => {
    let a = {
      year: ee(t[3], e._today),
      month: te(t[2]),
      date: E.toCardinal(t[1] || "")
    };
    return !1 === R(a) ? (e.epoch = null, e) : (x(e, a), e = X(e, t[4]));
  }
}, {
  reg: /^([0-9]{1,2})( [a-z]+)( [0-9]{4}| '[0-9]{2})? ?([0-9]{1,2}:[0-9]{2}:?[0-9]{0,2}? ?(am|pm|gmt))?$/i,
  parse: (e, t) => {
    let a = {
      year: ee(t[3], e._today),
      month: te(t[2]),
      date: E.toCardinal(t[1])
    };
    return a.month && !1 !== R(a) ? (x(e, a), e = X(e, t[4])) : (e.epoch = null, e);
  }
}, {
  reg: /^([0-9]{1,2})[\. -/]([a-z]+)[\. -/]([0-9]{4})?( [0-9]{1,2}(:[0-9]{0,2})?(:[0-9]{0,3})? ?(am|pm)?)?$/i,
  parse: (e, t) => {
    let a = {
      date: Number(t[1]),
      month: te(t[2]),
      year: Number(t[3])
    };
    return !1 === R(a) ? (e.epoch = null, e) : (x(e, a), e = e.startOf("day"), e = X(e, t[4]));
  }
}];
const {
  validate: ne,
  parseTime: re,
  parseYear: oe,
  parseMonth: ie
} = L;
var se = [].concat(G, K, ae, [{
  reg: /^([0-9]{4})[\-\/]([0-9]{2})$/i,
  parse: (e, t) => {
    let a = {
      year: t[1],
      month: parseInt(t[2], 10) - 1,
      date: 1
    };
    return !1 === ne(a) ? (e.epoch = null, e) : (x(e, a), e = re(e, t[4]));
  }
}, {
  reg: /^([a-z]+) ([0-9]{4})$/i,
  parse: (e, t) => {
    let a = {
      year: oe(t[2], e._today),
      month: ie(t[1]),
      date: e._today.date || 1
    };
    return !1 === ne(a) ? (e.epoch = null, e) : (x(e, a), e = re(e, t[4]));
  }
}, {
  reg: /^(q[0-9])( of)?( [0-9]{4})?/i,
  parse: (e, t) => {
    let a = t[1] || "";
    e = e.quarter(a);
    let n = t[3] || "";
    return n && (n = n.trim(), e = e.year(n)), e;
  }
}, {
  reg: /^(spring|summer|winter|fall|autumn)( of)?( [0-9]{4})?/i,
  parse: (e, t) => {
    let a = t[1] || "";
    e = e.season(a);
    let n = t[3] || "";
    return n && (n = n.trim(), e = e.year(n)), e;
  }
}, {
  reg: /^[0-9,]+ ?b\.?c\.?$/i,
  parse: (e, t) => {
    let a = t[0] || "";
    a = a.replace(/^([0-9,]+) ?b\.?c\.?$/i, "-$1");
    let n = new Date(),
        r = {
      year: parseInt(a.trim(), 10),
      month: n.getMonth(),
      date: n.getDate()
    };
    return !1 === ne(r) ? (e.epoch = null, e) : (x(e, r), e = re(e));
  }
}, {
  reg: /^[0-9,]+ ?(a\.?d\.?|c\.?e\.?)$/i,
  parse: (e, t) => {
    let a = t[0] || "";
    a = a.replace(/,/g, "");
    let n = new Date(),
        r = {
      year: parseInt(a.trim(), 10),
      month: n.getMonth(),
      date: n.getDate()
    };
    return !1 === ne(r) ? (e.epoch = null, e) : (x(e, r), e = re(e));
  }
}, {
  reg: /^[0-9]{4}( ?a\.?d\.?)?$/i,
  parse: (e, t) => {
    let a = e._today;
    a.month && !a.date && (a.date = 1);
    let n = new Date(),
        r = {
      year: oe(t[0], a),
      month: a.month || n.getMonth(),
      date: a.date || n.getDate()
    };
    return !1 === ne(r) ? (e.epoch = null, e) : (x(e, r), e = re(e));
  }
}]);

var ue = w,
    le = _,
    he = j,
    ce = function (e, t, a) {
  for (let n = 0; n < se.length; n++) {
    let r = t.match(se[n].reg);

    if (r) {
      let t = se[n].parse(e, r, a);
      if (null !== t && t.isValid()) return t;
    }
  }

  return !1 === e.silent && console.warn("Warning: couldn't parse date-string: '" + t + "'"), e.epoch = null, e;
};

const {
  parseArray: de,
  parseObject: me,
  parseNumber: pe
} = ue,
      fe = {
  year: new Date().getFullYear(),
  month: 0,
  date: 1
};

var ye = (e, t) => {
  let a = e._today || fe;
  if ("number" == typeof t) return pe(e, t);

  if (e.epoch = Date.now(), e._today && E.isObject(e._today) && Object.keys(e._today).length > 0) {
    let t = me(e, a, fe);
    t.isValid() && (e.epoch = t.epoch);
  }

  return null == t || "" === t ? e : !0 === E.isDate(t) ? (e.epoch = t.getTime(), e) : !0 === E.isArray(t) ? e = de(e, t, a) : !0 === E.isObject(t) ? t.epoch ? (e.epoch = t.epoch, e.tz = t.tz, e) : e = me(e, t, a) : "string" != typeof t ? e : (t = he(t), !0 === le.hasOwnProperty(t) ? e = le[t](e) : ce(e, t));
};

let ge = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"],
    be = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
let ke = !0;

var we = {
  short: () => ge,
  long: () => be,
  set: e => {
    ge = e.short || ge, be = e.long || be;
  },
  aliases: {
    mo: 1,
    tu: 2,
    we: 3,
    th: 4,
    fr: 5,
    sa: 6,
    su: 7,
    tues: 2,
    weds: 3,
    wedn: 3,
    thur: 4,
    thurs: 4
  }
},
    ve = {
  useTitleCase: () => ke,
  set: e => {
    ke = e;
  }
},
    ze = e => {
  let t = e.timezone().current.offset;
  return t ? E.formatTimezone(t, ":") : "Z";
};

const _e = e => ve.useTitleCase() ? E.titleCase(e) : e,
      je = {
  day: e => _e(e.dayName()),
  "day-short": e => _e(we.short()[e.day()]),
  "day-number": e => e.day(),
  "day-ordinal": e => E.ordinal(e.day()),
  "day-pad": e => E.zeroPad(e.day()),
  date: e => e.date(),
  "date-ordinal": e => E.ordinal(e.date()),
  "date-pad": e => E.zeroPad(e.date()),
  month: e => _e(e.monthName()),
  "month-short": e => _e(N.short()[e.month()]),
  "month-number": e => e.month(),
  "month-ordinal": e => E.ordinal(e.month()),
  "month-pad": e => E.zeroPad(e.month()),
  "iso-month": e => E.zeroPad(e.month() + 1),
  year: e => {
    let t = e.year();
    return t > 0 ? t : (t = Math.abs(t), t + " BC");
  },
  "year-short": e => {
    let t = e.year();
    return t > 0 ? "'" + String(e.year()).substr(2, 4) : (t = Math.abs(t), t + " BC");
  },
  "iso-year": e => {
    let t = e.year(),
        a = t < 0,
        n = E.zeroPad(Math.abs(t), 4);
    return a && (n = E.zeroPad(n, 6), n = "-" + n), n;
  },
  time: e => e.time(),
  "time-24": e => "".concat(e.hour24(), ":").concat(E.zeroPad(e.minute())),
  hour: e => e.hour12(),
  "hour-pad": e => E.zeroPad(e.hour12()),
  "hour-24": e => e.hour24(),
  "hour-24-pad": e => E.zeroPad(e.hour24()),
  minute: e => e.minute(),
  "minute-pad": e => E.zeroPad(e.minute()),
  second: e => e.second(),
  "second-pad": e => E.zeroPad(e.second()),
  millisecond: e => e.millisecond(),
  "millisecond-pad": e => E.zeroPad(e.millisecond(), 3),
  ampm: e => e.ampm(),
  quarter: e => "Q" + e.quarter(),
  season: e => e.season(),
  era: e => e.era(),
  json: e => e.json(),
  timezone: e => e.timezone().name,
  offset: e => ze(e),
  numeric: e => "".concat(e.year(), "/").concat(E.zeroPad(e.month() + 1), "/").concat(E.zeroPad(e.date())),
  "numeric-us": e => "".concat(E.zeroPad(e.month() + 1), "/").concat(E.zeroPad(e.date()), "/").concat(e.year()),
  "numeric-uk": e => "".concat(E.zeroPad(e.date()), "/").concat(E.zeroPad(e.month() + 1), "/").concat(e.year()),
  "mm/dd": e => "".concat(E.zeroPad(e.month() + 1), "/").concat(E.zeroPad(e.date())),
  iso: e => "".concat(e.format("iso-year"), "-").concat(E.zeroPad(e.month() + 1), "-").concat(E.zeroPad(e.date()), "T").concat(E.zeroPad(e.h24()), ":").concat(E.zeroPad(e.minute()), ":").concat(E.zeroPad(e.second()), ".").concat(E.zeroPad(e.millisecond(), 3)).concat(ze(e)),
  "iso-short": e => {
    let t = E.zeroPad(e.month() + 1),
        a = E.zeroPad(e.date());
    var n;
    return "".concat((n = e.year()) >= 0 ? E.zeroPad(n, 4) : (n = Math.abs(n), "-" + E.zeroPad(n, 4)), "-").concat(t, "-").concat(a);
  },
  "iso-utc": e => new Date(e.epoch).toISOString(),
  nice: e => "".concat(N.short()[e.month()], " ").concat(E.ordinal(e.date()), ", ").concat(e.time()),
  "nice-24": e => "".concat(N.short()[e.month()], " ").concat(E.ordinal(e.date()), ", ").concat(e.hour24(), ":").concat(E.zeroPad(e.minute())),
  "nice-year": e => "".concat(N.short()[e.month()], " ").concat(E.ordinal(e.date()), ", ").concat(e.year()),
  "nice-day": e => "".concat(we.short()[e.day()], " ").concat(_e(N.short()[e.month()]), " ").concat(E.ordinal(e.date())),
  "nice-full": e => "".concat(e.dayName(), " ").concat(_e(e.monthName()), " ").concat(E.ordinal(e.date()), ", ").concat(e.time()),
  "nice-full-24": e => "".concat(e.dayName(), " ").concat(_e(e.monthName()), " ").concat(E.ordinal(e.date()), ", ").concat(e.hour24(), ":").concat(E.zeroPad(e.minute()))
},
      Oe = {
  "day-name": "day",
  "month-name": "month",
  "iso 8601": "iso",
  "time-h24": "time-24",
  "time-12": "time",
  "time-h12": "time",
  tz: "timezone",
  "day-num": "day-number",
  "month-num": "month-number",
  "month-iso": "iso-month",
  "year-iso": "iso-year",
  "nice-short": "nice",
  "nice-short-24": "nice-24",
  mdy: "numeric-us",
  dmy: "numeric-uk",
  ymd: "numeric",
  "yyyy/mm/dd": "numeric",
  "mm/dd/yyyy": "numeric-us",
  "dd/mm/yyyy": "numeric-us",
  "little-endian": "numeric-uk",
  "big-endian": "numeric",
  "day-nice": "nice-day"
};

Object.keys(Oe).forEach(e => je[e] = je[Oe[e]]);

var $e = function (e) {
  let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  if (!0 !== e.isValid()) return "";

  if (je.hasOwnProperty(t)) {
    let a = je[t](e) || "";
    return "json" !== t && (a = String(a), "ampm" !== t && (a = _e(a))), a;
  }

  if (-1 !== t.indexOf("{")) {
    let a = /\{(.+?)\}/g;
    return t = t.replace(a, (t, a) => {
      if (a = a.toLowerCase().trim(), je.hasOwnProperty(a)) {
        let t = String(je[a](e));
        return "ampm" !== a ? _e(t) : t;
      }

      return "";
    });
  }

  return e.format("iso-short");
};

const De = E.zeroPad,
      Me = E.formatTimezone,
      Pe = {
  G: e => e.era(),
  GG: e => e.era(),
  GGG: e => e.era(),
  GGGG: e => "AD" === e.era() ? "Anno Domini" : "Before Christ",
  y: e => e.year(),
  yy: e => parseInt(String(e.year()).substr(2, 4), 10),
  yyy: e => e.year(),
  yyyy: e => e.year(),
  yyyyy: e => "0" + e.year(),
  Q: e => e.quarter(),
  QQ: e => e.quarter(),
  QQQ: e => e.quarter(),
  QQQQ: e => e.quarter(),
  M: e => e.month() + 1,
  MM: e => De(e.month() + 1),
  MMM: e => e.format("month-short"),
  MMMM: e => e.format("month"),
  w: e => e.week(),
  ww: e => De(e.week()),
  d: e => e.date(),
  dd: e => De(e.date()),
  D: e => e.dayOfYear(),
  DD: e => De(e.dayOfYear()),
  DDD: e => De(e.dayOfYear(), 3),
  E: e => e.format("day-short"),
  EE: e => e.format("day-short"),
  EEE: e => e.format("day-short"),
  EEEE: e => e.format("day"),
  EEEEE: e => e.format("day")[0],
  e: e => e.day(),
  ee: e => e.day(),
  eee: e => e.format("day-short"),
  eeee: e => e.format("day"),
  eeeee: e => e.format("day")[0],
  a: e => e.ampm().toUpperCase(),
  aa: e => e.ampm().toUpperCase(),
  aaa: e => e.ampm().toUpperCase(),
  aaaa: e => e.ampm().toUpperCase(),
  h: e => e.h12(),
  hh: e => De(e.h12()),
  H: e => e.hour(),
  HH: e => De(e.hour()),
  m: e => e.minute(),
  mm: e => De(e.minute()),
  s: e => e.second(),
  ss: e => De(e.second()),
  SSS: e => De(e.millisecond(), 3),
  A: e => e.epoch - e.startOf("day").epoch,
  z: e => e.timezone().name,
  zz: e => e.timezone().name,
  zzz: e => e.timezone().name,
  zzzz: e => e.timezone().name,
  Z: e => Me(e.timezone().current.offset),
  ZZ: e => Me(e.timezone().current.offset),
  ZZZ: e => Me(e.timezone().current.offset),
  ZZZZ: e => Me(e.timezone().current.offset, ":")
},
      Se = (e, t, a) => {
  let n = e,
      r = t;

  for (let o = 0; o < a; o += 1) Pe[n] = Pe[r], n += e, r += t;
};

Se("q", "Q", 4), Se("L", "M", 4), Se("Y", "y", 4), Se("c", "e", 4), Se("k", "H", 2), Se("K", "h", 2), Se("S", "s", 2), Se("v", "z", 4), Se("V", "Z", 4);

var qe = (e, t) => {
  let a = t.split("");
  return a = function (e) {
    for (let t = 0; t < e.length; t += 1) if ("'" === e[t]) for (let a = t + 1; a < e.length; a += 1) {
      if (e[a] && (e[t] += e[a]), "'" === e[a]) {
        e[a] = null;
        break;
      }

      e[a] = null;
    }

    return e.filter(e => e);
  }(a), a = function (e) {
    for (let t = 0; t < e.length; t += 1) {
      let a = e[t];

      for (let n = t + 1; n < e.length && e[n] === a; n += 1) e[t] += e[n], e[n] = null;
    }

    return (e = e.filter(e => e)).map(e => ("''" === e && (e = "'"), e));
  }(a), a.reduce((t, a) => (void 0 !== Pe[a] ? t += Pe[a](e) || "" : (/^'.{1,}'$/.test(a) && (a = a.replace(/'/g, "")), t += a), t), "");
};

const Te = ["year", "season", "quarter", "month", "week", "day", "quarterHour", "hour", "minute"],
      Ee = function (e, t) {
  let a = e.clone().startOf(t),
      n = e.clone().endOf(t).epoch - a.epoch,
      r = (e.epoch - a.epoch) / n;
  return parseFloat(r.toFixed(2));
};

var Ne = (e, t) => {
  if (t) return t = E.normalize(t), Ee(e, t);
  let a = {};
  return Te.forEach(t => {
    a[t] = Ee(e, t);
  }), a;
};

var Ce = (e, t) => {
  let a = e.progress();
  return "quarterhour" === (t = E.normalize(t)) && (t = "quarterHour"), void 0 !== a[t] ? (a[t] > .5 && (e = e.add(1, t)), e = e.startOf(t)) : !1 === e.silent && console.warn("no known unit '" + t + "'"), e;
};

const Ie = (e, t, a) => {
  let n = 0;

  for (e = e.clone(); e.isBefore(t);) e = e.add(1, a), n += 1;

  return e.isAfter(t, a) && (n -= 1), n;
};

var Ye = (e, t, a) => e.isBefore(t) ? Ie(e, t, a) : -1 * Ie(t, e, a);

var Ae = function (e, t) {
  let a = t.epoch - e.epoch,
      n = {
    milliseconds: a,
    seconds: parseInt(a / 1e3, 10)
  };
  n.minutes = parseInt(n.seconds / 60, 10), n.hours = parseInt(n.minutes / 60, 10);
  let r = e.clone();
  return n.years = ((e, t) => {
    let a = t.year() - e.year();
    return (e = e.year(t.year())).isAfter(t) && (a -= 1), a;
  })(r, t), r = e.add(n.years, "year"), n.months = 12 * n.years, r = e.add(n.months, "month"), n.months += Ye(r, t, "month"), n.weeks = 52 * n.years, r = e.add(n.weeks, "week"), n.weeks += Ye(r, t, "week"), n.days = 7 * n.weeks, r = e.add(n.days, "day"), n.days += Ye(r, t, "day"), n;
};

var xe = function (e, t, a) {
  t = E.beADate(t, e);
  let n = !1;

  if (e.isAfter(t)) {
    let a = e;
    e = t, t = a, n = !0;
  }

  let r = Ae(e, t);
  return n && (r = function (e) {
    return Object.keys(e).forEach(t => {
      e[t] *= -1;
    }), e;
  }(r)), a ? (a = E.normalize(a), !0 !== /s$/.test(a) && (a += "s"), "dates" === a && (a = "days"), r[a]) : r;
};

const Le = {
  months: {
    almost: 10,
    over: 4
  },
  days: {
    almost: 25,
    over: 10
  },
  hours: {
    almost: 20,
    over: 8
  },
  minutes: {
    almost: 50,
    over: 20
  },
  seconds: {
    almost: 50,
    over: 20
  }
};

function Fe(e, t) {
  return 1 === e && (t = t.slice(0, -1)), e + " " + t;
}

var Be = (e, t) => {
  const a = function (e, t) {
    const a = e.isBefore(t),
          n = a ? t : e;
    let r = a ? e : t;
    r = r.clone();
    const o = {
      years: 0,
      months: 0,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };
    return Object.keys(o).forEach(e => {
      if (r.isSame(n, e)) return;
      let t = r.diff(n, e);
      r = r.add(t, e), o[e] = t;
    }), a && Object.keys(o).forEach(e => {
      0 !== o[e] && (o[e] *= -1);
    }), o;
  }(e, t = E.beADate(t, e));

  if (!0 === Object.keys(a).every(e => !a[e])) return {
    diff: a,
    rounded: "now",
    qualified: "now",
    precise: "now"
  };
  let n,
      r,
      o,
      i = [];
  return Object.keys(a).forEach((e, t, o) => {
    const s = Math.abs(a[e]);
    if (0 === s) return;
    const u = Fe(s, e);

    if (i.push(u), !n) {
      if (n = r = u, t > 4) return;
      const i = o[t + 1],
            l = Math.abs(a[i]);
      l > Le[i].almost ? (n = Fe(s + 1, e), r = "almost " + n) : l > Le[i].over && (r = "over " + u);
    }
  }), o = i.splice(0, 2).join(", "), !0 === e.isAfter(t) ? (n += " ago", r += " ago", o += " ago") : (n = "in " + n, r = "in " + r, o = "in " + o), {
    diff: a,
    rounded: n,
    qualified: r,
    precise: o
  };
},
    Ze = {
  north: [["spring", 2, 1], ["summer", 5, 1], ["fall", 8, 1], ["autumn", 8, 1], ["winter", 11, 1]],
  south: [["fall", 2, 1], ["autumn", 2, 1], ["winter", 5, 1], ["spring", 8, 1], ["summer", 11, 1]]
},
    He = [null, [0, 1], [3, 1], [6, 1], [9, 1]];

const Qe = {
  minute: e => (x(e, {
    second: 0,
    millisecond: 0
  }), e),
  quarterhour: e => {
    let t = e.minutes();
    return e = t >= 45 ? e.minutes(45) : t >= 30 ? e.minutes(30) : t >= 15 ? e.minutes(15) : e.minutes(0), x(e, {
      second: 0,
      millisecond: 0
    }), e;
  },
  hour: e => (x(e, {
    minute: 0,
    second: 0,
    millisecond: 0
  }), e),
  day: e => (x(e, {
    hour: 0,
    minute: 0,
    second: 0,
    millisecond: 0
  }), e),
  week: e => {
    let t = e.clone();
    return (e = e.day(e._weekStart)).isAfter(t) && (e = e.subtract(1, "week")), x(e, {
      hour: 0,
      minute: 0,
      second: 0,
      millisecond: 0
    }), e;
  },
  month: e => (x(e, {
    date: 1,
    hour: 0,
    minute: 0,
    second: 0,
    millisecond: 0
  }), e),
  quarter: e => {
    let t = e.quarter();
    return He[t] && x(e, {
      month: He[t][0],
      date: He[t][1],
      hour: 0,
      minute: 0,
      second: 0,
      millisecond: 0
    }), e;
  },
  season: e => {
    let t = e.season(),
        a = "north";
    "South" === e.hemisphere() && (a = "south");

    for (let n = 0; n < Ze[a].length; n++) if (Ze[a][n][0] === t) {
      let r = e.year();
      return "winter" === t && e.month() < 3 && (r -= 1), x(e, {
        year: r,
        month: Ze[a][n][1],
        date: Ze[a][n][2],
        hour: 0,
        minute: 0,
        second: 0,
        millisecond: 0
      }), e;
    }

    return e;
  },
  year: e => (x(e, {
    month: 0,
    date: 1,
    hour: 0,
    minute: 0,
    second: 0,
    millisecond: 0
  }), e),
  decade: e => {
    let t = (e = e.startOf("year")).year(),
        a = 10 * parseInt(t / 10, 10);
    return e = e.year(a);
  },
  century: e => {
    let t = (e = e.startOf("year")).year(),
        a = 100 * parseInt(t / 100, 10);
    return e = e.year(a);
  }
};
Qe.date = Qe.day;
var Ge = g;

var Ue = $e,
    Ve = qe,
    We = Ne,
    Je = Ce,
    Ke = xe,
    Re = Be,
    Xe = {
  startOf: (e, t) => {
    let a = e.clone();
    return t = E.normalize(t), Qe[t] ? Qe[t](a) : "summer" === t || "winter" === t ? (a = a.season(t), Qe.season(a)) : a;
  },
  endOf: (e, t) => {
    let a = e.clone();
    return t = E.normalize(t), Qe[t] ? (a = Qe[t](a), a = a.add(1, t), a = a.subtract(1, "millisecond"), a) : a;
  }
},
    et = function (e) {
  let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  let a = arguments.length > 2 ? arguments[2] : undefined;
  if (!t || !a) return [];

  if (t = E.normalize(t), a = e.clone().set(a), e.isAfter(a)) {
    let t = e;
    e = a, a = t;
  }

  let n = e.clone();
  !function (e) {
    return !!we.short().find(t => t === e) || !!we.long().find(t => t === e);
  }(t) ? n = n.next(t) : (n = n.next(t), t = "week");
  let r = [];

  for (; n.isBefore(a);) r.push(n), n = n.add(1, t);

  return r;
},
    tt = e => {
  let a = e.timezones,
      n = e.tz;
  if (!1 === a.hasOwnProperty(n) && (n = Ge(e.tz, a)), null === n) return !1 === e.silent && console.warn("Warn: could not find given or local timezone - '" + e.tz + "'"), {
    current: {
      epochShift: 0
    }
  };
  let r = a[n],
      o = {
    name: (i = n, i = (i = (i = i[0].toUpperCase() + i.substr(1)).replace(/\/gmt/, "/GMT")).replace(/[\/_]([a-z])/gi, e => e.toUpperCase())),
    hasDst: Boolean(r.dst),
    default_offset: r.offset,
    hemisphere: "s" === r.hem ? "South" : "North",
    current: {}
  };
  var i, s;

  if (o.hasDst) {
    let e = (s = r.dst) ? s.split("->") : [];
    o.change = {
      start: e[0],
      back: e[1]
    };
  }

  let u = r.offset,
      l = u;
  return !0 === o.hasDst && (l = "North" === o.hemisphere ? u - 1 : r.offset + 1), !1 === o.hasDst ? (o.current.offset = u, o.current.isDST = !1) : !0 === t(e.epoch, o.change.start, o.change.back, u, l) ? (o.current.offset = u, o.current.isDST = "North" === o.hemisphere) : (o.current.offset = l, o.current.isDST = "South" === o.hemisphere), o;
},
    at = ye;

const nt = ["century", "decade", "year", "month", "date", "day", "hour", "minute", "second", "millisecond"],
      rt = {
  set: function (e, t) {
    let a = this.clone();
    return a = at(a, e), t && (this.tz = Ge(t)), a;
  },
  timezone: function () {
    return tt(this);
  },
  isDST: function () {
    return tt(this).current.isDST;
  },
  hasDST: function () {
    return tt(this).hasDst;
  },
  offset: function () {
    return 60 * tt(this).current.offset;
  },
  hemisphere: function () {
    return tt(this).hemisphere;
  },
  format: function (e) {
    return Ue(this, e);
  },
  unixFmt: function (e) {
    return Ve(this, e);
  },
  startOf: function (e) {
    return Xe.startOf(this, e);
  },
  endOf: function (e) {
    return Xe.endOf(this, e);
  },
  leapYear: function () {
    let e = this.year();
    return E.isLeapYear(e);
  },
  progress: function (e) {
    return We(this, e);
  },
  nearest: function (e) {
    return Je(this, e);
  },
  diff: function (e, t) {
    return Ke(this, e, t);
  },
  since: function (e) {
    return e || (e = this.clone().set()), Re(this, e);
  },
  next: function (e) {
    return this.add(1, e).startOf(e);
  },
  last: function (e) {
    return this.subtract(1, e).startOf(e);
  },
  isValid: function () {
    return !(!this.epoch && 0 !== this.epoch) && !isNaN(this.d.getTime());
  },
  goto: function (e) {
    let t = this.clone();
    return t.tz = Ge(e, t.timezones), t;
  },
  every: function (e, t) {
    if ("object" == typeof e && "string" == typeof t) {
      let a = t;
      t = e, e = a;
    }

    return et(this, e, t);
  },
  isAwake: function () {
    let e = this.hour();
    return !(e < 8 || e > 22);
  },
  isAsleep: function () {
    return !this.isAwake();
  },
  daysInMonth: function () {
    switch (this.month()) {
      case 0:
        return 31;

      case 1:
        return this.leapYear() ? 29 : 28;

      case 2:
        return 31;

      case 3:
        return 30;

      case 4:
        return 31;

      case 5:
        return 30;

      case 6:
      case 7:
        return 31;

      case 8:
        return 30;

      case 9:
        return 31;

      case 10:
        return 30;

      case 11:
        return 31;

      default:
        throw new Error("Invalid Month state.");
    }
  },
  log: function () {
    return console.log(""), console.log(Ue(this, "nice-short")), this;
  },
  logYear: function () {
    return console.log(""), console.log(Ue(this, "full-short")), this;
  },
  json: function () {
    return nt.reduce((e, t) => (e[t] = this[t](), e), {});
  },
  debug: function () {
    let e = this.timezone(),
        t = this.format("MM") + " " + this.format("date-ordinal") + " " + this.year();
    return t += "\n     - " + this.format("time"), console.log("\n\n", t + "\n     - " + e.name + " (" + e.current.offset + ")"), this;
  },
  from: function (e) {
    return (e = this.clone().set(e)).since(this);
  },
  fromNow: function () {
    return this.clone().set(Date.now()).since(this);
  },
  weekStart: function (e) {
    if ("number" == typeof e) return this._weekStart = e, this;

    if ("string" == typeof e) {
      e = e.toLowerCase().trim();
      let t = we.short().indexOf(e);
      -1 === t && (t = we.long().indexOf(e)), -1 === t && (t = 1), this._weekStart = t;
    } else console.warn("Spacetime Error: Cannot understand .weekStart() input:", e);

    return this;
  }
};
rt.inDST = rt.isDST, rt.round = rt.nearest, rt.each = rt.every;
var ot = rt;

const it = E.isLeapYear,
      st = e => ("string" == typeof e && (e = parseInt(e, 10)), e),
      ut = ["year", "month", "date", "hour", "minute", "second", "millisecond"],
      lt = (e, t, a) => {
  let n = ut.indexOf(a),
      r = ut.slice(n, ut.length);

  for (let a = 0; a < r.length; a++) {
    let n = t[r[a]]();
    e[r[a]](n);
  }

  return e;
},
      ht = function (e, t, a, n) {
  return !0 === a && e.isBefore(t) ? e = e.add(1, n) : !1 === a && e.isAfter(t) && (e = e.minus(1, n)), e;
};

var ct = {
  milliseconds: (e, t) => {
    t = st(t);
    let a = e.millisecond() - t;
    return e.epoch - a;
  },
  seconds: (e, t, a) => {
    t = st(t);
    let n = e.clone(),
        r = (e.second() - t) * $.second;
    return e.epoch = e.epoch - r, (e = ht(e, n, a, "minute")).epoch;
  },
  minutes: (e, t, a) => {
    t = st(t);
    let n = e.clone(),
        r = (e.minute() - t) * $.minute;
    return e.epoch -= r, lt(e, n, "second"), (e = ht(e, n, a, "hour")).epoch;
  },
  hours: (e, t, a) => {
    (t = st(t)) >= 24 ? t = 24 : t < 0 && (t = 0);
    let n = e.clone(),
        r = e.hour() - t,
        o = r * $.hour;
    return e.epoch -= o, e.date() !== n.date() && (e = n.clone(), r > 1 && (r -= 1), r < 1 && (r += 1), o = r * $.hour, e.epoch -= o), x(e, {
      hour: t
    }), lt(e, n, "minute"), (e = ht(e, n, a, "day")).epoch;
  },
  time: (e, t, a) => {
    let n = t.match(/([0-9]{1,2})[:h]([0-9]{1,2})(:[0-9]{1,2})? ?(am|pm)?/);

    if (!n) {
      if (n = t.match(/([0-9]{1,2}) ?(am|pm)/), !n) return e.epoch;
      n.splice(2, 0, "0"), n.splice(3, 0, "");
    }

    let r = !1,
        o = parseInt(n[1], 10),
        i = parseInt(n[2], 10);
    i >= 60 && (i = 59), o > 12 && (r = !0), !1 === r && ("am" === n[4] && 12 === o && (o = 0), "pm" === n[4] && o < 12 && (o += 12)), n[3] = n[3] || "", n[3] = n[3].replace(/:/, "");
    let s = parseInt(n[3], 10) || 0,
        u = e.clone();
    return e = (e = (e = (e = e.hour(o)).minute(i)).second(s)).millisecond(0), (e = ht(e, u, a, "day")).epoch;
  },
  date: (e, t, a) => {
    if ((t = st(t)) > 28) {
      let a = e.month(),
          n = T[a];
      1 === a && 29 === t && it(e.year()) && (n = 29), t > n && (t = n);
    }

    t <= 0 && (t = 1);
    let n = e.clone();
    return x(e, {
      date: t
    }), (e = ht(e, n, a, "month")).epoch;
  },
  month: (e, t, a) => {
    "string" == typeof t && (t = N.mapping()[t.toLowerCase()]), (t = st(t)) >= 12 && (t = 11), t <= 0 && (t = 0);
    let n = e.date();
    n > T[t] && (n = T[t]);
    let r = e.clone();
    return x(e, {
      month: t,
      date: n
    }), (e = ht(e, r, a, "year")).epoch;
  },
  year: (e, t) => ("string" == typeof t && /^'[0-9]{2}$/.test(t) && (t = t.replace(/'/, "").trim(), t = (t = Number(t)) > 30 ? 1900 + t : 2e3 + t), t = st(t), x(e, {
    year: t
  }), e.epoch),
  week: (e, t, a) => {
    let n = e.clone();
    return t = st(t), "december" === (e = (e = (e = e.month(0)).date(1)).day("monday")).monthName() && e.date() >= 28 && (e = e.add(1, "week")), t -= 1, e = e.add(t, "weeks"), (e = ht(e, n, a, "year")).epoch;
  },
  dayOfYear: (e, t, a) => {
    t = st(t);
    let n = e.clone();
    return (t -= 1) <= 0 ? t = 0 : t >= 365 && (t = 364), e = (e = e.startOf("year")).add(t, "day"), lt(e, n, "hour"), (e = ht(e, n, a, "year")).epoch;
  }
};

const dt = e => e = (e = (e = e.minute(0)).second(0)).millisecond(1);

var mt = {
  millisecond: function (e) {
    if (void 0 !== e) {
      let t = this.clone();
      return t.epoch = ct.milliseconds(t, e), t;
    }

    return this.d.getMilliseconds();
  },
  second: function (e, t) {
    if (void 0 !== e) {
      let a = this.clone();
      return a.epoch = ct.seconds(a, e, t), a;
    }

    return this.d.getSeconds();
  },
  minute: function (e, t) {
    if (void 0 !== e) {
      let a = this.clone();
      return a.epoch = ct.minutes(a, e, t), a;
    }

    return this.d.getMinutes();
  },
  hour: function (e, t) {
    let a = this.d;

    if (void 0 !== e) {
      let a = this.clone();
      return a.epoch = ct.hours(a, e, t), a;
    }

    return a.getHours();
  },
  hourFloat: function (e, t) {
    if (void 0 !== e) {
      let a = this.clone(),
          n = e % 1;
      n *= 60;
      let r = parseInt(e, 10);
      return a.epoch = ct.hours(a, r, t), a.epoch = ct.minutes(a, n, t), a;
    }

    let a = this.d,
        n = a.getHours(),
        r = a.getMinutes();
    return r /= 60, n + r;
  },
  hour12: function (e, t) {
    let a = this.d;

    if (void 0 !== e) {
      let a = this.clone(),
          n = (e = "" + e).match(/^([0-9]+)(am|pm)$/);

      if (n) {
        let e = parseInt(n[1], 10);
        "pm" === n[2] && (e += 12), a.epoch = ct.hours(a, e, t);
      }

      return a;
    }

    let n = a.getHours();
    return n > 12 && (n -= 12), 0 === n && (n = 12), n;
  },
  time: function (e, t) {
    if (void 0 !== e) {
      let a = this.clone();
      return e = e.toLowerCase().trim(), a.epoch = ct.time(a, e, t), a;
    }

    return "".concat(this.h12(), ":").concat(E.zeroPad(this.minute())).concat(this.ampm());
  },
  ampm: function (e, t) {
    let a = "am",
        n = this.hour();
    if (n >= 12 && (a = "pm"), "string" != typeof e) return a;
    let r = this.clone();
    return e = e.toLowerCase().trim(), n >= 12 && "am" === e ? (n -= 12, r.hour(n, t)) : n < 12 && "pm" === e ? (n += 12, r.hour(n, t)) : r;
  },
  dayTime: function (e, t) {
    if (void 0 !== e) {
      const a = {
        morning: "7:00am",
        breakfast: "7:00am",
        noon: "12:00am",
        lunch: "12:00pm",
        afternoon: "2:00pm",
        evening: "6:00pm",
        dinner: "6:00pm",
        night: "11:00pm",
        midnight: "23:59pm"
      };
      let n = this.clone();
      return e = (e = e || "").toLowerCase(), !0 === a.hasOwnProperty(e) && (n = n.time(a[e], t)), n;
    }

    let a = this.hour();
    return a < 6 ? "night" : a < 12 ? "morning" : a < 17 ? "afternoon" : a < 22 ? "evening" : "night";
  },
  iso: function (e) {
    return void 0 !== e ? this.set(e) : this.format("iso");
  }
},
    pt = {
  date: function (e, t) {
    if (void 0 !== e) {
      let a = this.clone();
      return (e = parseInt(e, 10)) && (a.epoch = ct.date(a, e, t)), a;
    }

    return this.d.getDate();
  },
  day: function (e, t) {
    if (void 0 === e) return this.d.getDay();
    let a = this.clone(),
        n = e;
    "string" == typeof e && (e = e.toLowerCase(), we.aliases.hasOwnProperty(e) ? n = we.aliases[e] : (n = we.short().indexOf(e), -1 === n && (n = we.long().indexOf(e))));
    let r = this.d.getDay() - n;
    !0 === t && r > 0 && (r -= 7), !1 === t && r < 0 && (r += 7);
    let o = this.subtract(r, "days");
    return x(o, {
      hour: a.hour(),
      minute: a.minute(),
      second: a.second()
    }), o;
  },
  dayName: function (e, t) {
    if (void 0 === e) return we.long()[this.day()];
    let a = this.clone();
    return a = a.day(e, t), a;
  }
},
    ft = {
  dayOfYear: function (e, t) {
    if (void 0 !== e) {
      let a = this.clone();
      return a.epoch = ct.dayOfYear(a, e, t), a;
    }

    let a,
        n = 0,
        r = this.d.getMonth();

    for (let e = 1; e <= r; e++) a = new Date(), a.setDate(1), a.setFullYear(this.d.getFullYear()), a.setHours(1), a.setMinutes(1), a.setMonth(e), a.setHours(-2), n += a.getDate();

    return n + this.d.getDate();
  },
  week: function (e, t) {
    if (void 0 !== e) {
      let a = this.clone();
      return a.epoch = ct.week(this, e, t), a = dt(a), a;
    }

    let a = this.clone();
    a = a.month(0), a = a.date(1), a = dt(a), a = a.day("monday"), "december" === a.monthName() && a.date() >= 28 && (a = a.add(1, "week"));
    let n = 1;
    1 === a.date() && (n = 0), a = a.minus(1, "second");
    const r = this.epoch;
    if (a.epoch > r) return 1;
    let o = 0,
        i = 4 * this.month();

    for (a.epoch += $.week * i, o += i; o <= 52; o++) {
      if (a.epoch > r) return o + n;
      a = a.add(1, "week");
    }

    return 52;
  },
  month: function (e, t) {
    if (void 0 !== e) {
      let a = this.clone();
      return a.epoch = ct.month(a, e, t), a;
    }

    return this.d.getMonth();
  },
  monthName: function (e, t) {
    if (void 0 !== e) {
      let a = this.clone();
      return a = a.month(e, t), a;
    }

    return N.long()[this.month()];
  },
  quarter: function (e, t) {
    if (void 0 !== e && ("string" == typeof e && (e = e.replace(/^q/i, ""), e = parseInt(e, 10)), He[e])) {
      let a = this.clone(),
          n = He[e][0];
      return a = a.month(n, t), a = a.date(1, t), a = a.startOf("day"), a;
    }

    let a = this.d.getMonth();

    for (let e = 1; e < He.length; e++) if (a < He[e][0]) return e - 1;

    return 4;
  },
  season: function (e, t) {
    let a = "north";

    if ("South" === this.hemisphere() && (a = "south"), void 0 !== e) {
      let n = this.clone();

      for (let r = 0; r < Ze[a].length; r++) e === Ze[a][r][0] && (n = n.month(Ze[a][r][1], t), n = n.date(1), n = n.startOf("day"));

      return n;
    }

    let n = this.d.getMonth();

    for (let e = 0; e < Ze[a].length - 1; e++) if (n >= Ze[a][e][1] && n < Ze[a][e + 1][1]) return Ze[a][e][0];

    return "winter";
  },
  year: function (e) {
    if (void 0 !== e) {
      let t = this.clone();
      return t.epoch = ct.year(t, e), t;
    }

    return this.d.getFullYear();
  },
  era: function (e) {
    if (void 0 !== e) {
      let t = this.clone();
      e = e.toLowerCase();
      let a = t.d.getFullYear();
      return "bc" === e && a > 0 && (t.epoch = ct.year(t, -1 * a)), "ad" === e && a < 0 && (t.epoch = ct.year(t, -1 * a)), t;
    }

    return this.d.getFullYear() < 0 ? "BC" : "AD";
  },
  decade: function (e) {
    if (void 0 !== e) {
      if (!(e = (e = (e = String(e)).replace(/([0-9])'?s$/, "$1")).replace(/([0-9])(th|rd|st|nd)/, "$1"))) return console.warn("Spacetime: Invalid decade input"), this;
      2 === e.length && /[0-9][0-9]/.test(e) && (e = "19" + e);
      let t = Number(e);
      return isNaN(t) ? this : (t = 10 * Math.floor(t / 10), this.year(t));
    }

    return this.startOf("decade").year();
  },
  century: function (e) {
    if (void 0 !== e) {
      "string" == typeof e && (e = (e = (e = e.replace(/([0-9])(th|rd|st|nd)/, "$1")).replace(/([0-9]+) ?(b\.?c\.?|a\.?d\.?)/i, (e, t, a) => (a.match(/b\.?c\.?/i) && (t = "-" + t), t))).replace(/c$/, ""));
      let t = Number(e);
      return isNaN(e) ? (console.warn("Spacetime: Invalid century input"), this) : (0 === t && (t = 1), t = t >= 0 ? 100 * (t - 1) : 100 * (t + 1), this.year(t));
    }

    let t = this.startOf("century").year();
    return t = Math.floor(t / 100), t < 0 ? t - 1 : t + 1;
  },
  millenium: function (e) {
    if (void 0 !== e) {
      if ("string" == typeof e && (e = e.replace(/([0-9])(th|rd|st|nd)/, "$1"), e = Number(e), isNaN(e))) return console.warn("Spacetime: Invalid millenium input"), this;
      e > 0 && (e -= 1);
      let t = 1e3 * e;
      return 0 === t && (t = 1), this.year(t);
    }

    let t = Math.floor(this.year() / 1e3);
    return t >= 0 && (t += 1), t;
  }
};
const yt = Object.assign({}, mt, pt, ft);
yt.milliseconds = yt.millisecond, yt.seconds = yt.second, yt.minutes = yt.minute, yt.hours = yt.hour, yt.hour24 = yt.hour, yt.h12 = yt.hour12, yt.h24 = yt.hour24, yt.days = yt.day;

var gt = e => {
  Object.keys(yt).forEach(t => {
    e.prototype[t] = yt[t];
  });
};

const bt = E.isLeapYear,
      kt = function (e, t) {
  return 1 === e && bt(t) ? 29 : T[e];
};

var wt = {
  months: (e, t) => {
    if (e.month > 0) {
      let a = parseInt(e.month / 12, 10);
      e.year = t.year() + a, e.month = e.month % 12;
    } else if (e.month < 0) {
      let a = Math.floor(Math.abs(e.month) / 13, 10);
      a = Math.abs(a) + 1, e.year = t.year() - a, e.month = e.month % 12, e.month = e.month + 12, 12 === e.month && (e.month = 0);
    }

    return e;
  },
  days: (e, t, a) => {
    let n = t.year(),
        r = t.month(),
        o = kt(r, n);

    for (; a > o;) a -= o, r += 1, r >= 12 && (r -= 12, n += 1), o = kt(r, n);

    return e.month = r, e.date = a, e;
  },
  daysBack: (e, t, a) => {
    e.year = t.year(), e.month = t.month();
    let n = t.date();

    for (e.date = n - Math.abs(a); e.date < 1;) {
      e.month -= 1, e.month < 0 && (e.month = 11, e.year -= 1);
      let t = kt(e.month, e.year);
      e.date += t;
    }

    return e;
  }
};
const vt = ["millisecond", "second", "minute", "hour", "date", "month"];
let zt = {
  second: vt.slice(0, 1),
  minute: vt.slice(0, 2),
  quarterhour: vt.slice(0, 2),
  hour: vt.slice(0, 3),
  date: vt.slice(0, 4),
  month: vt.slice(0, 4),
  quarter: vt.slice(0, 4),
  season: vt.slice(0, 4),
  year: vt,
  decade: vt,
  century: vt
};
zt.week = zt.hour, zt.season = zt.date, zt.quarter = zt.date;
const _t = {
  year: !0,
  quarter: !0,
  season: !0,
  month: !0,
  week: !0,
  date: !0
},
      jt = {
  month: !0,
  quarter: !0,
  season: !0,
  year: !0
};

var Ot = e => {
  e.prototype.add = function (e, t) {
    let a = this.clone();
    if (!t || 0 === e) return a;
    let n = this.clone();
    if ("millisecond" === (t = E.normalize(t))) return a.epoch += e, a;
    "fortnight" === t && (e *= 2, t = "week"), $[t] ? a.epoch += $[t] * e : "week" === t || "weekend" === t ? a.epoch += $.day * (7 * e) : "quarter" === t || "season" === t ? a.epoch += $.month * (3 * e) : "quarterhour" === t && (a.epoch += 15 * $.minute * e);
    let r = {};

    if (zt[t] && zt[t].forEach(e => {
      r[e] = n[e]();
    }), _t[t]) {
      const e = n.timezone().current.offset - a.timezone().current.offset;
      a.epoch += 3600 * e * 1e3;
    }

    if ("month" === t && (r.month = n.month() + e, r = wt.months(r, n)), "week" === t) {
      let t = n.date() + 7 * e;
      t <= 28 && t > 1 && (r.date = t);
    }

    if ("weekend" === t && "saturday" !== a.dayName()) a = a.day("saturday", !0);else if ("date" === t) {
      if (e < 0) r = wt.daysBack(r, n, e);else {
        let t = n.date() + e;
        r = wt.days(r, n, t);
      }
      0 !== e && n.isSame(a, "day") && (r.date = n.date() + e);
    } else if ("quarter" === t) {
      if (r.month = n.month() + 3 * e, r.year = n.year(), r.month < 0) {
        let e = Math.floor(r.month / 12),
            t = r.month + 12 * Math.abs(e);
        r.month = t, r.year += e;
      } else if (r.month >= 12) {
        let e = Math.floor(r.month / 12);
        r.month = r.month % 12, r.year += e;
      }

      r.date = n.date();
    } else if ("year" === t) {
      let t = n.year() + e,
          r = a.year();

      if (r < t) {
        let t = Math.floor(e / 4) || 1;
        a.epoch += Math.abs($.day * t);
      } else if (r > t) {
        let t = Math.floor(e / 4) || 1;
        a.epoch += $.day * t;
      }
    } else "decade" === t ? r.year = a.year() + 10 : "century" === t && (r.year = a.year() + 100);

    if (jt[t]) {
      let e = T[r.month];
      r.date = n.date(), r.date > e && (r.date = e);
    }

    return Object.keys(r).length > 1 && x(a, r), a;
  }, e.prototype.subtract = function (e, t) {
    return this.clone().add(-1 * e, t);
  }, e.prototype.minus = e.prototype.subtract, e.prototype.plus = e.prototype.add;
};

const $t = {
  millisecond: e => e.epoch,
  second: e => [e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second()].join("-"),
  minute: e => [e.year(), e.month(), e.date(), e.hour(), e.minute()].join("-"),
  hour: e => [e.year(), e.month(), e.date(), e.hour()].join("-"),
  day: e => [e.year(), e.month(), e.date()].join("-"),
  week: e => [e.year(), e.week()].join("-"),
  month: e => [e.year(), e.month()].join("-"),
  quarter: e => [e.year(), e.quarter()].join("-"),
  year: e => e.year()
};
$t.date = $t.day;

var Dt = e => {
  const t = {
    isAfter: function (e) {
      e = E.beADate(e, this);
      let t = E.getEpoch(e);
      return null === t ? null : this.epoch > t;
    },
    isBefore: function (e) {
      e = E.beADate(e, this);
      let t = E.getEpoch(e);
      return null === t ? null : this.epoch < t;
    },
    isEqual: function (e) {
      e = E.beADate(e, this);
      let t = E.getEpoch(e);
      return null === t ? null : this.epoch === t;
    },
    isBetween: function (e, t) {
      let a = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
      e = E.beADate(e, this), t = E.beADate(t, this);
      let n = E.getEpoch(e);
      if (null === n) return null;
      let r = E.getEpoch(t);
      return null === r ? null : a ? this.isBetween(e, t) || this.isEqual(e) || this.isEqual(t) : n < this.epoch && this.epoch < r;
    }
  };
  Object.keys(t).forEach(a => {
    e.prototype[a] = t[a];
  });
};

var Mt = e => {
  const t = {
    i18n: e => {
      E.isObject(e.days) && we.set(e.days), E.isObject(e.months) && N.set(e.months), E.isBoolean(e.useTitleCase) && ve.set(e.useTitleCase);
    }
  };
  Object.keys(t).forEach(a => {
    e.prototype[a] = t[a];
  });
},
    Pt = a,
    St = ot,
    qt = gt,
    Tt = Ot,
    Et = e => {
  e.prototype.isSame = function (t, a) {
    let n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
    let r = this;
    if (!a) return null;

    if ("string" == typeof t && "object" == typeof a) {
      let e = t;
      t = a, a = e;
    }

    return "string" != typeof t && "number" != typeof t || (t = new e(t, this.timezone.name)), a = a.replace(/s$/, ""), !0 === n && r.tz !== t.tz && ((t = t.clone()).tz = r.tz), $t[a] ? $t[a](r) === $t[a](t) : null;
  };
},
    Nt = Dt,
    Ct = Mt;

let It = d$1;

const Yt = function (e, t) {
  let a = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  this.epoch = null, this.tz = Ge(t, It), this.silent = a.silent || !0, this.british = a.dmy || a.british, this._weekStart = 1, void 0 !== a.weekStart && (this._weekStart = a.weekStart), this._today = {}, void 0 !== a.today && (this._today = a.today), Object.defineProperty(this, "d", {
    get: function () {
      let e = Pt(this),
          t = (new Date(this.epoch).getTimezoneOffset() || 0) + 60 * e;
      t = 60 * t * 1e3;
      let a = this.epoch + t;
      return new Date(a);
    }
  }), Object.defineProperty(this, "timezones", {
    get: () => It,
    set: e => (It = e, e)
  });
  let n = at(this, e);
  this.epoch = n.epoch;
};

Object.keys(St).forEach(e => {
  Yt.prototype[e] = St[e];
}), Yt.prototype.clone = function () {
  return new Yt(this.epoch, this.tz, {
    silent: this.silent,
    weekStart: this._weekStart,
    today: this._today,
    parsers: this.parsers
  });
}, Yt.prototype.toLocalDate = function () {
  return this.toNativeDate();
}, Yt.prototype.toNativeDate = function () {
  return new Date(this.epoch);
}, qt(Yt), Tt(Yt), Et(Yt), Nt(Yt), Ct(Yt);
var At = Yt;

var xt = (e, t) => {
  let a = new At(null),
      n = new At(null);
  a = a.time(e), n = t ? n.time(t) : a.add(59, "minutes");
  let r = a.hour(),
      o = n.hour();
  return Object.keys(a.timezones).filter(e => {
    if (-1 === e.indexOf("/")) return !1;
    let t = new At(null, e),
        i = t.hour();
    return i >= r && i <= o && !(i === r && t.minute() < a.minute()) && !(i === o && t.minute() > n.minute());
  });
};

const Lt = (e, t, a) => new At(e, t, a),
      Ft = function (e) {
  let t = e._today || {};
  return Object.keys(t).forEach(a => {
    e = e[a](t[a]);
  }), e;
};

Lt.now = (e, t) => {
  let a = new At(new Date().getTime(), e, t);
  return a = Ft(a), a;
}, Lt.today = (e, t) => {
  let a = new At(new Date().getTime(), e, t);
  return a = Ft(a), a.startOf("day");
}, Lt.tomorrow = (e, t) => {
  let a = new At(new Date().getTime(), e, t);
  return a = Ft(a), a.add(1, "day").startOf("day");
}, Lt.yesterday = (e, t) => {
  let a = new At(new Date().getTime(), e, t);
  return a = Ft(a), a.subtract(1, "day").startOf("day");
}, Lt.extend = function () {
  let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return Object.keys(e).forEach(t => {
    At.prototype[t] = e[t];
  }), this;
}, Lt.timezones = function () {
  return new At().timezones;
}, Lt.max = function (e, t) {
  let a = new At(null, e, t);
  return a.epoch = 864e13, a;
}, Lt.min = function (e, t) {
  let a = new At(null, e, t);
  return a.epoch = -864e13, a;
}, Lt.whereIts = xt, Lt.version = "6.16.3", Lt.plugin = Lt.extend;
var Bt = Lt;

var spacetime$2 = /*#__PURE__*/Object.freeze({
	__proto__: null,
	'default': Bt
});

var require$$0 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(spacetime$2);

const spacetime$1 = require$$0;

const parseSentence = function (doc) {
  let s = doc.sentence();

  if (!s) {
    return null;
  }

  let txt = s.text() || '';
  let paren = txt.match(/\(.*\)/);

  if (!paren || !paren[0]) {
    return null;
  }

  txt = paren[0] || '';
  txt = txt.trim();
  txt = txt.replace(/^\(/, '');
  txt = txt.replace(/\)$/, '');
  let split = txt.split(/ – /);
  split = split.filter(str => str); // got birth/death info

  if (split[0] && split[1] && split.length === 2) {
    return {
      birth: split[0],
      death: split[1]
    };
  } // try for just birth date in parentheses


  if (split[0]) {
    let str = split[0].replace(/^(born|ne) (c\.)?/, '');
    let d = spacetime$1(str);

    if (d.isValid()) {
      return {
        birth: str
      };
    }
  }

  return null;
};

var getSentence = parseSentence;

const byCategory$4 = function (doc) {
  let cats = doc.categories();

  for (let i = 0; i < cats.length; i += 1) {
    let m = cats[i].match(/([0-9]{4}) births/);

    if (m && m[1]) {
      let year = parseInt(m[1], 10);

      if (year && year > 1000) {
        return year;
      }
    }
  }

  return null;
};

var byCategory_1$1 = byCategory$4;

const spacetime = require$$0;

const parseDate$2 = function (str) {
  if (!str) {
    return null;
  } // remove parentheses


  str = str.replace(/\(.*\)/, '');
  str = str.trim(); // just the year

  if (str.match(/^[0-9]{4}$/)) {
    return {
      year: parseInt(str, 10)
    };
  } // parse the full date


  let s = spacetime(str);
  return {
    year: s.year(),
    month: s.month(),
    date: s.date()
  };
};

var parseDate_1 = parseDate$2;

const byInfobox$4 = getInfobox;
const bySentence$1 = getSentence;
const byCategory$3 = byCategory_1$1;
const parseDate$1 = parseDate_1;

const birthDate$1 = function (doc) {
  let res = byInfobox$4(doc, 'birth_date');

  if (res) {
    return parseDate$1(res);
  } // try parentheses in first sentence


  res = bySentence$1(doc);

  if (res && res.birth) {
    return parseDate$1(res.birth);
  } // try to get year from 'Category:1955 births'


  let year = byCategory$3(doc);

  if (year) {
    return {
      year: year
    };
  }

  return null;
};

var birthDate_1 = birthDate$1;

const byInfobox$3 = getInfobox;

const birthPlace$1 = function (doc) {
  let res = byInfobox$3(doc, 'birth_place');

  if (res) {
    return res;
  }

  return null;
};

var birthPlace_1 = birthPlace$1;

const aliveCats = {
  'Living people': true,
  'Year of birth missing (living people)': true,
  'Date of birth missing (living people)': true,
  'Place of birth missing (living people)': true,
  'Active politicians': true,
  'Biography articles of living people': true
};
const didDie = {
  'Dead people': true,
  'Date of death missing': true,
  'Date of death unknown': true,
  'Place of death missing': true,
  'Place of death unknown': true,
  'Year of death missing': true,
  'Year of death unknown': true,
  'Year of death uncertain': true,
  'Recent deaths': true,
  'People declared dead in absentia': true,
  'Politicians elected posthumously': true,
  'People who died in office': true,
  'Assassinated heads of state‎ ': true,
  'Assassinated heads of government': true,
  'Assassinated mayors': true,
  'People who died in Nazi concentration camps': true,
  'People executed in Nazi concentration camps': true,
  'Politicians who died in Nazi concentration camps': true,
  'People who have received posthumous pardons': true,
  'People lost at sea‎': true,
  'Deaths due to shipwreck': true,
  'People who died at sea': true,
  'Unsolved deaths‎': true,
  'Deaths by horse-riding accident‎': true,
  'Deaths from falls‎': true,
  'Deaths by poisoning‎‎': true,
  'Deaths from cerebrovascular disease‎': true,
  'Deaths from asphyxiation‎': true,
  'Deaths from sepsis‎': true,
  'Deaths from pneumonia‎': true,
  'Deaths from dysentery‎‎': true,
  'Deaths by drowning‎': true
};

const byCat$1 = function (doc) {
  let cats = doc.categories(); //confirmed alive categories

  if (cats.find(c => aliveCats.hasOwnProperty(c))) {
    return true;
  } //confirmed death categories


  if (cats.find(c => didDie.hasOwnProperty(c))) {
    return false;
  }

  return null;
};

var byCategory$2 = byCat$1;

// {{WikiProject Biography}} (with living=yes parameter)
// {{WikiProject banner shell}} (with blp=y parameter)

const isAlive$2 = {
  blp: true,
  'blp unsourced': true,
  'blp unsourced section': true,
  'blp primary sources': true,
  'blp self-published': true,
  'blp sources': true,
  'blp sources section': true,
  'blp imdb-only refimprove': true,
  'blp imdb refimprove': true,
  'blp no footnotes': true,
  'blp more footnotes': true,
  'blp one source': true,
  'active politician': true,
  activepol: true,
  'current person': true
};
const isDead = {
  'recent death': true,
  'recent death presumed': true,
  'recent death confirmed': true,
  obituary: true,
  elegy: true,
  eulogy: true,
  panegyric: true,
  memorial: true
};

const byTemplate$1 = function (doc) {
  let templates = doc.templates().map(tmpl => tmpl.json());

  for (let i = 0; i < templates.length; i++) {
    let title = templates[i].template || '';
    title = title.toLowerCase().trim();

    if (isAlive$2.hasOwnProperty(title)) {
      return true;
    }

    if (isDead.hasOwnProperty(title)) {
      return false;
    }
  } // `{{WikiProject Biography|living=yes|activepol=yes}}`


  let bio = doc.template('WikiProject Biography');

  if (bio) {
    bio = bio.json(); //living blp BLP

    if (bio.living === 'yes' || bio.blp === 'yes' || bio.activepol === 'yes' || bio.BLP === 'yes') {
      return true;
    }

    if (bio.living === 'no' || bio.blp === 'no' || bio.BLP === 'no') {
      return false;
    }
  }

  return null;
};

var byTemplate_1 = byTemplate$1;

const byCat = byCategory$2;
const byTemplate = byTemplate_1; // maximum age of a person

let d = new Date();
const minYear = d.getFullYear() - 105;

const isAlive$1 = function (doc) {
  // if we have a death date
  let death = doc.deathDate();

  if (death) {
    return false;
  } // if we have a death place


  let deathPlace = doc.deathPlace();

  if (deathPlace) {
    return false;
  } // does it have a good category?


  let fromCat = byCat(doc);

  if (fromCat === true || fromCat === false) {
    return fromCat;
  } // does it have a good template?


  let fromTemplate = byTemplate(doc);

  if (fromTemplate === true || fromTemplate === false) {
    return fromTemplate;
  } // were they born in 1900?


  let birth = doc.birthDate();

  if (birth && birth.year && birth.year < minYear) {
    return true;
  }

  return null;
};

var isAlive_1 = isAlive$1;

const byCategory$1 = function (doc) {
  let cats = doc.categories();

  for (let i = 0; i < cats.length; i += 1) {
    let m = cats[i].match(/([0-9]{4}) deaths/);

    if (m && m[1]) {
      let year = parseInt(m[1], 10);

      if (year && year > 1000) {
        return year;
      }
    }
  }

  return null;
};

var byCategory_1 = byCategory$1;

const byInfobox$2 = getInfobox;
const bySentence = getSentence;
const byCategory = byCategory_1;
const parseDate = parseDate_1;

const deathDate$1 = function (doc) {
  let res = byInfobox$2(doc, 'death_date');

  if (res) {
    return parseDate(res);
  } // try parentheses in first sentence


  res = bySentence(doc);

  if (res && res.death) {
    return parseDate(res.death);
  } // try to get year from 'Category:1955 deaths'


  let year = byCategory(doc);

  if (year) {
    return {
      year: year
    };
  }

  return null;
};

var deathDate_1 = deathDate$1;

const byInfobox$1 = getInfobox;

const deathPlace$1 = function (doc) {
  let res = byInfobox$1(doc, 'death_place');

  if (res) {
    return res;
  }

  return null;
};

var deathPlace_1 = deathPlace$1;

const byInfobox = getInfobox;

const getNationality = function (doc) {
  let res = byInfobox(doc, 'nationality');

  if (res) {
    return res;
  }

  return null;
};

var nationality$1 = getNationality;

const birthDate = birthDate_1;
const birthPlace = birthPlace_1;
const isAlive = isAlive_1;
const deathDate = deathDate_1;
const deathPlace = deathPlace_1;
const nationality = nationality$1;

const addMethod = function (models) {
  models.Doc.prototype.birthDate = function () {
    return birthDate(this);
  };

  models.Doc.prototype.birthPlace = function () {
    return birthPlace(this);
  };

  models.Doc.prototype.isAlive = function () {
    return isAlive(this);
  };

  models.Doc.prototype.deathDate = function () {
    return deathDate(this);
  };

  models.Doc.prototype.deathPlace = function () {
    return deathPlace(this);
  };

  models.Doc.prototype.nationality = function () {
    return nationality(this);
  };
};

var src = addMethod;

export { src as default };
