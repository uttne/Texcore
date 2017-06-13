class ParseResult {
    private _item: ItemBase;
    private _parseText: string;
    private _index: number;
    private _nextIndex: number;

    public get Item(): ItemBase { return this._item; }
    public get ParseText(): string { return this._parseText; }
    public get Index(): number { return this._index; }
    public get NextIndex(): number { return this._nextIndex; }

    constructor(item: ItemBase, parseText: string, index: number, nextIndex: number) {
        this._item = item;
        this._parseText = parseText;
        this._index = index;
        this._nextIndex = nextIndex;
    }
}