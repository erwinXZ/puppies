import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirebaseErrorsService {

  constructor() { }

  parseError(errorCode: string): string {
    let message: string;

    switch (errorCode) {
      case 'auth/wrong-password':
        message = 'Credenciales de acceso invalidos.';
        break;
      case 'auth/network-request-failed':
        message = 'Por favor revise su conexión a internet.';
        break;
      case 'auth/too-many-requests':
        message =
          'Hemos detectado demasiadas solicitudes de su dispositivo. ¡Tómate un descanso por favor!';
        break;
      case 'auth/user-disabled':
        message =
          'Su cuenta ha sido deshabilitada o eliminada. Por favor, póngase en contacto con el administrador del sistema.';
        break;
      case 'auth/requires-recent-login':
        message = 'Por favor inicie sesión de nuevo y vuelva a intentarlo.';
        break;
      case 'auth/email-already-exists':
        message = 'La dirección de correo electrónico ya está siendo utilizada.';
        break;
      case 'auth/user-not-found':
        message =
          'No pudimos encontrar la cuenta de usuario asociada con la dirección de correo electrónico.';
        break;
      case 'auth/invalid-email  ':
        message = '¡La dirección de correo electrónico no es válida!';
        break;
      case 'auth/cannot-delete-own-user-account':
        message = 'No puede eliminar su propia cuenta de usuario.';
        break;
      default:
        message = '¡UPS! Algo salió mal. Vuelve a intentarlo más tarde.';
        break;
    }

    return message;
  }
}
