import { Component } from '@angular/core';
declare var Swal: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  alert(){
    Swal.fire({
      position: 'center',
      icon: 'info',
      title: 'المعذرة الشات لايزال تحت التطوير',
      showConfirmButton: false,
      timer: 3000
    })
  }
}
