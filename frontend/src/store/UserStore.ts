import { makeAutoObservable } from 'mobx';

export default class UserStore {
  private _isAuth: boolean;
  private _user: {};

  constructor() {
    this._isAuth = false;
    this._user = {};
    makeAutoObservable(this);
  }

  setIsAuth(bool: boolean): void {
    this._isAuth = bool;
  }

  setUser(user: {}): void {
    this._user = user;
  }

  get isAuth(): boolean {
    return this._isAuth;
  }

  get user(): {} {
    return this._user;
  }
}
