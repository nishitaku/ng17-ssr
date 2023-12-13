import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  private readonly http = inject(HttpClient);

  uuid = '';

  ngOnInit(): void {
    this.http
      .get('https://www.uuidtools.com/api/generate/v4/count/1')
      .subscribe((uuid: any) => {
        this.uuid = uuid;
      });
  }
}
