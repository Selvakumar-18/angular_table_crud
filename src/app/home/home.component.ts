import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // this.click()
  }

  values = '';
  data : any;
  arr:any=[];

  onKey(event: any) { // without type info
  //  this.data = this.values = event.target.value
    this.values= event.target.value
    console.log(this.values)
  }
  // res!:boolean

  // click()
  // {
  //   let temp = [...this.arr];
  //   temp.push(this.data);
  //   this.arr = [...temp];
  //   console.log(this.arr);
  // }

}
