import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Action } from '../../utils/action';
import { GeneratorActionsCreatorService } from '../../utils/generatorActionsCreator.service';

@Component({
  selector: 'gherkin-step-definition-generator-generator-actions',
  templateUrl: './generator-actions.component.html',
  styleUrls: ['./generator-actions.component.scss'],
})
export class GeneratorActionsComponent implements OnInit {

  actions$: Observable<Action[]>

  constructor(private readonly generatorActionsCreatorService: GeneratorActionsCreatorService) { }

  ngOnInit(): void {
    this.actions$ = this.generatorActionsCreatorService.getGeneratorActions()
  }


}
