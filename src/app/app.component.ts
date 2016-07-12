import { Component } from '@angular/core';
import { SearchComponent } from './search';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [SearchComponent]
})
export class AppComponent {
  title = 'app works!';
}
