import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';

@Component({
  selector: 'app-custom-modal',
  templateUrl: './custom-modal.component.html',
  styleUrls: ['./custom-modal.component.scss']
})
export class CustomModalComponent implements OnInit {
  showModal = false;
  title: string;
  body: string;
  redirect: string;
  buttonLabel: string;
  name: string;

  constructor(private router: Router, protected activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => {
      this.name = params['name'];
    });
  }

  ngAfterViewInit() {
    //Allow in out animation to play before the modal's open
    setTimeout(() => {
      this.showModal = true;
    }, 100);
  }

  ngOnInit(): void {
    switch (this.name) {
      case 'reset-password-completed': {
        this.title = '¡Contraseña cambiada!';
        this.body = 'Asegúrate de guardar tu contraseña nueva en un administrador de contraseñas o un lugar físico seguro';
        this.buttonLabel = 'Continuar';
        this.redirect = 'login';
        break;
      }
      case 'request-association-completed': {
        this.title = 'Formulario enviado con éxito';
        this.body = '¡Pronto nos contactaremos contigo!';
        this.buttonLabel = 'Continuar';
        this.redirect = '';
        break;
      }
      case 'registration-completed': {
        this.title = 'Registro completo';
        this.body = '¡Felicidades! ya eres parte de PetHeart';
        this.buttonLabel = 'Ver Perfil';
        this.redirect = 'association-profile';
        break;
      }
    }
  }

  onClose() {
    this.showModal = false;
    //Allow fade out animation to play before navigating back
    setTimeout(
      () => this.router.navigate(['/', this.redirect]),
      100
    );
  }
}
