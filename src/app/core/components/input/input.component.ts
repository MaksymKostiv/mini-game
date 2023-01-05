import {Component, Input, OnInit} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Input() inputControl: FormControl = new FormControl('',[Validators.required])
  constructor() { }

  ngOnInit(): void {
  }

 public delete(): void {
    this.inputControl.reset('')

  }
}
