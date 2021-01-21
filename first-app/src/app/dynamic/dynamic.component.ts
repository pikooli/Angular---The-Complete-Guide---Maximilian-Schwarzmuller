import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.css']
})
export class DynamicComponent implements OnInit {

  constructor() { 
    // setTimeout(() => {this.allow = false}, 2000)
  }

  ngOnInit(): void {
  }
  test : String = "test";
  numb : Number = 42;
  allow : Boolean= true;
  buttonClicked : Boolean = false;
  color: String = "green";
  switchColor: Boolean = true;
  
  buttonClick: String = "button is not clicked";
  clickOnButton(){
    this.buttonClick = "button was clicked";
  }

  inputString : String = "";
  getInputString(event :Event){
    this.inputString = (<HTMLInputElement>event.target).value
  }
  changeColor(){
    this.color = Math.random() > 0.5 ? "green" : "red";
  }
  getColor(){
    return this.color
  }


}
