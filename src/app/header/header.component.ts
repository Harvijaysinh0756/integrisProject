import { Component, OnInit } from '@angular/core';
import {faFilter} from '@fortawesome/free-solid-svg-icons'
import {faUser} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  filtericon = faFilter;
  usericon = faUser
  searchText :any= '';
  selected = 0;
  inspectionTypes: any[] = [
    {inspection_type_id: 1, description: 'Lucea Project'},
    {inspection_type_id: 2, description: 'Project 1'},
    {inspection_type_id: 3, description: 'Project 2'}
  ];

  ngOnInit(): void {
  }
 
}
