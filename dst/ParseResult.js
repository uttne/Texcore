var ParseResult = (function () {
    function ParseResult(item, parseText, index, nextIndex) {
        this._item = item;
        this._parseText = parseText;
        this._index = index;
        this._nextIndex = nextIndex;
    }
    Object.defineProperty(ParseResult.prototype, "Item", {
        get: function () { return this._item; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ParseResult.prototype, "ParseText", {
        get: function () { return this._parseText; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ParseResult.prototype, "Index", {
        get: function () { return this._index; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ParseResult.prototype, "NextIndex", {
        get: function () { return this._nextIndex; },
        enumerable: true,
        configurable: true
    });
    return ParseResult;
}());
//# sourceMappingURL=ParseResult.js.map