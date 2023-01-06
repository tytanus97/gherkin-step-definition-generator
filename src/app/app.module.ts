import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppComponent } from './app.component'
import { StartScreenModule } from './start-screen/start-screen.module'
import { AppRoutingModule } from './app.routing.module'
import { StoreModule } from '@ngrx/store'
import hljs from 'highlight.js'
import gherkin from 'highlight.js/lib/languages/gherkin'
import { QuillModule } from 'ngx-quill'
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot(),
    StartScreenModule,
    AppRoutingModule,
    QuillModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {

  constructor() {
    hljs.registerLanguage('gherkin', gherkin)
  }
}
