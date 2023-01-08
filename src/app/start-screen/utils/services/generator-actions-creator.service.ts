import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Action } from '../interfaces/action';

@Injectable()
export class GeneratorActionsCreatorService {

  constructor(private readonly) {

  }

  getGeneratorActions(): Observable<Action[]> {
    return of(null)
  }
}
