import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';


@Component({
  selector: 'app-autores',
  templateUrl: './autores.component.html',
  styleUrls: ['./autores.component.css']
})
export class AutoresComponent implements OnInit {

  public titulo = "formulrio Autor";
  public nombre :string 
  public apellido :string;
  public fecnac :string;
  public nacionalidad :string;


 constructor() { }

  ngOnInit() {
  }
  
  saveform(){
  alert(this.nombre)
  }

}
