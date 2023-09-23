import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ApiTallerService } from 'src/app/servicios/api-taller.service';
import { Data } from '../interfaces/interfaces';
@Component({
  selector: 'app-feriados',
  templateUrl: './feriados.page.html',
  styleUrls: ['./feriados.page.scss'],
})
export class FeriadosPage implements OnInit {

  datos: Data[]=[];

  constructor(private menuController:MenuController,
              private apiTallerService: ApiTallerService) { }

  ngOnInit() {
    this.apiTallerService.getTodosFeriados().subscribe(resp =>{
      console.log(resp);
      this.datos.push(...resp.data);
    })
  }
  mostrarMenu(){
    this.menuController.open('first');
  }
}
