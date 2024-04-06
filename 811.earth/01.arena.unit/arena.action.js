"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateArena = exports.CREATE_ARENA = exports.DeleteArena = exports.DELETE_ARENA = exports.RemoveArena = exports.REMOVE_ARENA = exports.WriteArena = exports.WRITE_ARENA = exports.ReadArena = exports.READ_ARENA = exports.UpdateArena = exports.UPDATE_ARENA = exports.InitArena = exports.INIT_ARENA = void 0;
// Arena actions
exports.INIT_ARENA = "[Arena action] Init Arena";
class InitArena {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.INIT_ARENA;
    }
}
exports.InitArena = InitArena;
exports.UPDATE_ARENA = "[Arena action] Update Arena";
class UpdateArena {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.UPDATE_ARENA;
    }
}
exports.UpdateArena = UpdateArena;
exports.READ_ARENA = "[Read action] Read Arena";
class ReadArena {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.READ_ARENA;
    }
}
exports.ReadArena = ReadArena;
exports.WRITE_ARENA = "[Write action] Write Arena";
class WriteArena {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.WRITE_ARENA;
    }
}
exports.WriteArena = WriteArena;
exports.REMOVE_ARENA = "[Remove action] Remove Arena";
class RemoveArena {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.REMOVE_ARENA;
    }
}
exports.RemoveArena = RemoveArena;
exports.DELETE_ARENA = "[Delete action] Delete Arena";
class DeleteArena {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.DELETE_ARENA;
    }
}
exports.DeleteArena = DeleteArena;
exports.CREATE_ARENA = "[Create action] Create Arena";
class CreateArena {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.CREATE_ARENA;
    }
}
exports.CreateArena = CreateArena;
//# sourceMappingURL=arena.action.js.map