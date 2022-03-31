import { Component, Input, OnInit } from '@angular/core';
import { __core_private_testing_placeholder__ } from '@angular/core/testing';
import { FormGroup,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
public formulario:FormGroup=new FormGroup({});
 

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): any{
    
      this.formulario=this.formBuilder.group({
    modelo:'',
    marca:'',
    precio:''
      })
    

  }
  ver():any{
  
    console.log(this.formulario.value);

    
  }




}
