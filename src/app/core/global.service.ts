import { Injectable } from '@angular/core';
import { BehaviorSubject, distinctUntilChanged, map, of } from 'rxjs';
export interface User {
  name: string
}
export interface GlobalAppState {
  users: User[];
  isSidePanelOpen: boolean;
  isLoading: boolean;
  userLanguage: string;
}

export const initGlobalAppState: GlobalAppState = {
  users: [],
  isSidePanelOpen: false,
  isLoading: false,
  userLanguage: 'en'
}

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  private _globalAppStore = new BehaviorSubject<GlobalAppState>(initGlobalAppState);
  private _stateHistory: { action: string, state: GlobalAppState }[] = [];

  appState$ = this._globalAppStore.asObservable();

  loader$ = this._globalAppStore.pipe(
    map(v => v.isLoading),
    distinctUntilChanged()
  );

  language$ = this._globalAppStore.pipe(
    map(v => v.userLanguage),
    distinctUntilChanged()
  );

  _userSubj = new BehaviorSubject([]);
  _userLanguage = new BehaviorSubject('en');
  _loaderSubj = new BehaviorSubject(false);
  _sidePanelOpenSubj = new BehaviorSubject(false);

  constructor() { }

  setState(actionName: string, payload: Partial<GlobalAppState>) {
    const currentState = this._globalAppStore.value;
    const newState = { ...currentState, ...payload };
    this._globalAppStore.next(newState)
    this._stateHistory.push({ action: actionName, state: newState});
    console.log(this._stateHistory)
  }


  loadUsersAction() {
    this.setState('LOAD_USERS', { isLoading: true})
    // mock loading users
    of([{ name: 'Alojzy'}]).subscribe((u: User[]) => this.setState('LOAD_USERS_SUCCESS', { isLoading: false, users: u}));
  }

}
