import { Component } from '@angular/core';
import { HeaderAdminComponent } from '../header-admin/header-admin.component';

@Component({
  selector: 'app-home-admin',
  standalone: true,
  imports: [HeaderAdminComponent],
  templateUrl: './home-admin.component.html',
  styleUrl: './home-admin.component.css'
})
export class HomeAdminComponent {

}
