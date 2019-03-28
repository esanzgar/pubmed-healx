import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { SearchRoutingModule } from './search-routing.module';
import { MaterialModule } from '../material/material.module';

import { EpmcService } from './services/epmc/epmc.service';
import { NcbiService } from './services/ncbi/ncbi.service';

import { SearchComponent } from './containers/search/search.component';

@NgModule({
  declarations: [SearchComponent],
  imports: [
    CommonModule,
    SearchRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [EpmcService, NcbiService]
})
export class SearchModule {}
