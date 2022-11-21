import { Component, Input, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";

@Component({
  selector: "app-input-area",
  templateUrl: "./input-area.component.html",
  styleUrls: ["./input-area.component.scss"],
})
export class InputAreaComponent implements OnInit {
  @Input("label") label: string = "";
  @Input("placeholder") placeholder: string = "";
  @Input("control") control: FormControl;
  @Input("rows") rows: number = 3;

  constructor() {}

  ngOnInit() {}
}
