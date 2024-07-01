import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import swal from 'sweetalert2';
import { UsuarioService } from '../../../services/usuarios/usuario.service';
import { environment } from '../../../../environments/environment.development';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, RouterOutlet, CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
    loginForm!:FormGroup;
    isSubmitted = false;
    constructor(private fb:FormBuilder, private router: Router, private http:UsuarioService){}    

    ngOnInit():void{
       this.loginForm = this.fb.group({
            email:['',[Validators.required]],
            password : ['', Validators.required]
       });

    }

   

    submit(){
        if(this.loginForm.valid){
            this.http.consult_post("/admin/login", this.loginForm).pipe()
        }
    }
}
