"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = void 0;
const clone = require("clone-deep");
const Act = require("./delivery.action");
const delivery_model_1 = require("./delivery.model");
const Buzz = require("./delivery.buzzer");
function reducer(model = new delivery_model_1.DeliveryModel(), act, state) {
    switch (act.type) {
        case Act.UPDATE_DELIVERY:
            return Buzz.updateDelivery(clone(model), act.bale, state);
        case Act.INIT_DELIVERY:
            return Buzz.initDelivery(clone(model), act.bale, state);
        case Act.READ_DELIVERY:
            return Buzz.readDelivery(clone(model), act.bale, state);
        case Act.WRITE_DELIVERY:
            return Buzz.writeDelivery(clone(model), act.bale, state);
        case Act.REMOVE_DELIVERY:
            return Buzz.removeDelivery(clone(model), act.bale, state);
        case Act.CREATE_DELIVERY:
            return Buzz.createDelivery(clone(model), act.bale, state);
        case Act.DELETE_DELIVERY:
            return Buzz.deleteDelivery(clone(model), act.bale, state);
        default:
            return model;
    }
}
exports.reducer = reducer;
//# sourceMappingURL=delivery.reduce.js.map