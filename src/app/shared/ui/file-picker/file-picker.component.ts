import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
	selector: 'gherkin-step-definition-generator-file-picker',
	templateUrl: './file-picker.component.html',
	styleUrls: ['./file-picker.component.scss'],
})
export class FilePickerComponent {

	@Input() acceptFileTypes: string | undefined
	@Input() buttonLabel = 'Choose file'
	@Input() buttonColor = 'primary'

	@ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>

	@Output() fileSelected = new EventEmitter()


	toggleInput() {
		this.fileInput.nativeElement.click()
	}

	async onFileSelected(event: any) {
		const { files } = event.target
		console.log('file', files[0])
		console.log('text', await files[0].text())
	}

}
