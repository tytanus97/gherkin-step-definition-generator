import { featureFileContent$ } from './../../state/feature.selectors';
import { FeatureState } from './../../state/feature.state';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadFeatureFile } from '../../state/feature.actions';

@Component({
	selector: 'gherkin-step-definition-generator-feature-select',
	templateUrl: './feature-select.component.html',
	styleUrls: ['./feature-select.component.scss'],
})
export class FeatureSelectComponent {

	constructor(private readonly featureStore: Store<FeatureState>) { }



	async onFileSelected(file: any) {
		const featureFilePath = file.path
		const featureFileContent = await file.text()
		const featureFile = file

		this.featureStore.dispatch(loadFeatureFile({ featureFile, featureFilePath, featureFileContent }))
	}
}
