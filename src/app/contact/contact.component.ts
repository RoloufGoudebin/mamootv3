import { Component, OnInit, setTestabilityGetter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, Validators, FormGroup, Form } from "@angular/forms";
import { Title, Meta } from '@angular/platform-browser';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(public http: HttpClient, private titleService:Title,  private meta:Meta) {
  }

  ngOnInit(): void {
    this.titleService.setTitle("Nous contacter | Mamoot");
  }

  this.titleService.setTitle("6 solutions digitales pour votre entreprise | Mamoot");

    this.meta.addTags([
      {charset: 'UTF-8'},
      {name: 'language' , content:"fr-BE"},
      {name: 'description', content: 'Contactez pour nous parler de votre projet digital, de votre marketing digital, ...'},
      {name: 'robots', content: 'index, follow'},
      {name:'viewport', content:'width=device-width, initial-scale=1'},

      {property: 'go:site_name', content: 'Mamoot' },
      {property: 'go:url', content: 'https://www.mamoot.be/contact' },
      {property: 'go:locale', content: 'fr_be' },
      {property: 'go:type', content: 'sebsite' },
      {property: 'go:description', content: 'Contactez pour nous parler de votre projet digital :) ' },
      {property: 'go:image', content: 'https://www.mamoot.be/assets/img/Mamoot.png' }
    ], true);
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

    console.log(this.formIsValid)


    this.http.post("https://mamoot.be/sendmail", user).subscribe(
      data => {
        let res: any = data;
        console.log(
          `👏 > 👏 > 👏 > 👏 ${user} is successfully register and mail has been sent and the message id is ${res.messageId}`
        );
      },
      err => {
        console.log(err);
      }, () => {
      }
    );
  }

  get email() {
    return this.form.get('email')
  }

  get name() {
    return this.form.get('email')
  }

  get message() {
    return this.form.get('email')
  }

  get formIsValid(){
    return this.form.valid
  }

}
