import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editoriales',
  templateUrl: './editoriales.component.html',
  styleUrls: ['./editoriales.component.css']
})
export class EditorialesComponent implements OnInit {
  public titulo = "Editoriales";
  public autor :string 
  public lugarpublicacion :string;
  public fechapublicacion :string;
  public editorial :string;
  constructor() { }

  ngOnInit() {
  }

}
