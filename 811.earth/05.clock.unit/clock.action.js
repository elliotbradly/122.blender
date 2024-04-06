"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListClock = exports.LIST_CLOCK = exports.BlockClock = exports.BLOCK_CLOCK = exports.DeleteClock = exports.DELETE_CLOCK = exports.CreateClock = exports.CREATE_CLOCK = exports.RemoveClock = exports.REMOVE_CLOCK = exports.WriteClock = exports.WRITE_CLOCK = exports.ReadClock = exports.READ_CLOCK = exports.UpdateClock = exports.UPDATE_CLOCK = exports.InitClock = exports.INIT_CLOCK = void 0;
// Clock actions
exports.INIT_CLOCK = "[Clock action] Init Clock";
class InitClock {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.INIT_CLOCK;
    }
}
exports.InitClock = InitClock;
exports.UPDATE_CLOCK = "[Clock action] Update Clock";
class UpdateClock {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.UPDATE_CLOCK;
    }
}
exports.UpdateClock = UpdateClock;
exports.READ_CLOCK = "[Read action] Read Clock";
class ReadClock {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.READ_CLOCK;
    }
}
exports.ReadClock = ReadClock;
exports.WRITE_CLOCK = "[Write action] Write Clock";
class WriteClock {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.WRITE_CLOCK;
    }
}
exports.WriteClock = WriteClock;
exports.REMOVE_CLOCK = "[Remove action] Remove Clock";
class RemoveClock {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.REMOVE_CLOCK;
    }
}
exports.RemoveClock = RemoveClock;
exports.CREATE_CLOCK = "[Create action] Create Clock";
class CreateClock {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.CREATE_CLOCK;
    }
}
exports.CreateClock = CreateClock;
exports.DELETE_CLOCK = "[Delete action] Delete Clock";
class DeleteClock {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.DELETE_CLOCK;
    }
}
exports.DeleteClock = DeleteClock;
exports.BLOCK_CLOCK = "[Block action] Block Clock";
class BlockClock {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.BLOCK_CLOCK;
    }
}
exports.BlockClock = BlockClock;
exports.LIST_CLOCK = "[List action] List Clock";
class ListClock {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.LIST_CLOCK;
    }
}
exports.ListClock = ListClock;
//# sourceMappingURL=clock.action.js.map