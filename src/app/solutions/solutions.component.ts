import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';


@Component({
  selector: 'app-solutions',
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.css', './solutions-cards.css']
})
export class SolutionsComponent implements OnInit {

  constructor( private titleService:Title, private meta:Meta) { }

  ngOnInit(): void {
    this.titleService.setTitle("6 solutions digitales pour votre entreprise | Mamoot");

    this.meta.addTags([
      {charset: 'UTF-8'},
      {name: 'language' , content:"fr-BE"},
      {name: 'description', content: 'Mamoot répond à tous vos besoins digitaux: SEO, SEA, sites internet, ERP, CRM, audits, réseaux sociaux et plus encore'},
      {name: 'robots', content: 'index, follow'},
      {name:'viewport', content:'width=device-width, initial-scale=1'},

      {property: 'go:site_name', content: 'Mamoot' },
      {property: 'go:url', content: 'https://www.mamoot.be/solutions' },
      {property: 'go:locale', content: 'fr_be' },
      {property: 'go:type', content: 'sebsite' },
      {property: 'go:description', content: 'Découvrez nos solutions digitales. Faites-nous confiance pour faire évoluer vos solutions digitales et votre image.' },
      {property: 'go:image', content: 'https://www.mamoot.be/assets/img/Mamoot.png' }
    ], true);
  }
  }
