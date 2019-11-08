import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthorService } from 'src/app/author.service';


@Component({
  selector: 'app-autores',
  templateUrl: './autores.component.html',
  styleUrls: ['./autores.component.css']
})
export class AutoresComponent implements OnInit {


  constructor(protected fb: FormBuilder,protected service:AuthorService ) { }
  public authors:any;
  public autoresForm: FormGroup;
  public titulo="formulario de autores";

  ngOnInit() {
    this.service.getAuthors().subscribe(data=>{
      this.authors = data
     });
  }
    saveAuthor(){
      this.service.postAuthor(this.autoresForm.value).subscribe(data=>
        alert("listo"));
    }
  createForm(){
    this.autoresForm = this.fb.group({
      code: ['', Validators.required],
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      bd_year: ['', Validators.required],
      death_year: ['', Validators.required],
      bd_place: ['', Validators.required]
      }) 
    }
  

}
