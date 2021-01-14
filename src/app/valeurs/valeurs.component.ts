import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-valeurs',
  templateUrl: './valeurs.component.html',
  styleUrls: ['./valeurs.component.css', './solutions-cards.css', 'carousel-story.css']
})
export class ValeursComponent implements OnInit {

  constructor( private titleService:Title,  private meta:Meta) { }

  ngOnInit(): void {
    this.titleService.setTitle("Une agence digitale de qualité | Mamoot");

    this.meta.addTags([
      {charset: 'UTF-8'},
      {name: 'language' , content:"fr-BE"},
      {name: 'description', content: 'Découvrez nos valeurs et notre méthode de travail. Notre ADN qui pourrait rendre votre site internet unique et qualitatif'},
      {name: 'robots', content: 'index, follow'},
      {name:'viewport', content:'width=device-width, initial-scale=1'},

      {property: 'go:site_name', content: 'Mamoot' },
      {property: 'go:url', content: 'https://www.mamoot.be/valeurs' },
      {property: 'go:locale', content: 'fr_be' },
      {property: 'go:type', content: 'sebsite' },
      {property: 'go:description', content: 'Découvrez notre ADN Mamoot. Nos valeurs, notre méthode et nos critères de qualité.' },
      {property: 'go:image', content: 'https://www.mamoot.be/assets/img/Mamoot.png' }
    ], true);
  }
  }
