import { Component } from '@angular/core';
import { NavController, IonicPage, MenuController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public menu: MenuController) {

  }

  ionViewWillEnter() {
    this.menu.swipeEnable(false);
  }
  
  ionViewDidLeave() {
    this.menu.swipeEnable(true);
  }
  
  login() {
    // this.navCtrl.push('CategoriasPage'); // PHI: esse método push() ele empilha a página colocando a setinha de voltar
    this.navCtrl.setRoot('CategoriasPage'); // PHI: esse método setRoot() ele entra na página e demonstra o Botão do Menu
  }
}
