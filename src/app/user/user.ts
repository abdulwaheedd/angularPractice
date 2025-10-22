import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user',
  imports: [FormsModule],
  templateUrl: './user.html',
  styleUrl: './user.scss',
})
export class User {
  name: string = 'Ahmad';
  email: string = 'Ahmad@gmail.com';
  random = '';
  onSave() {
    alert('User saved successfully!');
  }
}
