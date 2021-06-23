import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SafePipeModule } from 'safe-pipe';

import {
  MatIconModule,
  MatCardModule,
  MatButtonModule,
  MatListModule,
  MatProgressBarModule,
  MatMenuModule,
  MatInputModule,
  MatDatepickerModule, MatFormFieldModule, MatNativeDateModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ChartsModule } from 'ng2-charts/ng2-charts';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutes } from './dashboard.routing';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(DashboardRoutes),
    MatDatepickerModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatNativeDateModule,
    MatProgressBarModule,
    MatMenuModule,
    ChartsModule,
    NgxDatatableModule,
    FlexLayoutModule,
    MatDatepickerModule,
    FormsModule,
    MatFormFieldModule,
    MatFormFieldModule,
    MatInputModule,
    SafePipeModule
  ],
  declarations: [ DashboardComponent  ]
})

export class DashboardModule {}
