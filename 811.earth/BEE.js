"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = exports.list = void 0;
const earth_unit_1 = require("./00.earth.unit/earth.unit");
const arena_unit_1 = require("./01.arena.unit/arena.unit");
const fate_unit_1 = require("./02.fate.unit/fate.unit");
const being_unit_1 = require("./03.being.unit/being.unit");
const ambit_unit_1 = require("./04.ambit.unit/ambit.unit");
const clock_unit_1 = require("./05.clock.unit/clock.unit");
const risk_unit_1 = require("./06.risk.unit/risk.unit");
const weather_unit_1 = require("./07.weather.unit/weather.unit");
const plot_unit_1 = require("./08.plot.unit/plot.unit");
const delivery_unit_1 = require("./88.delivery.unit/delivery.unit");
const collect_unit_1 = require("./97.collect.unit/collect.unit");
const menu_unit_1 = require("./98.menu.unit/menu.unit");
const bus_unit_1 = require("./99.bus.unit/bus.unit");
const earth_model_1 = require("./00.earth.unit/earth.model");
const arena_model_1 = require("./01.arena.unit/arena.model");
const fate_model_1 = require("./02.fate.unit/fate.model");
const being_model_1 = require("./03.being.unit/being.model");
const ambit_model_1 = require("./04.ambit.unit/ambit.model");
const clock_model_1 = require("./05.clock.unit/clock.model");
const risk_model_1 = require("./06.risk.unit/risk.model");
const weather_model_1 = require("./07.weather.unit/weather.model");
const plot_model_1 = require("./08.plot.unit/plot.model");
const delivery_model_1 = require("./88.delivery.unit/delivery.model");
const collect_model_1 = require("./97.collect.unit/collect.model");
const menu_model_1 = require("./98.menu.unit/menu.model");
const bus_model_1 = require("./99.bus.unit/bus.model");
exports.list = [earth_unit_1.default, arena_unit_1.default, fate_unit_1.default, being_unit_1.default, ambit_unit_1.default, clock_unit_1.default, risk_unit_1.default, weather_unit_1.default, plot_unit_1.default, delivery_unit_1.default, collect_unit_1.default, menu_unit_1.default, bus_unit_1.default];
const reduceFromEarth = require("./00.earth.unit/earth.reduce");
const reduceFromArena = require("./01.arena.unit/arena.reduce");
const reduceFromFate = require("./02.fate.unit/fate.reduce");
const reduceFromBeing = require("./03.being.unit/being.reduce");
const reduceFromAmbit = require("./04.ambit.unit/ambit.reduce");
const reduceFromClock = require("./05.clock.unit/clock.reduce");
const reduceFromRisk = require("./06.risk.unit/risk.reduce");
const reduceFromWeather = require("./07.weather.unit/weather.reduce");
const reduceFromPlot = require("./08.plot.unit/plot.reduce");
const reduceFromDelivery = require("./88.delivery.unit/delivery.reduce");
const reduceFromCollect = require("./97.collect.unit/collect.reduce");
const reduceFromMenu = require("./98.menu.unit/menu.reduce");
const reduceFromBus = require("./99.bus.unit/bus.reduce");
exports.reducer = {
    earth: reduceFromEarth.reducer,
    arena: reduceFromArena.reducer,
    fate: reduceFromFate.reducer,
    being: reduceFromBeing.reducer,
    ambit: reduceFromAmbit.reducer,
    clock: reduceFromClock.reducer,
    risk: reduceFromRisk.reducer,
    weather: reduceFromWeather.reducer,
    plot: reduceFromPlot.reducer,
    delivery: reduceFromDelivery.reducer,
    collect: reduceFromCollect.reducer,
    menu: reduceFromMenu.reducer,
    bus: reduceFromBus.reducer,
};
class UnitData {
    constructor() {
        this.earth = new earth_model_1.EarthModel();
        this.arena = new arena_model_1.ArenaModel();
        this.fate = new fate_model_1.FateModel();
        this.being = new being_model_1.BeingModel();
        this.ambit = new ambit_model_1.AmbitModel();
        this.clock = new clock_model_1.ClockModel();
        this.risk = new risk_model_1.RiskModel();
        this.weather = new weather_model_1.WeatherModel();
        this.plot = new plot_model_1.PlotModel();
        this.delivery = new delivery_model_1.DeliveryModel();
        this.collect = new collect_model_1.CollectModel();
        this.menu = new menu_model_1.MenuModel();
        this.bus = new bus_model_1.BusModel();
    }
}
exports.default = UnitData;
//# sourceMappingURL=BEE.js.map