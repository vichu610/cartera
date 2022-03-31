import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-registro',
  templateUrl: './lista-registro.component.html',
  styleUrls: ['./lista-registro.component.css']
})
export class ListaRegistroComponent implements OnInit {
  vehiculos=[
    {modelo:'dodge',marca:'dark',precio:'18000'},
    {modelo:'pontiac',marca:'g6',precio:'28000'},
    {modelo:'silverado',marca:'dark',precio:'38000'}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
