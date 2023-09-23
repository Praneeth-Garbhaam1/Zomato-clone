import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private isDialogVisible = false;

  toggleDialog() {
    this.isDialogVisible = !this.isDialogVisible;
  }

  getDialogState() {
    return this.isDialogVisible;
  }
}
