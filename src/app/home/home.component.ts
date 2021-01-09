import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private titleService:Title, private meta:Meta) { }

  ngOnInit(): void {

    this.titleService.setTitle("Mamoot, l'agence digitale qui en impose");

    this.meta.addTags([
      { name: 'go:site_name', content: 'Mamoot' },
      { name: 'go:url', content: 'https://mamoot.be' },
      { name: 'go:locale', content: 'fr_be' },
      { name: 'go:type', content: 'sebsite' },
      { name: 'go:description', content: 'Créations de solutions digitales, stratégie de communication et bien plus encore !' },
      { name: 'go:image', content: 'https://www.mamoot.be/assets/img/Mamoot.png' }
    ], true);
  }


  scroll(el: HTMLElement) {
    el.scrollIntoView({ behavior: 'smooth' });
  }


}
