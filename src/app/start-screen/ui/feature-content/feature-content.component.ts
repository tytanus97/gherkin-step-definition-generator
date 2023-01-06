import hljs from 'highlight.js';
import { featureFileContent$ } from './../../state/feature.selectors';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { FeatureState } from '../../state/feature.state';
import { Observable } from 'rxjs';
import gherkin from 'highlight.js/lib/languages/gherkin';

@Component({
  selector: 'gherkin-step-definition-generator-feature-content',
  templateUrl: './feature-content.component.html',
  styleUrls: ['./feature-content.component.scss'],
})
export class FeatureContentComponent implements OnInit {

  featureTextContent$: Observable<string>

  constructor(private readonly store: Store<FeatureState>) {

  }
  ngOnInit(): void {
    this.featureTextContent$ = this.store.select(featureFileContent$)
  }
}
