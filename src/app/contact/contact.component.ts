import { Component, OnInit, setTestabilityGetter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, Validators, FormGroup, Form } from "@angular/forms";
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(public http: HttpClient, private titleService:Title) { 
  }

  ngOnInit(): void {
    this.titleService.setTitle("Contact");
  }

  form = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(2)]),
    message: new FormControl('', [
      Validators.required,
      Validators.minLength(4)])
  });

  



  register() {
    let form = this.form.value;

    let user = {
      name: form.name,
      email: form.email,
      message: form.message
    }

    console.log(this.formIsValid);
    console.log(form.name);
    console.log(form.email);
    console.log(form.message);


    this.http.post("https://mamoot.be/sendmail", user).subscribe(
      data => {
        let res: any = data;
        console.log(
          `👏 > 👏 > 👏 > 👏 Le message a bien été envoyé!`
        );
      },
      err => {
        console.log(err);
      }, () => {
      }
    );
  }

  get email() {
    return this.form.get('email');
  }

  get name() {
    return this.form.get('email');
  }

  get message() {
    return this.form.get('email');
  }

  get formIsValid(){
    return this.form.valid;
  }

}
