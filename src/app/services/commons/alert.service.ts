import { Injectable } from "@angular/core";
import { Router, NavigationStart } from "@angular/router";
import { Observable, Subject } from "rxjs";
import Swal from "sweetalert2";

@Injectable({ providedIn: "root" })
export class AlertService {
  private subject = new Subject<any>();
  private keepAfterRouteChange = false;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        if (this.keepAfterRouteChange) {
          this.keepAfterRouteChange = false;
        } else {
          this.clear();
        }
      }
    });
  }

  getAlert(): Observable<any> {
    return this.subject.asObservable();
  }

  success(message: string, keepAfterRouteChange = false) {
    this.keepAfterRouteChange = keepAfterRouteChange;
    Swal.fire({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 5000,
      title: message,
      icon: "success",
    });
    this.subject.next({ type: "success", text: message });
  }

  error(message: string) {
    Swal.fire({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 5000,
      title: message,
      icon: "error",
    });
    this.subject.next({ type: "error", text: message });
  }
  custom(message: string,type:any) {
    
    type =  ["success","error","info"].includes(type)? type:"info";

    Swal.fire({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 5000,
      title: message,
      icon: type,
    });
    this.subject.next({ type: type, text: message });
  }

  clear() {
    this.subject.next({});
  }
}
