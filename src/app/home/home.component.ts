import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private titleService:Title, private meta:Meta) { }

  ngOnInit(): void {

    this.titleService.setTitle("Création de site internet et marketing digitale à Waterloo | Mamoot");

    this.meta.addTags([
      {charset: 'UTF-8'},
      {name: 'description', content: 'Découvrez Mamoot une agence créative et ambitieuse. Faites-nous confiance pour la création de votre site web, systèmes de gestion, stratégies et plus encore.'},
      {name: 'robots', content: 'index, follow'},
      {name:'viewport', content:'width=device-width, initial-scale=1'},

      {property: 'go:site_name', content: 'Mamoot' },
      {property: 'go:url', content: 'https://www.mamoot.be' },
      {property: 'go:locale', content: 'fr_be' },
      {property: 'go:type', content: 'sebsite' },
      {property: 'go:description', content: 'Découvrez Mamoot une agence créative et ambitieuse. Faites-nous confiance pour faire évoluer vos solutions digitales et votre image.' },
      {property: 'go:image', content: 'https://www.mamoot.be/assets/img/Mamoot.png' }
    ], true);
  }



  scroll(el: HTMLElement) {
    el.scrollIntoView({ behavior: 'smooth' });
  }


}
