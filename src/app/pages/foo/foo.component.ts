import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-foo',
  standalone: true,
  imports: [],
  templateUrl: './foo.component.html',
  styleUrl: './foo.component.css',
})
export class FooComponent {
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
