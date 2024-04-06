"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAmbit = exports.CREATE_AMBIT = exports.DeleteAmbit = exports.DELETE_AMBIT = exports.RemoveAmbit = exports.REMOVE_AMBIT = exports.WriteAmbit = exports.WRITE_AMBIT = exports.ReadAmbit = exports.READ_AMBIT = exports.UpdateAmbit = exports.UPDATE_AMBIT = exports.InitAmbit = exports.INIT_AMBIT = void 0;
// Ambit actions
exports.INIT_AMBIT = "[Ambit action] Init Ambit";
class InitAmbit {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.INIT_AMBIT;
    }
}
exports.InitAmbit = InitAmbit;
exports.UPDATE_AMBIT = "[Ambit action] Update Ambit";
class UpdateAmbit {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.UPDATE_AMBIT;
    }
}
exports.UpdateAmbit = UpdateAmbit;
exports.READ_AMBIT = "[Read action] Read Ambit";
class ReadAmbit {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.READ_AMBIT;
    }
}
exports.ReadAmbit = ReadAmbit;
exports.WRITE_AMBIT = "[Write action] Write Ambit";
class WriteAmbit {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.WRITE_AMBIT;
    }
}
exports.WriteAmbit = WriteAmbit;
exports.REMOVE_AMBIT = "[Remove action] Remove Ambit";
class RemoveAmbit {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.REMOVE_AMBIT;
    }
}
exports.RemoveAmbit = RemoveAmbit;
exports.DELETE_AMBIT = "[Delete action] Delete Ambit";
class DeleteAmbit {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.DELETE_AMBIT;
    }
}
exports.DeleteAmbit = DeleteAmbit;
exports.CREATE_AMBIT = "[Create action] Create Ambit";
class CreateAmbit {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.CREATE_AMBIT;
    }
}
exports.CreateAmbit = CreateAmbit;
//# sourceMappingURL=ambit.action.js.map