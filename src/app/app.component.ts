import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor( private titleService:Title, private meta:Meta) { }

  ngOnInit(): void {

    this.titleService.setTitle("Création de site internet & marketing digitale à Waterloo | Mamoot");

    this.meta.addTags([
      { charset: 'UTF-8' },
      { name: 'description', content: 'Découvrez Mamoot une agence créative et ambitieuse. Faites-nous confiance pour la création de votre site web, système de gestion, stratégie et plus encore.' },
      { name: 'robots', content: 'index, follow' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      
      { name: 'go:site_name', content: 'Mamoot' },
      { name: 'go:locale', content: 'fr_be' },
      { name: 'go:type', content: 'website' },
      { name: 'go:description', content: 'Créations de solutions digitales, stratégies de communication et bien plus encore !' },
      { name: 'go:image', content: 'https://www.mamoot.be/assets/img/Mamoot.png' }
    ], true);
  }


  scroll(el: HTMLElement) {
    el.scrollIntoView({ behavior: 'smooth' });
  }


}