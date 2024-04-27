import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { DEFAULT_URL_CFG } from './core/injection-tokens/injection-token-configurations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    HttpClientModule
  ],
  providers: [
    { provide: DEFAULT_URL_CFG, useValue: { composeUrl: (endpoint: string, token: string = "YOUR_API_URL") => `${token}/${endpoint}` } },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
