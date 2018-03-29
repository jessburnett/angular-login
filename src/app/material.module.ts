import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material';
import { MatInputModule } from '@angular/material';

@NgModule({
  imports: [ MatButtonModule, MatInputModule ],
  exports: [ MatButtonModule, MatInputModule ]
})

export class MaterialModule { }
