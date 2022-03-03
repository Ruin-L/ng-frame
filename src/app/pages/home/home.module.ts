import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HeadComponent } from './components/head/head.component';
import { BodyComponent } from './components/body/body.component';

@NgModule({
  declarations: [HomeComponent, HeadComponent, BodyComponent],
  imports: [CommonModule],
})
export class HomeModule {}
