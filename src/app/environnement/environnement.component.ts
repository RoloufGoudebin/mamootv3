import { Component, OnInit } from '@angular/core';
import { Title} from '@angular/platform-browser';

@Component({
  selector: 'app-environnement',
  templateUrl: './environnement.component.html',
  styleUrls: ['./environnement.component.css']
})
export class EnvironnementComponent implements OnInit {

  constructor(private titleService:Title) { 
  }

  ngOnInit(): void {
    this.titleService.setTitle("Mamoot X Planet");
  }

}
