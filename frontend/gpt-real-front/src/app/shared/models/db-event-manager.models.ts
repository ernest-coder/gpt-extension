import {debounceTime, merge, mergeMap, Observable, repeat, Subject, takeWhile, tap} from "rxjs";

export class DBEventManager {
  private _subject = new Subject<string>()
  public obs = this._subject.asObservable().pipe(debounceTime(10))

  next(event_name: string): void {
    this._subject.next(event_name)
  }

  attachEvent<T>(api_obs: Observable<T>, event_key: string): Observable<T> {
    return api_obs.pipe(tap(x => this.next(event_key)))
  }

  attachObs<T>(api_obs: Observable<T>): Observable<T> {
    const onEventObs = this.obs.pipe(mergeMap((x) => api_obs))
    return merge(api_obs, onEventObs)
  }
}

export function makeRepeatObservableWhileTrue<T>(obs: Observable<T>, f_repeat_while_true: (value: T) => boolean): Observable<T> {
  return obs.pipe(
    repeat({ count: 600, delay: 2000 }),
    takeWhile(f_repeat_while_true, true),
  )
}
