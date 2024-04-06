"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = void 0;
const clone = require("clone-deep");
const Act = require("./weather.action");
const weather_model_1 = require("./weather.model");
const Buzz = require("./weather.buzzer");
function reducer(model = new weather_model_1.WeatherModel(), act, state) {
    switch (act.type) {
        case Act.UPDATE_WEATHER:
            return Buzz.updateWeather(clone(model), act.bale, state);
        case Act.INIT_WEATHER:
            return Buzz.initWeather(clone(model), act.bale, state);
        case Act.READ_WEATHER:
            return Buzz.readWeather(clone(model), act.bale, state);
        case Act.LIST_WEATHER:
            return Buzz.listWeather(clone(model), act.bale, state);
        case Act.SET_WORKING_WEATHER:
            return Buzz.setWorkingWeather(clone(model), act.bale, state);
        case Act.PROCESS_WEATHER:
            return Buzz.processWeather(clone(model), act.bale, state);
        case Act.PROCESS_WEATHER_HOUR:
            return Buzz.processWeatherHour(clone(model), act.bale, state);
        case Act.PROCESS_WEATHER_DAY:
            return Buzz.processWeatherDay(clone(model), act.bale, state);
        case Act.PROCESS_WEATHER_BEAM:
            return Buzz.processWeatherBeam(clone(model), act.bale, state);
        default:
            return model;
    }
}
exports.reducer = reducer;
//# sourceMappingURL=weather.reduce.js.map