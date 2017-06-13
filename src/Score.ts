class Score {

    private _centerHeight: number = 50;
    private _staffInterval: number = 100;
    private _distance: number = 10;

    private _intervalNote: number = 35;
    private _startXNote: number = 60;

    private _draw: SVG.Doc;

    public toString = (): string => {
        return this._draw.toString();
    };

    constructor(id: string) {
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

    public DrawFrame = () => {
        const width = this._draw.width();
        const height = this._draw.height();

        this._draw.rect(width, height).attr({ fill: '#fff', 'fill-opacity': 0.0, stroke: "#000", 'stroke-width': 2 });//.fill({color:'#00f',opacity:0.5});//.stroke({color:'#00f',width:2,opacity:0.5});
    }

    public DrawSharpe = (index: number, staffInterval: number, y: number, offsetX?: number) => {
        let centerHeight = this._centerHeight + staffInterval * this._staffInterval;

        let centerX = this._startXNote + this._intervalNote * index + (offsetX ? offsetX : 0);
        let centerY = centerHeight + this._distance * y;

        let sharpeSvg = Images.GetSharpe();

        this._draw.svg(sharpeSvg.svg);

        let doc = SVG.get(sharpeSvg.svgId);

        doc.size(30, 30);
        doc.center(centerX, centerY);
    }

    public DrawFlat = (index: number, staffInterval: number, y: number, offsetX?: number) => {
        let centerHeight = this._centerHeight + staffInterval * this._staffInterval;

        let centerX = this._startXNote + this._intervalNote * index + (offsetX ? offsetX : 0);
        let centerY = centerHeight + this._distance * y - 7;

        let flatSvg = Images.GetFlat();

        this._draw.svg(flatSvg.svg);

        let doc = SVG.get(flatSvg.svgId);

        doc.size(30, 30);
        doc.center(centerX, centerY);
    }

    private DrawNoteBase = (index: number, staffInterval: number, height: number) => {

        let centerHeight = this._centerHeight + staffInterval * this._staffInterval;

        let centerX = this._startXNote + this._intervalNote * index;
        let centerY = centerHeight + this._distance * height;

        let radiusX = this._distance * 0.5 * 1.1;
        let radiusY = this._distance * 0.5 * 0.8;

        this._draw.ellipse(radiusX * 2, radiusY * 2).move(centerX - radiusX, centerY - radiusY).fill('#000');

        let thikness = 2;
        this._draw.line(centerX + radiusX - thikness + 1, centerY, centerX + radiusX - thikness + 1, centerY - 30).stroke({ width: 2 });
    };

    public DrawNote = (index: number, staffInterval: number, noteItem: NoteItem) => {

        if (noteItem == null) {
            return;
        }

        let height = 0;
        let variant = 0;
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

        this.DrawNoteBase(index, staffInterval, height);

        if (noteItem.PitchMarck == PitchMarck.Flat) {
            this.DrawFlat(index, staffInterval, height, -12);
        }
        else if (noteItem.PitchMarck == PitchMarck.Sharpe) {
            this.DrawSharpe(index, staffInterval, height, -12);
        }

    };

    public DrawNotes = (noteItems: NoteItem[]) =>{

        let callBack = (value:NoteItem,index:number,array:NoteItem[])=>{
            
        };
        noteItems.forEach(callBack);
    };

    public DrawMeasure = (index: number, staffInterval: number) => {
        let centerHeight = this._centerHeight + this._staffInterval * staffInterval;

        let centerX = this._startXNote + this._intervalNote * index - this._intervalNote * 0.55;

        let upperY = centerHeight + this._distance * -2;
        let lowerY = centerHeight + this._distance * 2;

        this._draw.line(centerX, upperY, centerX, lowerY).stroke({ width: 1 });
    }

    public DrawStaff = (staffInterval: number) => {
        let left = 0;
        let right: number = this._draw.width();

        let centerHeight = this._centerHeight + this._staffInterval * staffInterval;

        this._draw.line(left, centerHeight + this._distance * -2, right, centerHeight + this._distance * -2).stroke({ width: 0.5 });

        this._draw.line(left, centerHeight + this._distance * -1, right, centerHeight + this._distance * -1).stroke({ width: 0.5 });

        this._draw.line(left, centerHeight + this._distance * 0, right, centerHeight + this._distance * 0).stroke({ width: 0.5 });

        this._draw.line(left, centerHeight + this._distance * 1, right, centerHeight + this._distance * 1).stroke({ width: 0.5 });

        this._draw.line(left, centerHeight + this._distance * 2, right, centerHeight + this._distance * 2).stroke({ width: 0.5 });
    };

    public DrawClef = (staffInterval: number) => {

        const centerY = this._centerHeight + this._staffInterval * staffInterval;
        const centerX = 20;

        const offsetY = -2.5;
        const offsetX = 0;

        const svgImage = Images.GetTrebleClef();
        this._draw.svg(svgImage.svg);
        const svg = SVG.get(svgImage.svgId);
        svg.size(70, 70);
        svg.center(centerX + offsetX, centerY + offsetY);
    }

    public Parse = (text: string, index: number): ParseResult => {

        if (index < 0) {
            return null;
        }

        const maxIndex = text.length - 1;
        let parseText = "";
        let keyword = "";
        let charactor = "";

        let item: ItemBase = null;
        let nextIndex: number = -1;

        for (let i = index; i <= maxIndex; ++i) {
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
            item = this.ParseKeyword(keyword);
        }

        if (parseText == "") {
            return null;
        }
        else {
            return new ParseResult(item, parseText, index, nextIndex);
        }
    };

    private ParseKeyword = (keyword: string): ItemBase => {
        let ret: ItemBase = null;

        const regular = /^((ces|c|cis|des|d|dis|es|e|eis|fes|f|fis|ges|g|gis|as|a|ais|b|h|his)|(ces|c|cis|des|d|dis|es|e|eis|fes|f|fis|ges|g|gis|as|a|ais|b|h|his)(((\+|\-)\d*)|([/]\d)|((\+|\-)\d*)([/]\d)|(([/]\d)(\+|\-)\d*)))$/i;

        if (regular.test(keyword)) {
            const pitch = /(ces|cis|c|des|dis|d|es|eis|e|fes|fis|f|ges|gis|g|as|ais|a|b|his|h)/i.exec(keyword)[0];

            let octave: number = 0;
            let tmp = /(\+|\-)\d*/.exec(keyword);
            if (tmp != null) {
                if (tmp[0] == "+")
                    octave = 1;
                else if (tmp[0] == "+")
                    octave = -1;
                else
                    octave = Number(tmp[0])
            }

            let length: number = 4;
            tmp = /([/]\d)/.exec(keyword);
            if (tmp != null) {
                length = Number(tmp[0].substr(1));
            }

            switch (pitch.toLowerCase()) {
                case "ces":
                    ret = new NoteItem(Pitch.Ces, octave, length,PitchMarck.Flat);
                    break;
                case "c":
                    ret = new NoteItem(Pitch.C, octave, length,PitchMarck.None);
                    break;
                case "cis":
                    ret = new NoteItem(Pitch.Cis, octave, length,PitchMarck.Sharpe);
                    break;
                case "des":
                    ret = new NoteItem(Pitch.Des, octave, length,PitchMarck.Flat);
                    break;
                case "d":
                    ret = new NoteItem(Pitch.D, octave, length,PitchMarck.None);
                    break;
                case "dis":
                    ret = new NoteItem(Pitch.Dis, octave, length,PitchMarck.Sharpe);
                    break;
                case "es":
                    ret = new NoteItem(Pitch.Es, octave, length,PitchMarck.Flat);
                    break;
                case "e":
                    ret = new NoteItem(Pitch.E, octave, length,PitchMarck.None);
                    break;
                case "eis":
                    ret = new NoteItem(Pitch.Eis, octave, length,PitchMarck.Sharpe);
                    break;
                case "fes":
                    ret = new NoteItem(Pitch.Fes, octave, length,PitchMarck.Flat);
                    break;
                case "f":
                    ret = new NoteItem(Pitch.F, octave, length,PitchMarck.None);
                    break;
                case "fis":
                    ret = new NoteItem(Pitch.Fis, octave, length,PitchMarck.Sharpe);
                    break;
                case "ges":
                    ret = new NoteItem(Pitch.Ges, octave, length,PitchMarck.Flat);
                    break;
                case "g":
                    ret = new NoteItem(Pitch.G, octave, length,PitchMarck.None);
                    break;
                case "gis":
                    ret = new NoteItem(Pitch.Gis, octave, length,PitchMarck.Sharpe);
                    break;
                case "as":
                    ret = new NoteItem(Pitch.As, octave, length,PitchMarck.Flat);
                    break;
                case "a":
                    ret = new NoteItem(Pitch.A, octave, length,PitchMarck.None);
                    break;
                case "ais":
                    ret = new NoteItem(Pitch.Ais, octave, length,PitchMarck.Sharpe);
                    break;
                case "b":
                    ret = new NoteItem(Pitch.B, octave, length,PitchMarck.Flat);
                    break;
                case "h":
                    ret = new NoteItem(Pitch.H, octave, length,PitchMarck.None);
                    break;
                case "his":
                    ret = new NoteItem(Pitch.His, octave, length,PitchMarck.Sharpe);
                    break;
            }
        }



        return ret;
    }

    public ParseAndDraw = (text: string) => {

        let drawIndex = 0;
        let index = 0;
        while (0 <= index) {
            let result = this.Parse(text, index);

            if (result == null) {
                break;
            }

            if (result.Item instanceof NoteItem) {
                this.DrawNote(drawIndex, 0, result.Item);
                ++drawIndex;

                if(drawIndex % 4 == 0)
                {
                    this.DrawMeasure(drawIndex,0);
                }
            }

            index = result.NextIndex;
        }
    };

    public Clear = () => { this._draw.clear(); }
}