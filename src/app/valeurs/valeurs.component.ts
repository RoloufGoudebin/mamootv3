import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-valeurs',
  templateUrl: './valeurs.component.html',
  styleUrls: ['./valeurs.component.css', './solutions-cards.css', 'carousel-story.css']
})
export class ValeursComponent implements OnInit {

  constructor(private titleService: Title, private meta: Meta) { }

  ngOnInit(): void {
    this.titleService.setTitle("Une agence digitale de qualité | Mamoot");

    this.meta.updateTag({ name: 'description', content: 'Découvrez nos valeurs et notre méthode de travail. Notre ADN qui pourrait rendre votre site internet unique et qualitatif' }, "name='description'");
    this.meta.updateTag({ name: 'og:url', content: 'https://www.mamoot.be/valeurs' }, "name='og-url'");
    this.meta.updateTag({ name: 'og:description', content: 'Découvrez notre ADN Mamoot. Nos valeurs, notre méthode et nos critères de qualité.' }, "name='og-description'");

  }
  
}
