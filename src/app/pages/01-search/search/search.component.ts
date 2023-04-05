import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';




@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchForm: FormGroup = this.formBuilder.group({
    nombre: ['', [Validators.required]]
  });

  nombreSubmitted:string= '';

  constructor(
    private formBuilder: FormBuilder,
  ){

  }

  ngOnInit(): void {

  }

  onSubmit(): void{
    this.nombreSubmitted = this.searchForm.value.nombre;
  }

}
