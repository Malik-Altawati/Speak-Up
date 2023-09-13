import { Component } from '@angular/core';
declare var Swal: any;

@Component({
  selector: 'app-submit-form',
  templateUrl: './submit-form.component.html',
  styleUrls: ['./submit-form.component.scss']
})
export class SubmitFormComponent {

  alert(){
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: "تم ارسال النموذج بنجاح",
      text: "رقم التتبع هوا : 3434939",

      showConfirmButton: false,
      timer: 3000
    })
  }
}
