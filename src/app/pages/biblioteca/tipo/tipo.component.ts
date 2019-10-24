import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tipo',
  templateUrl: './tipo.component.html',
  styleUrls: ['./tipo.component.css']
})
export class TipoComponent implements OnInit {
 public titulo : "Tipo de libro";
  public tipodelibro:string;
  
  constructor() { }

  ngOnInit() {
  }
  
  saveform(){
  alert(this.tipodelibro)
  }

}