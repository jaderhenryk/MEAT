import { animate, state, style, trigger, transition } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { switchMap, tap, timer } from 'rxjs';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'mt-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss'],
  animations: [
    trigger('snack-visibility', [
      state('hidden', style({
        opacity: 0,
        bottom: '0px'
      })),
      state('visible', style({
        opacity: 0.8,
        bottom: '30px'
      })),
      transition('hidden => visible', animate('500ms 0s ease-in')),
      transition('visible => hidden', animate('500ms 0s ease-out')),
    ])
  ]
})
export class SnackbarComponent implements OnInit {

  message = 'Hello!';
  snackVisibility = 'hidden';
  
  constructor(private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.notificationService.notifier.pipe(
      tap(message => {
        this.message = message;
        this.snackVisibility = 'visible';
      }),
      switchMap( () => timer(3000))
    ).subscribe( () => this.snackVisibility = 'hidden');
  }
}
