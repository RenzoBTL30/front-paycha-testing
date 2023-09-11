import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Toast, ToastrService } from 'ngx-toastr';
import { AuthService } from '../servicios/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  loginForm = new UntypedFormGroup({
    email: new UntypedFormControl('', [Validators.required]),
    contrasenia: new UntypedFormControl('', [Validators.required]),
  });

  isVisible: boolean = false;

  constructor(
    private router: Router,
    private authService: AuthService,
    private toast: ToastrService
  ) {}
  ngOnInit() {}

  ingresar() {
    if (this.loginForm.invalid) {
      this.toast.error
      return;
    }

    const credentials = {
      email: this.loginForm.value.email,
      contrasenia: this.loginForm.value.contrasenia,
    };

    this.authService.login(credentials).subscribe(
      (res) => {
        let datosUsuario = res.data;
        this.authService.guardarUsuario(datosUsuario);
        this.authService.guardarToken(datosUsuario.session_token);

        let rol = sessionStorage.getItem('rol');
        if (rol == 'Administrador') {
          this.router.navigate(['/dashboard/gestionar-productos']);
        } else if (rol == 'Cocina1') {
          this.router.navigate(['/dashboard/ordenes-pendientes']);
        } else if (rol == 'Cocina2') {
          this.router.navigate(['/dashboard/ordenes-pendientes']);
        } else if (rol == 'Bebidas') {
          this.router.navigate(['/dashboard/ordenes-pendientes']);
        } else if (rol == 'Promociones') {
          this.router.navigate(['/dashboard/ordenes-pendientes']);
        }
        this.toast.success('El usuario se ha autenticado correctamente','Success');

        this.limpiar();
      },
      (error) => {
        console.error(error);
        this.toast.error('La contraseña o el email esta incorrecto','Error');
      }
    );
  }

  limpiar(): void {
    this.loginForm.value.email = '';
    this.loginForm.value.contrasenia = '';
  }
}
