import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-environnement',
  templateUrl: './environnement.component.html',
  styleUrls: ['./environnement.component.css']
})
export class EnvironnementComponent implements OnInit {

  constructor(private titleService: Title, private meta: Meta) {
  }

  ngOnInit(): void {
    this.titleService.setTitle("Diminution de notre impact environnemental | Mamoot X Planet");

    this.meta.updateTag({ name: 'description', content: 'Le digital et l’utilisation quotidienne des technologies sont de véritables sources polluantes. Nous agissons A travers des petits gestes simples.' }, "name='description'");
    this.meta.updateTag({ name: 'og:url', content: 'https://www.mamoot.b/environnement' }, "name='og-url'");
    this.meta.updateTag({ name: 'og:description', content: 'Découvrez les gestes quotidiens de Mamoot servant à limiter notre impact environnemental' }, "name='og-description'");
  }g
}
