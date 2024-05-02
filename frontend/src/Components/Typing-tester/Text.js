import React from "react";

class Text {
    constructor(text) {
        this.text = text;
        this.length = text.length;

        this.textUncompleted = text;
        this.textCompleted = "";
        this.textError = "";

        this.currentPosition = 0;
        this.endPosition = this.textUncompleted.length - 1;

        this.isWrong = false;
        this.isCompleted = false;
    };


    loadText(text) {
        this.text = text;
        this.length = text.length;

        this.textUncompleted = text;
        this.textError = "";
        this.textCompleted = "";
    };

    addChar(line) {

        if (this.isCompleted) return;

        if (this.currentPosition === 0) this.start = new Date();

        let correctLine = "";
        let incorrectLine = "";

        let isError = false;

        for (let i in line) {
            if (this.text[i] === undefined) {
                incorrectLine += "*";
                continue;
            };
            if (line[i] === this.text[i] && !isError) correctLine += line[i]
            else {
                incorrectLine += this.text[i];
                isError = true;
            };
        };

        this.textCompleted = correctLine;
        this.textError = incorrectLine;
        this.textUncompleted = this.text.replace(this.textCompleted + this.textError.split("*")[0], "");

        if (this.textUncompleted.length === 0 && this.textError.length === 0) { //if text is done
            this.end = new Date()
            this.isCompleted = true;
        };

        this.currentPosition = this.textCompleted.length;
    };

    getJsx() {
        return (
            <div className="TypingTester-Workplace-Text unselectable">
                <span className="TypingTester-Workplace-Text-Completed">{this.textCompleted}</span>
                <span className="TypingTester-Workplace-Text-Error">{this.textError}</span>
                <span className="TypingTester-Workplace-Text-Uncompleted">{this.textUncompleted}</span>
            </div>
        );
    };

    getStats() {
        const time = (this.end - this.start) / 1000;
        const spm = this.length / time * 60;

        return {
            time: time.toFixed(1),
            spm: spm.toFixed(1),
            wpm: (spm / 5).toFixed(1)
        };
    };
};

export default Text;