import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  searchText :any= '';
  selected = 0;
  inspectionTypes: any[] = [
    {inspection_type_id: 1, description: 'Type A'},
    {inspection_type_id: 2, description: 'Type B'},
    {inspection_type_id: 3, description: 'Type C'},
    {inspection_type_id: 4, description: 'Type D'}
  ];

  inspections: any[] = [
    {inspection_id: 1, description: 'Type A'},
    {inspection_id: 2, description: 'Type B'},
    {inspection_id: 3, description: 'Type C'},
    {inspection_id: 4, description: 'Type D'},
    {inspection_id: 5, description: 'Type E'},
    {inspection_id: 6, description: 'Type F'},
    {inspection_id: 7, description: 'Type G'},
    {inspection_id: 8, description: 'Type H'}
  ];


  ngOnInit(): void {
  }

  keyPress(inputkey : any)
  {
    console.log(inputkey.target.value)
  }
}
