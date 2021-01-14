import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';


@Component({
  selector: 'app-solutions',
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.css', './solutions-cards.css']
})
export class SolutionsComponent implements OnInit {

  constructor(private titleService: Title, private meta: Meta) { }

  ngOnInit(): void {
    this.titleService.setTitle("6 solutions digitales pour votre entreprise | Mamoot");


    this.meta.updateTag({ name: 'description', content: 'Mamoot répond à tous vos besoins digitaux: SEO, SEA, sites internet, ERP, CRM, audits, réseaux sociaux et plus encore' }, "name='description'");
    this.meta.updateTag({ name: 'og:url', content: 'https://www.mamoot.be/solutions' }, "name='og-url'");
    this.meta.updateTag({ name: 'og:description', content: 'Découvrez nos solutions digitales. Faites-nous confiance pour faire évoluer vos solutions digitales et votre image.' }, "name='og-description'");

  }
}
