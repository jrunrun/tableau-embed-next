import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="max-w-md mx-auto mt-20 p-6 border rounded shadow">
      <h2 class="text-xl font-semibold mb-4">Login</h2>
      <form>
        <input type="text" placeholder="Username" class="w-full mb-4 p-2 border rounded" />
        <input type="password" placeholder="Password" class="w-full mb-4 p-2 border rounded" />
        <button type="submit" class="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">Log in</button>
      </form>
    </div>
  `,
  styles: []
})
export class LoginComponent {} 