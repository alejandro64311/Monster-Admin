import { Routes } from "@angular/router";

import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { IconsComponent } from "../../pages/icons/icons.component";
import { MapComponent } from "../../pages/map/map.component";
import { NotificationsComponent } from "../../pages/notifications/notifications.component";
import { UserComponent } from "../../pages/user/user.component";
import { TablesComponent } from "../../pages/tables/tables.component";
import { TypographyComponent } from "../../pages/typography/typography.component";
import { UserAnalysisComponent } from "src/app/pages/user-analysis/user-analysis.component";
import { UserInfoComponent } from "src/app/pages/user-info/user-info.component";
import { UserMeasuresComponent } from "src/app/pages/user-measures/user-measures.component";
// import { RtlComponent } from "../../pages/rtl/rtl.component";

export const AdminLayoutRoutes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "icons", component: IconsComponent },
  { path: "maps", component: MapComponent },
  { path: "notifications", component: NotificationsComponent },
  { path: "user", component: UserComponent },
  { path: "tables", component: TablesComponent },
  { path: "typography", component: TypographyComponent },
  { path: "analysis", component: UserAnalysisComponent },
  { path: "info", component: UserInfoComponent },
  { path: "measure", component: UserMeasuresComponent },
  // { path: "rtl", component: RtlComponent }
];
