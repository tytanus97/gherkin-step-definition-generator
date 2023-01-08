import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppComponent } from './app.component'
import { StoreModule } from '@ngrx/store'
import hljs from 'highlight.js'
import gherkin from 'highlight.js/lib/languages/gherkin'
import { QuillModule } from 'ngx-quill'
import { CoreModule } from './core/core.module'
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot(),
    QuillModule.forRoot(),
    CoreModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {

  constructor() {
    hljs.registerLanguage('gherkin', gherkin)
  }
}
