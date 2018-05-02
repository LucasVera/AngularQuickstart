import { Injectable } from '@angular/core';
import { Hero } from './Hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

// (TODO): change for promise-based (axios?)
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroesObservable(): Observable<Hero[]> {
    this.messageService.add('heroService: fetched heroes');
    return of(HEROES);
  }

  getHeroObservable(id: number): Observable<Hero> {
    this.messageService.add(`heroService: fetche hero with id: ${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
}
