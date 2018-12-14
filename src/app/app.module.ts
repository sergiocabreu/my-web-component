import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';
import { MyCustomElementComponent } from './my-custom-element/my-custom-element.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [MyCustomElementComponent]
})
export class AppModule {
  constructor(private injector: Injector) {}
    ngDoBootstrap() {
      const el = createCustomElement(MyCustomElementComponent, { injector: this.injector });
      customElements.define('app-my-custom-element', el);
 }
}
