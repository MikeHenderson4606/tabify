import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { GlobalState } from '../types';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  public globalState = new BehaviorSubject<GlobalState>({
    selectedTab: '',
    artistName: '',
    songName: ''
  });

  public loggedInState = new BehaviorSubject<boolean>(false);

  constructor() { }
}
