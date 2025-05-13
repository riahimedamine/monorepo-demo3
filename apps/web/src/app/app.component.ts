import { Component } from '@angular/core';
import { shared } from '@app/shared';
@Component({
    selector: 'app-root',
    imports: [],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
})
export class AppComponent {
    shared = shared;
}
