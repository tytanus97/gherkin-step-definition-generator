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

	onFileSelected(event: Event) {
		const { files } = event.target as HTMLInputElement
		const featureFile: File | null = files ? files[0] : null
		this.fileSelected.emit(featureFile)
	}

}
