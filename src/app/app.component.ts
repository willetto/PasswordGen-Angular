import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  passLength = 6;
  includeLetters = true;
  includeNumbers = false;
  includeSymbols = false;
  password = '';
  //
  onLengthInput(event: Event) {
    const target = event.target as HTMLInputElement;
    const parsedValue = parseInt(target.value);
    if (parsedValue) this.passLength = parsedValue;
  }
  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters;
  }
  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }
  onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols;
  }
  //
  onButtonClick() {
    const numbers = '1234567890';
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqurtuvwxyz';
    const symbols = '!@#$%^&*()';

    let validChars = '';
    if (this.includeLetters) {
      validChars += letters;
    }
    if (this.includeNumbers) {
      validChars += numbers;
    }
    if (this.includeSymbols) {
      validChars += symbols;
    }
    let generatedPassword = '';

    for (let i = 0; i < this.passLength; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
      this.password = generatedPassword;
    }
  }
}
