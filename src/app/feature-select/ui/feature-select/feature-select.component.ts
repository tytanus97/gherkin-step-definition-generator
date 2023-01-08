import { featureFile$, featureFileContent$ } from '../../state/feature.selectors';
import { FeatureState } from '../../state/feature.state';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadFeatureFile } from '../../state/feature.actions';
import { map, Observable } from 'rxjs';

@Component({
	selector: 'gherkin-step-definition-generator-feature-select',
	templateUrl: './feature-select.component.html',
	styleUrls: ['./feature-select.component.scss'],
})
export class FeatureSelectComponent implements OnInit {

	chooseFileLabel$: Observable<string>
	featureTextContent$: Observable<string>
	featureFileName$: Observable<string>

	constructor(private readonly featureStore: Store<FeatureState>) { }
	ngOnInit(): void {
		this.chooseFileLabel$ = this.featureStore.select(featureFile$).pipe(map(file => !file ? 'Choose feature file' : 'Change file'))
		this.featureTextContent$ = this.featureStore.select(featureFileContent$)
		this.featureFileName$ = this.featureStore.select(featureFile$).pipe(map((file: File) => file?.name || ''))

	}

	async onFileSelected(file: any) {
		const featureFilePath = file.path
		const featureFileContent = await file.text()
		const featureFile = file

		this.featureStore.dispatch(loadFeatureFile({ featureFile, featureFilePath, featureFileContent }))
	}


}