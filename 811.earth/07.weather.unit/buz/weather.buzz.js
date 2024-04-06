"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listWeather = exports.setWorkingWeather = exports.readWeather = exports.processWeatherHour = exports.processWeatherDay = exports.processWeatherYear = exports.processWeatherBeam = exports.processWeather = exports.updateWeather = exports.initWeather = void 0;
const ActMnu = require("../../98.menu.unit/menu.action");
const ActWet = require("../../07.weather.unit/weather.action");
const ActBus = require("../../99.bus.unit/bus.action");
const initWeather = async (cpy, bal, ste) => {
    var bit;
    var lst = [];
    bit = await ste.hunt(ActBus.INIT_BUS, { lst: [ActWet], dat: bal.dat });
    if (bal.val == 1)
        bit = await ste.hunt(ActMnu.INIT_MENU);
    (0, exports.updateWeather)(cpy, bal, ste);
    if (bal.slv != null)
        bal.slv({ intBit: { idx: "init-weather" } });
    return cpy;
};
exports.initWeather = initWeather;
const updateWeather = (cpy, bal, ste) => {
    return cpy;
};
exports.updateWeather = updateWeather;
const processWeather = async (cpy, bal, ste) => {
};
exports.processWeather = processWeather;
const processWeatherBeam = async (cpy, bal, ste) => {
    return cpy;
};
exports.processWeatherBeam = processWeatherBeam;
const processWeatherYear = async (cpy, bal, ste) => {
    var beam = { idx: null, src: null, lst: [] };
    if (bal.val == null)
        bal.val = 10;
    if (bal.val == 20)
        debugger;
    //reading the folder of the year
    var loc = cpy.weatherSrc + '/' + cpy.workingTitle + '/' + bal.val;
    var list = await FS.readdir(loc);
    var out = [];
    list.forEach(async (a, b) => {
        var now = loc + '/' + a;
        //beam.lst.push(day )
    });
};
exports.processWeatherYear = processWeatherYear;
const processWeatherDay = async (cpy, bal, ste) => {
    var bit, src, ico, wet;
    var sunrise, sunset, moon, dew;
    var dat = bal.dat;
    var itm = await FS.readJson(bal.src);
    var year = 2000 + bal.val;
    var day = +1;
    var dayStr = String(day).padStart(2, "0");
    var timecode = year + '-' + dayStr;
    //bit = await cpy.port.time.formatTime( {src:timecode} )
    var idx = S(bit.tmeBit.src).slugify().s;
    var lst = idx.split('-');
    lst = lst.slice(0, 3);
    lst[1] = String(lst[1]).padStart(2, "0");
    idx = lst.join('-');
    src = dat.daily.data[0].summary;
    ico = dat.daily.data[0].icon;
    wet = dat.daily.data[0].precipType;
    sunrise = dat.daily.data[0].sunriseTime;
    sunset = dat.daily.data[0].sunsetTime;
    moon = dat.daily.data[0].moonPhase;
    dew = dat.daily.data[0].dewPoint;
    //  var day:WeatherDayBit = { idx, src, ico, wet, sunrise, sunset, moon, dew, lst:[] }
    dat.hourly.data.forEach((b) => {
        var hour = {
            idx: b.idx,
            src: b.summary,
            temp: b.temperature,
            windSpeed: b.windSpeed,
            windGust: b.windGust,
            windBear: b.windBearing,
            water: b.precipType,
            waterVal: b.precipIntensity,
            cloud: b.cloudCover
        };
        //day.lst.push(hour)
    });
};
exports.processWeatherDay = processWeatherDay;
const processWeatherHour = async (cpy, bal, ste) => {
    var lst = [];
    if (bal.lst == null)
        bal.lst = [];
    bal.lst.forEach((b) => {
        var hour = {
            idx: b.idx,
            src: b.summary,
            temp: b.temperature,
            windSpeed: b.windSpeed,
            windGust: b.windGust,
            windBear: b.windBearing,
            water: b.precipType,
            waterVal: b.precipIntensity,
            cloud: b.cloudCover
        };
        lst.push(hour);
    });
    if (bal.slv != null)
        bal.slv({ wetBit: { idx: "process-weather-hour", lst } });
    return; //bit
};
exports.processWeatherHour = processWeatherHour;
const readWeather = (cpy, bal, ste) => {
    return cpy;
};
exports.readWeather = readWeather;
const setWorkingWeather = (cpy, bal, ste) => {
    cpy.workingDex = bal.val;
    cpy.workingTitle = bal.src;
    if (bal.slv != null)
        bal.slv({ wetBit: { idx: "set-working-weather", bal } });
    return cpy;
};
exports.setWorkingWeather = setWorkingWeather;
const listWeather = async (cpy, bal, ste) => {
    var list = await FS.readdir(cpy.weatherSrc);
    var lst = [];
    list.forEach((a) => {
        if (a == '.git')
            return;
        if (a == '.gitignore')
            return;
        lst.push(a);
    });
    if (bal.slv != null)
        bal.slv({ wetBit: { idx: "list-weather", lst } });
    return cpy;
};
exports.listWeather = listWeather;
const FS = require("fs-extra");
const S = require("string");
//# sourceMappingURL=weather.buzz.js.map