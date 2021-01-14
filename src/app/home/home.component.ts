import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private titleService: Title, private meta: Meta) { }

  ngOnInit(): void {
    this.titleService.setTitle("Création de site internet et marketing digitale à Waterloo | Mamoot");

    this.meta.updateTag({ name: 'description', content: 'Découvrez Mamoot une agence créative et ambitieuse. Faites-nous confiance pour la création de votre site web, système de gestion, stratégie et plus encore.' }, "name='description'");
    this.meta.updateTag({ name: 'og:url', content: 'https://www.mamoot.be' },"name='og-url'");
    this.meta.updateTag({ name: 'og:description', content: 'Créations de solutions digitales, stratégies de communication et bien plus encore !' }, "name='og-description'");
  }


scroll(el: HTMLElement) {
  el.scrollIntoView({ behavior: 'smooth' });
}


}
