import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Query } from 'src/app/Classes/query';

@Component({
  selector: 'app-queryform',
  templateUrl: './queryform.component.html',
  styleUrls: ['./queryform.component.css']
})
export class QueryformComponent implements OnInit {

  @Output() query = new EventEmitter<any>();
  searchQuery = new Query("");

  queryResult(){
    this.query.emit(this.searchQuery);
    this.searchQuery = new Query("");

  }

  constructor() { }

  ngOnInit(): void {
  }

}
