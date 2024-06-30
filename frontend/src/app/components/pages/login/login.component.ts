import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import swal from 'sweetalert2';

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
    constructor(private fb:FormBuilder, private router: Router){}    

    ngOnInit():void{
       this.loginForm = this.fb.group({
            email:['',[Validators.required]],
            password : ['', Validators.required]
       });

    }

   

    // submit(){
    //   this.isSubmitted = true;
    //   if(this.loginForm.invalid) return;
    //     swal.fire({
    //       title: "Datos Validos",
    //       text: `email: ${this.email?.value}\n
    //             password: ${this.password?.value}]`,
    //       icon: "success",
    //       confirmButtonText: 'Aceptar'
    //     });

    // }
    submit(){
        if(this.loginForm.valid){
          if(this.loginForm.controls['email'].value === "admin" && this.loginForm.controls['password'].value === "admin"){
              this.router.navigateByUrl('admin');
          }
        }
    }
}
