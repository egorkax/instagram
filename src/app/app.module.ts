import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { FormsModule } from '@angular/forms'
import { TestComponent } from './test-components/test/test.component'
import { PipeComponent } from './test-components/pipe/pipe.component'
import { ParentComponent } from './test-components/parent/parent.component'
import { ChildComponent } from './test-components/parent/child/child.component';
import { CompAComponent } from './comp-b/comp-a/comp-a.component';
import { CompBComponent } from './comp-b/comp-b.component'

@NgModule({
  declarations: [AppComponent, ParentComponent, ChildComponent, TestComponent, PipeComponent, CompAComponent, CompBComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
