"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListWeather = exports.LIST_WEATHER = exports.ReadWeather = exports.READ_WEATHER = exports.ProcessWeatherHour = exports.PROCESS_WEATHER_HOUR = exports.ProcessWeatherDay = exports.PROCESS_WEATHER_DAY = exports.ProcessWeatherBeam = exports.PROCESS_WEATHER_BEAM = exports.ProcessWeather = exports.PROCESS_WEATHER = exports.UpdateWeather = exports.UPDATE_WEATHER = exports.SetWorkingWeather = exports.SET_WORKING_WEATHER = exports.InitWeather = exports.INIT_WEATHER = void 0;
exports.INIT_WEATHER = "[Weather action] Init Weather";
class InitWeather {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.INIT_WEATHER;
    }
}
exports.InitWeather = InitWeather;
exports.SET_WORKING_WEATHER = "[Weather action] Set Working Weather";
class SetWorkingWeather {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.SET_WORKING_WEATHER;
    }
}
exports.SetWorkingWeather = SetWorkingWeather;
exports.UPDATE_WEATHER = "[Weather action] Update Weather";
class UpdateWeather {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.UPDATE_WEATHER;
    }
}
exports.UpdateWeather = UpdateWeather;
exports.PROCESS_WEATHER = "[Weather action] Process Weather";
class ProcessWeather {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.PROCESS_WEATHER;
    }
}
exports.ProcessWeather = ProcessWeather;
exports.PROCESS_WEATHER_BEAM = "[Weather action] Process Weather Beam";
class ProcessWeatherBeam {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.PROCESS_WEATHER_BEAM;
    }
}
exports.ProcessWeatherBeam = ProcessWeatherBeam;
exports.PROCESS_WEATHER_DAY = "[Weather action] Process Weather Day";
class ProcessWeatherDay {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.PROCESS_WEATHER_DAY;
    }
}
exports.ProcessWeatherDay = ProcessWeatherDay;
exports.PROCESS_WEATHER_HOUR = "[Weather action] Process Weather Hour";
class ProcessWeatherHour {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.PROCESS_WEATHER_HOUR;
    }
}
exports.ProcessWeatherHour = ProcessWeatherHour;
exports.READ_WEATHER = "[Weather action] Read Weather";
class ReadWeather {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.READ_WEATHER;
    }
}
exports.ReadWeather = ReadWeather;
exports.LIST_WEATHER = "[Weather action] List Weather";
class ListWeather {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.LIST_WEATHER;
    }
}
exports.ListWeather = ListWeather;
//# sourceMappingURL=weather.action.js.map