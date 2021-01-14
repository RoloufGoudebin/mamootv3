import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-environnement',
  templateUrl: './environnement.component.html',
  styleUrls: ['./environnement.component.css']
})
export class EnvironnementComponent implements OnInit {

  constructor(private titleService:Title, private meta:Meta) {
  }

  ngOnInit(): void {
    this.titleService.setTitle("Diminution de notre impact environnemental | Mamoot X Planet");


    this.meta.addTags([
      {charset: 'UTF-8'},
      {name: 'language' , content:"fr-BE"},
      {name: 'description', content: 'Le digital et l’utilisation quotidienne des technologies sont de véritables sources polluantes. Nous agissons A travers des petits gestes simples.'},
      {name: 'robots', content: 'index, follow'},
      {name:'viewport', content:'width=device-width, initial-scale=1'},

      {property: 'go:site_name', content: 'Mamoot' },
      {property: 'go:url', content: 'https://www.mamoot.b/environnement' },
      {property: 'go:locale', content: 'fr_be' },
      {property: 'go:type', content: 'sebsite' },
      {property: 'go:description', content: 'Découvrez les gestes quotidiens de Mamoot servant à limiter notre impact environnemental' },
      {property: 'go:image', content: 'https://www.mamoot.be/assets/img/Mamoot.png' }
    ], true);
  }
  }
