class NoteItem extends ItemBase {
    private _pitch: Pitch;
    private _octave: number;
    private _length: number;
    private _pitchMarck:PitchMarck;

    public get Pitch(): Pitch { return this._pitch; }
    public get Octave(): number { return this._octave; }
    public get Length(): number { return this._length; }
    public get PitchMarck():PitchMarck{return this._pitchMarck;}

    constructor(pitch: Pitch, octave: number, length: number,pitchMarck:PitchMarck) {
        super();

        this._pitch = pitch;
        this._octave = octave;
        this._length = length;
        this._pitchMarck = pitchMarck;
    }
}