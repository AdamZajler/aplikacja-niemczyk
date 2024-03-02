import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-logowanie',
  templateUrl: './logowanie.component.html',
  styleUrl: './logowanie.component.scss',
  standalone: true,
  imports: [FormsModule]
})
export class LogowanieComponent {

  formData = {
    username: '',
    password: ''
  };

  logowanie() {
    if (this.formData.username === 'przykładowyUzytkownik' && this.formData.password === 'przykladoweHaslo') {
      console.log('Zalogowano pomyślnie');
    } else {
      console.log('Błąd logowania. Sprawdź dane.');
    }
  }
}
