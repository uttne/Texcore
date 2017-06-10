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
var Pitch;
(function (Pitch) {
    Pitch[Pitch["Ces"] = 0] = "Ces";
    Pitch[Pitch["C"] = 1] = "C";
    Pitch[Pitch["Cis"] = 2] = "Cis";
    Pitch[Pitch["Des"] = 3] = "Des";
    Pitch[Pitch["D"] = 4] = "D";
    Pitch[Pitch["Dis"] = 5] = "Dis";
    Pitch[Pitch["Es"] = 6] = "Es";
    Pitch[Pitch["E"] = 7] = "E";
    Pitch[Pitch["Eis"] = 8] = "Eis";
    Pitch[Pitch["Fes"] = 9] = "Fes";
    Pitch[Pitch["F"] = 10] = "F";
    Pitch[Pitch["Fis"] = 11] = "Fis";
    Pitch[Pitch["Ges"] = 12] = "Ges";
    Pitch[Pitch["G"] = 13] = "G";
    Pitch[Pitch["Gis"] = 14] = "Gis";
    Pitch[Pitch["As"] = 15] = "As";
    Pitch[Pitch["A"] = 16] = "A";
    Pitch[Pitch["Ais"] = 17] = "Ais";
    Pitch[Pitch["B"] = 18] = "B";
    Pitch[Pitch["H"] = 19] = "H";
    Pitch[Pitch["His"] = 20] = "His";
})(Pitch || (Pitch = {}));
var Score = (function () {
    function Score(id) {
        var _this = this;
        this._centerHeight = 50;
        this._staffInterval = 100;
        this._distance = 10;
        this._intervalNote = 25;
        this._startXNote = 60;
        this.toString = function () {
            return _this._draw.toString();
        };
        this.DrawFrame = function () {
            var width = _this._draw.width();
            var height = _this._draw.height();
            _this._draw.rect(width, height).attr({ fill: '#00f', 'fill-opacity': 0.5, stroke: "#000", 'stroke-width': 2 }); //.fill({color:'#00f',opacity:0.5});//.stroke({color:'#00f',width:2,opacity:0.5});
        };
        this.DrawSharpe = function (index, staffInterval, y, offsetX) {
            var centerHeight = _this._centerHeight + staffInterval * _this._staffInterval;
            var centerX = _this._startXNote + _this._intervalNote * index + (offsetX ? offsetX : 0);
            var centerY = centerHeight + _this._distance * y;
            var sharpeSvg = Images.GetSharpe();
            _this._draw.svg(sharpeSvg.svg);
            var doc = SVG.get(sharpeSvg.svgId);
            doc.size(30, 30);
            doc.center(centerX, centerY);
        };
        this.DrawFlat = function (index, staffInterval, y, offsetX) {
            var centerHeight = _this._centerHeight + staffInterval * _this._staffInterval;
            var centerX = _this._startXNote + _this._intervalNote * index + (offsetX ? offsetX : 0);
            var centerY = centerHeight + _this._distance * y - 7;
            var flatSvg = Images.GetFlat();
            _this._draw.svg(flatSvg.svg);
            var doc = SVG.get(flatSvg.svgId);
            doc.size(30, 30);
            doc.center(centerX, centerY);
        };
        this.DrawNoteBase = function (index, staffInterval, height) {
            var centerHeight = _this._centerHeight + staffInterval * _this._staffInterval;
            var centerX = _this._startXNote + _this._intervalNote * index;
            var centerY = centerHeight + _this._distance * height;
            var radiusX = _this._distance * 0.5 * 1.1;
            var radiusY = _this._distance * 0.5 * 0.8;
            _this._draw.ellipse(radiusX * 2, radiusY * 2).move(centerX - radiusX, centerY - radiusY).fill('#000');
            var thikness = 2;
            _this._draw.line(centerX + radiusX - thikness + 1, centerY, centerX + radiusX - thikness + 1, centerY - 30).stroke({ width: 2 });
        };
        this.DrawNote = function (index, staffInterval, noteItem) {
            if (noteItem == null) {
                return;
            }
            var height = 0;
            var variant = 0;
            switch (noteItem.Pitch) {
                case Pitch.Ces:
                    height = 3;
                    variant = -1;
                    break;
                case Pitch.C:
                    height = 3;
                    break;
                case Pitch.Cis:
                    height = 3;
                    variant = 1;
                    break;
                case Pitch.Des:
                    height = 2.5;
                    variant = -1;
                    break;
                case Pitch.D:
                    height = 2.5;
                    break;
                case Pitch.Dis:
                    height = 2.5;
                    variant = 1;
                    break;
                case Pitch.Es:
                    height = 2;
                    variant = -1;
                    break;
                case Pitch.E:
                    height = 2;
                    break;
                case Pitch.Eis:
                    height = 2;
                    variant = 1;
                    break;
                case Pitch.Fes:
                    height = 1.5;
                    variant = -1;
                    break;
                case Pitch.F:
                    height = 1.5;
                    break;
                case Pitch.Fis:
                    height = 1.5;
                    variant = 1;
                    break;
                case Pitch.Ges:
                    height = 1;
                    variant = -1;
                    break;
                case Pitch.G:
                    height = 1;
                    break;
                case Pitch.Gis:
                    height = 1;
                    variant = 1;
                    break;
                case Pitch.As:
                    height = 0.5;
                    variant = -1;
                    break;
                case Pitch.A:
                    height = 0.5;
                    break;
                case Pitch.Ais:
                    height = 0.5;
                    variant = 1;
                    break;
                case Pitch.B:
                    height = 0;
                    variant = -1;
                    break;
                case Pitch.H:
                    height = 0;
                    break;
                case Pitch.His:
                    height = 0;
                    variant = 1;
                    break;
            }
            _this.DrawNoteBase(index, staffInterval, height);
            if (variant == -1) {
                _this.DrawFlat(index, staffInterval, height, -12);
            }
            else if (variant == 1) {
                _this.DrawSharpe(index, staffInterval, height, -12);
            }
        };
        this.DrawStaff = function (staffInterval) {
            var left = 0;
            var right = _this._draw.width();
            var centerHeight = _this._centerHeight + _this._staffInterval * staffInterval;
            _this._draw.line(left, centerHeight + _this._distance * -2, right, centerHeight + _this._distance * -2).stroke({ width: 0.5 });
            _this._draw.line(left, centerHeight + _this._distance * -1, right, centerHeight + _this._distance * -1).stroke({ width: 0.5 });
            _this._draw.line(left, centerHeight + _this._distance * 0, right, centerHeight + _this._distance * 0).stroke({ width: 0.5 });
            _this._draw.line(left, centerHeight + _this._distance * 1, right, centerHeight + _this._distance * 1).stroke({ width: 0.5 });
            _this._draw.line(left, centerHeight + _this._distance * 2, right, centerHeight + _this._distance * 2).stroke({ width: 0.5 });
        };
        this.DrawClef = function (staffInterval) {
            var centerY = _this._centerHeight + _this._staffInterval * staffInterval;
            var centerX = 20;
            var offsetY = -2.5;
            var offsetX = 0;
            var svgImage = Images.GetTrebleClef();
            _this._draw.svg(svgImage.svg);
            var svg = SVG.get(svgImage.svgId);
            svg.size(70, 70);
            svg.center(centerX + offsetX, centerY + offsetY);
        };
        this.Parse = function (text, index) {
            if (index < 0) {
                return null;
            }
            var maxIndex = text.length - 1;
            var parseText = "";
            var keyword = "";
            var charactor = "";
            var item = null;
            var nextIndex = -1;
            for (var i = index; i <= maxIndex; ++i) {
                charactor = text[i];
                parseText += charactor;
                if (charactor != " " && charactor != "   ") {
                    keyword += charactor;
                }
                else if (keyword != "") {
                    nextIndex = i + 1;
                    nextIndex = nextIndex < text.length ? nextIndex : -1;
                    break;
                }
            }
            if (keyword != "") {
                item = _this.ParseKeyword(keyword);
            }
            if (parseText == "") {
                return null;
            }
            else {
                return new ParseResult(item, parseText, index, nextIndex);
            }
        };
        this.ParseKeyword = function (keyword) {
            var ret = null;
            var regular = /^((ces|c|cis|des|d|dis|es|e|eis|fes|f|fis|ges|g|gis|as|a|ais|b|h|his)|(ces|c|cis|des|d|dis|es|e|eis|fes|f|fis|ges|g|gis|as|a|ais|b|h|his)(((\+|\-)\d*)|([/]\d)|((\+|\-)\d*)([/]\d)|(([/]\d)(\+|\-)\d*)))$/i;
            if (regular.test(keyword)) {
                var pitch = /(ces|cis|c|des|dis|d|es|eis|e|fes|fis|f|ges|gis|g|as|ais|a|b|his|h)/i.exec(keyword)[0];
                var octave = 0;
                var tmp = /(\+|\-)\d*/.exec(keyword);
                if (tmp != null) {
                    if (tmp[0] == "+")
                        octave = 1;
                    else if (tmp[0] == "+")
                        octave = -1;
                    else
                        octave = Number(tmp[0]);
                }
                var length_1 = 4;
                tmp = /([/]\d)/.exec(keyword);
                if (tmp != null) {
                    length_1 = Number(tmp[0].substr(1));
                }
                switch (pitch.toLowerCase()) {
                    case "ces":
                        ret = new NoteItem(Pitch.Ces, octave, length_1);
                        break;
                    case "c":
                        ret = new NoteItem(Pitch.C, octave, length_1);
                        break;
                    case "cis":
                        ret = new NoteItem(Pitch.Cis, octave, length_1);
                        break;
                    case "des":
                        ret = new NoteItem(Pitch.Des, octave, length_1);
                        break;
                    case "d":
                        ret = new NoteItem(Pitch.D, octave, length_1);
                        break;
                    case "dis":
                        ret = new NoteItem(Pitch.Dis, octave, length_1);
                        break;
                    case "es":
                        ret = new NoteItem(Pitch.Es, octave, length_1);
                        break;
                    case "e":
                        ret = new NoteItem(Pitch.E, octave, length_1);
                        break;
                    case "eis":
                        ret = new NoteItem(Pitch.Eis, octave, length_1);
                        break;
                    case "fes":
                        ret = new NoteItem(Pitch.Fes, octave, length_1);
                        break;
                    case "f":
                        ret = new NoteItem(Pitch.F, octave, length_1);
                        break;
                    case "fis":
                        ret = new NoteItem(Pitch.Fis, octave, length_1);
                        break;
                    case "ges":
                        ret = new NoteItem(Pitch.Ges, octave, length_1);
                        break;
                    case "g":
                        ret = new NoteItem(Pitch.G, octave, length_1);
                        break;
                    case "gis":
                        ret = new NoteItem(Pitch.Gis, octave, length_1);
                        break;
                    case "as":
                        ret = new NoteItem(Pitch.As, octave, length_1);
                        break;
                    case "a":
                        ret = new NoteItem(Pitch.A, octave, length_1);
                        break;
                    case "ais":
                        ret = new NoteItem(Pitch.Ais, octave, length_1);
                        break;
                    case "b":
                        ret = new NoteItem(Pitch.B, octave, length_1);
                        break;
                    case "h":
                        ret = new NoteItem(Pitch.H, octave, length_1);
                        break;
                    case "his":
                        ret = new NoteItem(Pitch.His, octave, length_1);
                        break;
                }
            }
            return ret;
        };
        this.ParseAndDraw = function (text) {
            var drawIndex = 0;
            var index = 0;
            while (0 <= index) {
                var result = _this.Parse(text, index);
                if (result == null) {
                    break;
                }
                if (result.Item instanceof NoteItem) {
                    _this.DrawNote(drawIndex, 0, result.Item);
                    ++drawIndex;
                }
                index = result.NextIndex;
            }
        };
        this.Clear = function () { _this._draw.clear(); };
        this._draw = SVG(id).size(210 * 3, 297 * 3);
        // let delta = 0;
        // this._draw.on("wheel", (event: WheelEvent) => {
        //     let deltaY2: number = event.deltaY ? -(event.deltaY) : event.wheelDelta ? event.wheelDelta : -(event.detail);
        //     delta += deltaY2 * 10;
        //     if (delta < -8000) {
        //         delta = -8000;
        //     }
        //     else if (10000 < delta) {
        //         delta = 10000;
        //     }
        //     const scale = 1 + delta * 0.0001;
        //     this._draw.animate(100).scale(scale, scale, 0, 0);
        // });
        // let dragAction: (newX: number, newY: number) => void = null;
        // this._draw.on("mousedown", (event: MouseEvent) => {
        //     const startPoint: { x: number; y: number } = { x: this._draw.x(), y: this._draw.y() };
        //     const downPoint: { x: number; y: number } = { x: event.x, y: event.y };
        //     dragAction = (newX, newY) => {
        //         let offsetX = downPoint.x - newX;
        //         let offsetY = downPoint.y - newY;
        //         this._draw.move(startPoint.x + offsetX, startPoint.y + offsetY);
        //         console.log(startPoint.x + offsetX);
        //     };
        //     console.log("mousedown");
        // });
        // this._draw.on("mousemove", (event: MouseEvent) => {
        //     if (dragAction != null)
        //         dragAction(event.x, event.y);
        //     console.log("mousemove");
        //     // console.log(event.x + "   " + event.clientX + "   " + event.layerX + "   " + event.movementX + "   " + event.offsetX  + "   " + event.pageX  + "   " + event.screenX);
        // });
        // this._draw.on("mouseup", (event: MouseEvent) => {
        //     dragAction = null;
        //     console.log("mouseup");
        // });
        // this._draw.on("click", (event: Event) => {
        //     this._draw.x(100);
        //     console.log("click");
        // });
    }
    return Score;
}());
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
var ItemBase = (function () {
    function ItemBase() {
    }
    return ItemBase;
}());
var NoteItem = (function (_super) {
    __extends(NoteItem, _super);
    function NoteItem(pitch, octave, length) {
        var _this = _super.call(this) || this;
        _this._pitch = pitch;
        _this._octave = octave;
        _this._length = length;
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
    return NoteItem;
}(ItemBase));
//# sourceMappingURL=texcore.js.map