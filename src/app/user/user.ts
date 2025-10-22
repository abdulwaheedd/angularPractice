import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.scss',
})
export class User {
  name: string = 'Ahmad';
  email: string = 'Ahmad@gmail.com';
  onSave() {
    alert('User saved successfully!');
  }
}
