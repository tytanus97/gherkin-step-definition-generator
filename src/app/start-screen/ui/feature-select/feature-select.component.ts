import { Component } from '@angular/core';

@Component({
	selector: 'gherkin-step-definition-generator-feature-select',
	templateUrl: './feature-select.component.html',
	styleUrls: ['./feature-select.component.scss'],
})
export class FeatureSelectComponent {


	onFileSelected(file: any) {
		console.log('file', file);
	}
}
