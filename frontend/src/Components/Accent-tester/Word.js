import React from "react";

export default class Word {
    constructor(dictionary, update) {
        this.update = update;
        this.success = 0;
        this.error = 0;
        this.isSolving = true;
        this.dictionary = dictionary;
        this.setVowels();
        this.generate();
    };

    generate() {
        if (this.success + this.error > 0) this.removeWord();
        this.setRandomWord();
        this.setAccent();
        this.setFragmentedWord();
    };

    setVowels() {
        this.vowels = ['а', 'я', 'у', 'ю', 'о', 'ё', 'е', 'э', 'и', 'ы'];
    };

    setRandomWord() {
        this.dictionary_length = this.dictionary.length;
        if (!this.dictionary_length) return;
        this.word_index = Math.floor(Math.random() * this.dictionary_length);
        this.word = this.dictionary[this.word_index].word;
        this.pretty_word = this.word.toLocaleLowerCase();
    };

    removeWord() {
        this.dictionary.splice(this.word_index, 1);
    };

    setAccent() {
        for (let i in this.word) {
            if (this.vowels.find(letter => (letter.toUpperCase() === this.word[i]))) {
                this.accent = i;
                break;
            };
        };
    };

    setFragmentedWord() {
        this.fragments = [];
        this.variants = [];
        let fragment = "";
        for (let i in this.pretty_word) {
            if (this.vowels.find(letter => (letter === this.pretty_word[i].toLowerCase()))) {
                if (fragment) this.fragments.push(fragment);
                this.variants.push(i);
                fragment = "";

                this.fragments.push(this.pretty_word[i]);
                if (i === this.accent) this.fragments_correct = this.fragments.length - 1;
            } else {
                fragment += this.pretty_word[i];
            };
        };
        if (fragment) this.fragments.push(fragment);
    };

    handler(answ, evt) {
        if (!this.isSolving) return;
        this.isSolving = false;

        evt.target.classList.add("incorrect");
        const fragments = document.getElementsByClassName("AccentTester-Workplace-Word-Fragment");
        fragments[this.fragments_correct].classList.remove("incorrect");
        fragments[this.fragments_correct].classList.add("correct");

        let delay = 1000;
        if (answ) this.success++;
        else {
            this.error++;
            delay = 2000;
        }

        setTimeout(() => {
            for (let i = 0; i < fragments.length; i++) fragments[i].classList.remove("incorrect", "correct");
            this.generate();
            this.update(this.success + this.error);
            this.isSolving = true;
        }, delay);
    }

    returnWrapper(fragment, index) {
        if (this.vowels.find(el => (el === fragment))) return <button key={index} onClick={this.fragments_correct === index ? evt => this.handler(true, evt) : evt => this.handler(false, evt)} className="AccentTester-Workplace-Word-Fragment AccentTester-Workplace-Word-Fragment-Vowel">{fragment}</button>
        else return <span key={index} className="AccentTester-Workplace-Word-Fragment">{fragment}</span>
    };

    getJsx() {
        return (
            <div className="AccentTester-Workplace">
                <div className="AccentTester-Workplace-Word">
                    {this.dictionary_length ? this.fragments.map((el, index) => (this.returnWrapper(el, index))) : <span className="AccentTester-Workplace-Word-Congrats">Поздравляем, все слова проработаны 👍</span>}
                </div>
                <span className="AccentTester-Workplace-Stats">{this.error + this.success !== 0 ? (this.success / (this.error + this.success) * 100).toFixed(2) + "%" : ""}</span>
            </div>
        );
    };
};