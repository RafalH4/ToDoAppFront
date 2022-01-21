import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  submitted = false;
  registrationForm = new FormGroup({
    email: new FormControl('', Validators.email),
    login: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })


  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }
  get f() {
    return this.registrationForm.controls;
  }

  onSubmit(){
    this.submitted = true;
    console.log(this.registrationForm.value);
    this.authService.register(this.registrationForm.value).subscribe(x => console.log(x))
  }


}
