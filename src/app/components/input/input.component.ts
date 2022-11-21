import { Component, Input, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";

@Component({
  selector: "app-input",
  templateUrl: "./input.component.html",
  styleUrls: ["./input.component.scss"],
})
export class InputComponent implements OnInit {
  @Input("label") label: string = "";
  @Input("placeholder") placeholder: string = "";
  @Input("control") control: FormControl;
  @Input('type') type: 'text' | 'password' | 'email' | 'number' = 'text';
  constructor() {}

  ngOnInit() {}
}
