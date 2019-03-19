import { Component } from '@angular/core';
import { NavController, IonicPage, MenuController } from 'ionic-angular';
import { credenciaisDTO } from '../../models/credenciais.dto';
import { AuthService } from '../../services/auth.service';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  creds : credenciaisDTO = {
    email: "",
    senha: ""
  }

  constructor(
    public navCtrl: NavController, 
    public menu: MenuController, 
  public auth: AuthService) {

  }

  ionViewWillEnter() {
    this.menu.swipeEnable(false);
  }
  
  ionViewDidLeave() {
    this.menu.swipeEnable(true);
  }
  
  login() {
    this.auth.authenticate(this.creds)
    .subscribe(response =>{
      console.log(response.headers.get('Authorization'));
      this.navCtrl.setRoot('CategoriasPage');
    },
    erro => {})

    // this.navCtrl.push('CategoriasPage'); // PHI: esse método push() ele empilha a página colocando a setinha de voltar
    //this.navCtrl.setRoot('CategoriasPage'); // PHI: esse método setRoot() ele entra na página e demonstra o Botão do Menu
  }
}
