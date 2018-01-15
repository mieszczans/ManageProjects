import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { 
  animate,
  group,
  query,
  style,
  transition,
  trigger
} from '@angular/animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('routeState', [
      transition('* => *', [
        group([
          query(':enter', [
            style({
              transform: 'translateY(-400px)',
              opacity: 0
            }),
            animate('300ms ease-out')
          ], {optional: true}),
          query(':leave', [
            animate('300ms ease-out', style({
              transform: 'translateY(600px)',
              opacity: 0
            }))
          ], {optional: true})
        ])
      ])
    ])
  ]
})
export class AppComponent {
  getAnimationData(outlet: RouterOutlet){
    const routeData = outlet.activatedRouteData['animation'];
    if (!routeData){
      return 'rootPage'
    }
    return routeData['page']
  }
}
