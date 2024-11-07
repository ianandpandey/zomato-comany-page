import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ComponentNavigationService {


  private selectedTabSubject = new BehaviorSubject<string>('');


  public selectedTab$ = this.selectedTabSubject.asObservable()

  constructor() { }


  updateSelectedTab(newValue: string): void {
    this.selectedTabSubject.next(newValue);
  }
}
