import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-bar',
  standalone: true,
  imports: [],
  templateUrl: './bar.component.html',
  styleUrl: './bar.component.css',
})
export class BarComponent {
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
