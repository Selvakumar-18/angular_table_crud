import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  crateForm!: FormGroup;
  formValue: any;
  createData: any = []
  submitted = false;
  isEdit!: Boolean;
  index: any;
  temp:any = [...this.createData];
  deleteData: any = []

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createForm()
  }


  createForm() {
    this.crateForm = this.fb.group({
      firstName : ['',[Validators.required]],
      lastName : ['',[Validators.required]],
      gmail : ['',[Validators.required,Validators.email]],
      password : ['',[Validators.required,Validators.minLength(8)]]
    })
  }

  get f():{[key:string]:AbstractControl}
  {
    return this.crateForm.controls;
  }

  onSubmit(){
    this.submitted = true;
    if(this.crateForm.valid){
    this.formValue = this.crateForm.value
    if(!this.isEdit){
    this.temp.push(this.formValue)
    this.createData = [...this.temp]
    console.log(this.createData)
    this.onReset();
    }else{
      this.createData.splice(this.index,1,this.formValue);
      this.onReset();
      this.isEdit=false;
      this.index = null;
    }
    }
  }

  onReset() {
    this.submitted = false;
    this.crateForm.reset();
  }
  
  deleteRow(i:any)
  {
   this.deleteData = this.createData.splice(i,1)
  }
  onEdit(i:any)
  {
    this.isEdit = true;
    this.index = i;
    this.crateForm.setValue({
      firstName: this.createData[i].firstName,
      lastName: this.createData[i].lastName,
      gmail: this.createData[i].gmail,
      password: this.createData[i].password,

    })
    console.log(this.createData[0].firstName)
  }
}
