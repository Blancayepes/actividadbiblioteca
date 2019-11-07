import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent implements OnInit {

  constructor(protected fb: FormBuilder ) { }
  public areaForm: FormGroup;
  public titulo="formulario de Area";

  ngOnInit() {
  }
  createForm(){
    this.areaForm = this.fb.group({
      code: ['', Validators.required],
      description: ['', Validators.required]
      }) 
    }
}
