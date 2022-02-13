import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Query } from 'src/app/Classes/query';

@Component({
  selector: 'app-repoform',
  templateUrl: './repoform.component.html',
  styleUrls: ['./repoform.component.css']
})
export class RepoformComponent implements OnInit {

  @Output() repoQuery = new EventEmitter<any>();
  repoSearch = new Query("");

  repoRequest() {
    this.repoQuery.emit(this.repoSearch);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
