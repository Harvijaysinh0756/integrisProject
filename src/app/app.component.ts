import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'taskone';

  inspectionTypes: any[] = [
    {inspection_type_id: 1, description: 'Type A'},
    {inspection_type_id: 2, description: 'Type B'},
    {inspection_type_id: 3, description: 'Type C'},
    {inspection_type_id: 4, description: 'Type D'},
    {inspection_type_id: 5, description: 'Type E'},
    {inspection_type_id: 6, description: 'Type F'},
    {inspection_type_id: 7, description: 'Type G'},
    {inspection_type_id: 8, description: 'Type H'}
  ];
}
