import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { QuillModule } from 'ngx-quill'
import { StartScreenModule } from './start-screen/start-screen.module'
import { AppRoutingModule } from './app.routing.module'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    QuillModule.forRoot(),
    StartScreenModule,
    AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
