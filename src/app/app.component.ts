import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public interval = 3000;
  public width = '650px';
  public height = '326px';
  public showDots = true;
  public activeDot = '#f00';
  public inactiveDot = 'aqua';

  public slides = [
    {image: 'https://cdn.pixabay.com/photo/2022/02/19/14/37/nordkette-7022793_960_720.jpg', targetLink: ''},
    {image: 'https://cdn.pixabay.com/photo/2022/03/20/11/04/mountains-7080595_960_720.jpg',  targetLink: ''},
    {image: 'https://cdn.pixabay.com/photo/2021/12/28/14/44/sunset-6899490_960_720.jpg',  targetLink: 'https://cdn.pixabay.com/'}
  ];
}
