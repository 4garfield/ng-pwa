import { Observable } from 'rxjs/Observable';

export class SwPushMockService {
  public messages: Observable<object>;
  public subscription: Observable<PushSubscription | null>;

  public requestSubscription(options: { serverPublicKey: string }): Promise<PushSubscription> {
    return new Promise((resolve) => resolve());
  }

  public unsubscribe(): Promise<void> {
    return new Promise((resolve) => resolve());
  }
}
