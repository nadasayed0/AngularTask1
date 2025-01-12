import { Component } from '@angular/core';


interface ISrc{
  src: string
}

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {

  images: ISrc[] = [

    {src: "/images/poert1.png"},
    {src: "/images/port2.png"},
    {src: "/images/port3.png"},
    {src: "/images/poert1.png"},
    {src: "/images/port2.png"},
    {src: "/images/port3.png"}
  ]


  currentSrc: ISrc = {} as ISrc

  showDetails(imgSrc:ISrc): void{

    this.currentSrc = imgSrc;

  }
}
