import { Component, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { MessageService, SelectItem } from 'primeng/api';
import { PhoneCode, PhoneCodeService } from './phone-code.service';
import { NgForm } from '@angular/forms';
import { AuthResponseData, AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.scss'],
  providers: [MessageService]
})
export class DialogBoxComponent implements OnInit{
  loginVisible: boolean = false;
  signUpVisible: boolean = false;
  isLoading = false;
  checked = true;
  emailFieldVisible = false;
  items: SelectItem[];
  selectedItem: string | undefined;
  phcode: PhoneCode[];
  phonecode:any;
  phonenumber: any;
  recaptchaverifier: any;
  error = '';

  @Input() inputProperty: string;
  confirmationResult: any;

  constructor(
    private phonecodeservice: PhoneCodeService, 
    private authservice: AuthService, 
    public messageService: MessageService, 
    private el: ElementRef, 
    private renderer: Renderer2) {

  }

  ngOnInit() {
    // firebase.initializeApp(environment.firebaseConfig);
    this.phcode = this.phonecodeservice.phoneCode;
    console.log('phcode', this.phcode)
  }

  onSignUpDialog(data: string) {
    this.signUpVisible = !this.signUpVisible;
    if(data) {
      this.loginVisible = !this.loginVisible;
    }
  }

  onLoginDialog(data: string) {
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

  onSubmit(form: NgForm, formType: string) {
    console.log('formtype', formType, form.value.email)
    let authobs: Observable<AuthResponseData>
    if(formType == 'login'){
      if(!form.valid){
        return;
      }
      console.log('login box')
      const loginemail = form.value.emaillogin;
      const password = form.value.passwordlogin;
      this.isLoading = true;
      authobs = this.authservice.login(loginemail, password)
    }else{
      if(!form.valid){
        return;
      }
      console.log('sign up box')
      const signupemail = form.value.signupemail;
      const signuppassword = form.value.signuppassword;
      console.log(signupemail, signuppassword)
      this.isLoading = true;
      authobs = this.authservice.signup(signupemail, signuppassword)
    }

    authobs.subscribe((res) => {
      console.log(res)
      this.isLoading = false;
      if(res.registered){
        this.messageService.add({ severity: 'success', summary: 'Login Successful', detail: 'You are able to login successfully' });
        this.loginVisible = !this.loginVisible;
      }
      else{
        this.messageService.add({ severity: 'success', summary: 'Account Created', detail: 'Your account has been created' });
        this.signUpVisible = !this.signUpVisible;
      }
    },
    (errorData) => {
      this.isLoading = false;
      this.messageService.add({ severity: 'error', summary: 'Error', detail: errorData });
      console.log(errorData)
    })
  }
}
