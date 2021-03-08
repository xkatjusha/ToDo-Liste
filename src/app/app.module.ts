import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { EntryComponent } from './entry/entry.component';
import { OutputComponent } from './output/output.component';
import { CollectionComponent } from './collection/collection.component';

@NgModule({
  declarations: [			
    AppComponent,
      EntryComponent,
      OutputComponent,
      CollectionComponent
   ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
