import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonCard, IonicModule } from '@ionic/angular';

import { CardDetailsPageRoutingModule } from './card-details-routing.module';

import { CardDetailsPage } from './card-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CardDetailsPageRoutingModule
  ],
  declarations: [CardDetailsPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CardDetailsPageModule {}
