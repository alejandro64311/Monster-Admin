import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-button[label]",
  templateUrl: "./button.component.html",
  styleUrls: ["./button.component.scss"],
})
export class ButtonComponent implements OnInit {
  constructor() {}

  @Input("label") label = "";
  @Input('disabled') disabled: boolean = false;
  
  @Output()
  onTap: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit() {}

  onClick($event): void {
    this.onTap.emit($event);
  }
}
