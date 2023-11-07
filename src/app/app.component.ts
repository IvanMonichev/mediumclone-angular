import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [],
})
export class AppComponent {
  foo(): string {
    return ''
  }

  bar(): void {
    const bar = this.foo()
  }
}
