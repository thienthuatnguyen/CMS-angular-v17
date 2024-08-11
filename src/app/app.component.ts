import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './share_components/header/header.component';
import { NotFoundComponent } from './share_components/404/not-found.component';
import { BusyService } from './core/busy.service';
import { delay } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, NotFoundComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  busy = false;

  constructor(private busyService: BusyService, private http: HttpClient) {
    this.busyService.busyState$.pipe(delay(0)).subscribe((bs) => (this.busy = bs.isBusy));

    // this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe({
    //   next: data => { 
    //     console.log(data);
    //   },
    //   error: error => {
    //     console.error('Error getting post:', error);
    //   }
    // });

    // busyService.busyState$
    //   // asapScheduler ensures this is async; remove this and look in console to see nasty error without this
    //   // ExpressionChangedAfterItHasBeenCheckedError
    //   .pipe(observeOn(asapScheduler))
    //   .subscribe((bs) => (this.busy = bs.isBusy));
  }
}
