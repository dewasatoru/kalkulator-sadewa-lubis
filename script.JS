class Calculator {
    constructor(displayId) {
        this.display = document.querySelector(displayId);
        this.buttons = document.querySelectorAll("button");
        this.displayText = "";

        //tembah ivent listener setiap tombol//
        this.buttons.forEach((item) => {
            item.onclick = () => {
                this.handleButtonClick(item.id);
            };
        });
    }

    handleButtonClick(buttonId) {
        switch (buttonId) {
            case "clear":
                this.clearDisplay();
                break;
            case "backspace":
                this.backspace();
                break;
            case "equal":
                this.calculate();
                break;
            default:
                this.updateDisplay(buttonId);
                break;
        }
    }

    clearDisplay() {
        this.displayText = "";
        this.updateDisplay();
    }



    backspace() {
        this.displayText = this.displayText.slice(0, -1);
        this.updateDisplay();
    }


    calculate() {
        if (this.displayText != "") {

            this.displayText = this.displayText.replace(/%/g, '*0.01*');

            this.displayText = eval(this.displayText);

            this.updateDisplay();
        } else {
            this.displayText = "Empty!";
            this.updateDisplay();
            setTimeout(() => {
                this.clearDisplay();
            }, 2000);
        }
    }


    updateDisplay(value) {
        if (value !== undefined) {
            this.displayText += value;
        }
        this.display.innerText = this.displayText;
    }
}

const calculator = new Calculator("#display");
