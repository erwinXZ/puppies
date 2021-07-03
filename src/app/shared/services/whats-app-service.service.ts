import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WhatsAppServiceService {

  WHATS_APP_URL_BASE = 'https://wa.me';
  PREFIX_BO = '591';

  constructor() { }

  getWhatsAppLink(cellphone: string, textTemplate?: string) {
    return this.WHATS_APP_URL_BASE + '/' + this.PREFIX_BO + cellphone + (textTemplate ? '?text=' + encodeURIComponent(textTemplate) : '');
  }
}
