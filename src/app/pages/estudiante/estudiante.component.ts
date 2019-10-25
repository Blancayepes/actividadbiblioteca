import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.component.html',
  styleUrls: ['./estudiante.component.css']
})
export class EstudianteComponent implements OnInit {
 
  
  public titulo = "Estudiante";
  public NombreEstudiante :string 
  public apellido :string;
  public email :string;
  public  telefono :string;

  constructor() { }

  ngOnInit() {
  }
  
  saveform(){
  alert(this.NombreEstudiante)
  }

}
