import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from "./app.component";
import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppRoutingModule } from "./app-routing.module";
import { ComponentsModule } from "./components/components.module";
import { StoreModule } from "@ngrx/store";
import { reducers,metaReducers } from "./data"; 
import { EffectsModule } from "@ngrx/effects";
import { UserEffects } from "./data/user/user.effects";
import { MeasurementEffects } from "./data/measurement/measurement.effects";
import { HydrationEffects } from "./data/hydration/hydration.effects";
@NgModule({
  imports: [
    StoreModule.forRoot(reducers, { metaReducers }),
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
  
    EffectsModule.forRoot([UserEffects, MeasurementEffects,HydrationEffects]),
  ],
  declarations: [AppComponent, AdminLayoutComponent, AuthLayoutComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
