import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css']
})
export class LibroComponent implements OnInit {
  public titulo : "Editoriales";
  public descripcion :string;
  public paginas :string;
  public contenido:string;
  public categoria :string;
  public  anno :string;

  constructor() { }

  ngOnInit() {
  }
  
  saveform(){
  alert(this.descripcion)
  }

}