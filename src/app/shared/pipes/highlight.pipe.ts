import { Pipe, PipeTransform } from '@angular/core';
import hljs from 'highlight.js';

@Pipe({
  name: 'highlight'
})
export class HighlightPipe implements PipeTransform {

  transform(textToHighlight: string, language: 'gherkin'): string {
    return hljs.highlight(language, textToHighlight).value.replaceAll('\n', '<br>')
  }
}
