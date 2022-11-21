import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { FooterComponent } from "./footer/footer.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { UserSearchComponent } from './user-search/user-search.component';
import { ReactiveFormsModule } from "@angular/forms";
import { InputComponent } from "./input/input.component";

@NgModule({
  imports: [CommonModule, RouterModule, NgbModule,ReactiveFormsModule],
  declarations: [FooterComponent, NavbarComponent, SidebarComponent, UserSearchComponent,InputComponent],
  exports: [FooterComponent, NavbarComponent, SidebarComponent,UserSearchComponent,InputComponent]
})
export class ComponentsModule {}
