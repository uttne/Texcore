var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var NoteItem = (function (_super) {
    __extends(NoteItem, _super);
    function NoteItem(pitch, octave, length, pitchMarck) {
        var _this = _super.call(this) || this;
        _this._pitch = pitch;
        _this._octave = octave;
        _this._length = length;
        _this._pitchMarck = pitchMarck;
        return _this;
    }
    Object.defineProperty(NoteItem.prototype, "Pitch", {
        get: function () { return this._pitch; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NoteItem.prototype, "Octave", {
        get: function () { return this._octave; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NoteItem.prototype, "Length", {
        get: function () { return this._length; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NoteItem.prototype, "PitchMarck", {
        get: function () { return this._pitchMarck; },
        enumerable: true,
        configurable: true
    });
    return NoteItem;
}(ItemBase));
//# sourceMappingURL=NoteItem.js.map