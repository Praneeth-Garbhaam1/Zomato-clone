import { Component, Input, OnInit } from '@angular/core';
import { EventService } from 'src/app/event.service';
import { SelectItem } from 'primeng/api';
import { PhoneCode, PhoneCodeService } from './phone-code.service';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.scss']
})
export class DialogBoxComponent implements OnInit{
  loginVisible: boolean = false;
  signUpVisible: boolean = false;
  checked = true;
  emailFieldVisible = false;
  items: SelectItem[];
  selectedItem: string | undefined;
  phcode: PhoneCode[];
  phonenumber: number;

  @Input() inputProperty: string;

  constructor(private phonecodeservice:PhoneCodeService){
    this.items = [];
        for (let i = 0; i < 10000; i++) {
            this.items.push({ label: 'Item ' + i, value: 'Item ' + i });
        }
  }

  ngOnInit() {
    this.phcode = this.phonecodeservice.phoneCode;
    console.log('phcode', this.phcode)
  }

  onSignUpDialog(data: string) {
    console.log(data)
    this.signUpVisible = !this.signUpVisible;
    if(data) {
      this.loginVisible = !this.loginVisible;
    }
  }

  onLoginDialog(data: string) {
    console.log(data)
    this.loginVisible = !this.loginVisible;
    if(data) {
      this.signUpVisible = !this.signUpVisible;
    }
  }

  showEmailField(){
    this.emailFieldVisible = !this.emailFieldVisible;
  }

  onLoginShow(){
    this.emailFieldVisible = !this.emailFieldVisible;
  }
}
