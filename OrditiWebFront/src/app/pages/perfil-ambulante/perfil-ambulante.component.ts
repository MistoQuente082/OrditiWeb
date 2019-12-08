import { Component, OnInit } from '@angular/core';

import { AmbulanteInfoModel } from '../../models/ambulanteInfo';
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-perfil-ambulante',
  templateUrl: './perfil-ambulante.component.html',
  styleUrls: ['./perfil-ambulante.component.scss']
})
export class PerfilAmbulanteComponent implements OnInit {

  ambulante: AmbulanteInfoModel = new AmbulanteInfoModel({
    guid: "D21ds12x",
    uid: "cust2dsa12dsa",
    nome: "Doe",
    email: "email@email.com",
    cpf: 10283,
    local: "Idasn2x2#",
    produto: "Churrasco"
  });

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  private subscriber: any;

  ngOnInit() {
    this.subscriber = this.route.params.subscribe(params => {
      console.log(params);

      this.http.get('/api/v1/ambulante/' + params.uid).subscribe((data: any) => {

        this.ambulante = new AmbulanteInfoModel(data.customer);
      });
    });
  }

}
