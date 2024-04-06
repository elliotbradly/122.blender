"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteDelivery = exports.DELETE_DELIVERY = exports.CreateDelivery = exports.CREATE_DELIVERY = exports.RemoveDelivery = exports.REMOVE_DELIVERY = exports.WriteDelivery = exports.WRITE_DELIVERY = exports.ReadDelivery = exports.READ_DELIVERY = exports.UpdateDelivery = exports.UPDATE_DELIVERY = exports.InitDelivery = exports.INIT_DELIVERY = void 0;
// Delivery actions
exports.INIT_DELIVERY = "[Delivery action] Init Delivery";
class InitDelivery {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.INIT_DELIVERY;
    }
}
exports.InitDelivery = InitDelivery;
exports.UPDATE_DELIVERY = "[Delivery action] Update Delivery";
class UpdateDelivery {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.UPDATE_DELIVERY;
    }
}
exports.UpdateDelivery = UpdateDelivery;
exports.READ_DELIVERY = "[Read action] Read Delivery";
class ReadDelivery {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.READ_DELIVERY;
    }
}
exports.ReadDelivery = ReadDelivery;
exports.WRITE_DELIVERY = "[Write action] Write Delivery";
class WriteDelivery {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.WRITE_DELIVERY;
    }
}
exports.WriteDelivery = WriteDelivery;
exports.REMOVE_DELIVERY = "[Remove action] Remove Delivery";
class RemoveDelivery {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.REMOVE_DELIVERY;
    }
}
exports.RemoveDelivery = RemoveDelivery;
exports.CREATE_DELIVERY = "[Create action] Create Delivery";
class CreateDelivery {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.CREATE_DELIVERY;
    }
}
exports.CreateDelivery = CreateDelivery;
exports.DELETE_DELIVERY = "[Delete action] Delete Delivery";
class DeleteDelivery {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.DELETE_DELIVERY;
    }
}
exports.DeleteDelivery = DeleteDelivery;
//# sourceMappingURL=delivery.action.js.map