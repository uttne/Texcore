var Score = (function () {
    function Score(id) {
        var _this = this;
        this._centerHeight = 50;
        this._staffInterval = 100;
        this._distance = 10;
        this._intervalNote = 35;
        this._startXNote = 60;
        this.toString = function () {
            return _this._draw.toString();
        };
        this.DrawFrame = function () {
            var width = _this._draw.width();
            var height = _this._draw.height();
            _this._draw.rect(width, height).attr({ fill: '#fff', 'fill-opacity': 0.0, stroke: "#000", 'stroke-width': 2 }); //.fill({color:'#00f',opacity:0.5});//.stroke({color:'#00f',width:2,opacity:0.5});
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
            if (noteItem.PitchMarck == PitchMarck.Flat) {
                _this.DrawFlat(index, staffInterval, height, -12);
            }
            else if (noteItem.PitchMarck == PitchMarck.Sharpe) {
                _this.DrawSharpe(index, staffInterval, height, -12);
            }
        };
        this.DrawNotes = function (noteItems) {
            var callBack = function (value, index, array) {
            };
            noteItems.forEach(callBack);
        };
        this.DrawMeasure = function (index, staffInterval) {
            var centerHeight = _this._centerHeight + _this._staffInterval * staffInterval;
            var centerX = _this._startXNote + _this._intervalNote * index - _this._intervalNote * 0.55;
            var upperY = centerHeight + _this._distance * -2;
            var lowerY = centerHeight + _this._distance * 2;
            _this._draw.line(centerX, upperY, centerX, lowerY).stroke({ width: 1 });
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
                        ret = new NoteItem(Pitch.Ces, octave, length_1, PitchMarck.Flat);
                        break;
                    case "c":
                        ret = new NoteItem(Pitch.C, octave, length_1, PitchMarck.None);
                        break;
                    case "cis":
                        ret = new NoteItem(Pitch.Cis, octave, length_1, PitchMarck.Sharpe);
                        break;
                    case "des":
                        ret = new NoteItem(Pitch.Des, octave, length_1, PitchMarck.Flat);
                        break;
                    case "d":
                        ret = new NoteItem(Pitch.D, octave, length_1, PitchMarck.None);
                        break;
                    case "dis":
                        ret = new NoteItem(Pitch.Dis, octave, length_1, PitchMarck.Sharpe);
                        break;
                    case "es":
                        ret = new NoteItem(Pitch.Es, octave, length_1, PitchMarck.Flat);
                        break;
                    case "e":
                        ret = new NoteItem(Pitch.E, octave, length_1, PitchMarck.None);
                        break;
                    case "eis":
                        ret = new NoteItem(Pitch.Eis, octave, length_1, PitchMarck.Sharpe);
                        break;
                    case "fes":
                        ret = new NoteItem(Pitch.Fes, octave, length_1, PitchMarck.Flat);
                        break;
                    case "f":
                        ret = new NoteItem(Pitch.F, octave, length_1, PitchMarck.None);
                        break;
                    case "fis":
                        ret = new NoteItem(Pitch.Fis, octave, length_1, PitchMarck.Sharpe);
                        break;
                    case "ges":
                        ret = new NoteItem(Pitch.Ges, octave, length_1, PitchMarck.Flat);
                        break;
                    case "g":
                        ret = new NoteItem(Pitch.G, octave, length_1, PitchMarck.None);
                        break;
                    case "gis":
                        ret = new NoteItem(Pitch.Gis, octave, length_1, PitchMarck.Sharpe);
                        break;
                    case "as":
                        ret = new NoteItem(Pitch.As, octave, length_1, PitchMarck.Flat);
                        break;
                    case "a":
                        ret = new NoteItem(Pitch.A, octave, length_1, PitchMarck.None);
                        break;
                    case "ais":
                        ret = new NoteItem(Pitch.Ais, octave, length_1, PitchMarck.Sharpe);
                        break;
                    case "b":
                        ret = new NoteItem(Pitch.B, octave, length_1, PitchMarck.Flat);
                        break;
                    case "h":
                        ret = new NoteItem(Pitch.H, octave, length_1, PitchMarck.None);
                        break;
                    case "his":
                        ret = new NoteItem(Pitch.His, octave, length_1, PitchMarck.Sharpe);
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
                    if (drawIndex % 4 == 0) {
                        _this.DrawMeasure(drawIndex, 0);
                    }
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
//# sourceMappingURL=Score.js.map