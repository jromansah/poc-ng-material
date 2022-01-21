import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [HeaderComponent, SideNavComponent, FooterComponent, MainLayoutComponent],
  imports: [CommonModule, MaterialModule, RouterModule],
  exports: [
    MainLayoutComponent
  ],
})
export class SharedModule {}
