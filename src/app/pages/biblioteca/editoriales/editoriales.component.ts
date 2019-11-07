import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-editoriales',
  templateUrl: './editoriales.component.html',
  styleUrls: ['./editoriales.component.css']
})
export class EditorialesComponent implements OnInit {

  constructor(protected fb: FormBuilder ) { }
  public editorialForm: FormGroup;
  public titulo="formulario de Editorial";
  ngOnInit() {
  }

  createForm(){
    this.editorialForm = this.fb.group({
      code: ['', Validators.required],
      description: ['', Validators.required],
      country: ['', Validators.required]
      }) 
    }
}
