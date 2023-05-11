class Panel {
    constructor(border, font, color, content) {
        this._border = border;
        this._font = font;
        this._color = color;
        this._content = content;
    }

    toString() {
        return `
        <div style='border:${this._border};font:${this._font};color:${this._color};'>
            ${this._content}
        </div>
        `;
    }
}