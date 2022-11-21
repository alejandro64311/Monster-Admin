import { Component, EventEmitter, OnInit,Output } from '@angular/core'; 

@Component({
  selector: 'app-input-file',
  templateUrl: './input-file.component.html',
  styleUrls: ['./input-file.component.scss']
})
export class InputFileComponent implements OnInit {
  progress: number = -1;
  @Output()
  onAfterUpload: EventEmitter<any> = new EventEmitter<any>();


  constructor() { }

  ngOnInit() {
    console.log("klsdfnsdkjfnk");
    
  }

  onChangeImage(event): void {
    var formData = new FormData();
    this.progress = -1;
    const file = (event.target as HTMLInputElement).files[0];

    if (!file) return;

    var fileTypes = ["jpg", "jpeg", "png"];
    var extension = file.name.split(".").pop().toLowerCase(),
      isSuccess = fileTypes.indexOf(extension) > -1;
    if (isSuccess) {
      formData.append("file", file);

      
    } else {
     
    }
  }
  openFile(event): void {
    event.preventDefault();
    document.getElementById("input-file").click();
  }
}
