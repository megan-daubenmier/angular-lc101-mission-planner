import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {

  tests: string[] = ['Mars soil sample', 'Plant growth in habitat', 'Human bone density'];
  experimentBeingEdited: string = null;

  constructor() { }

  ngOnInit() {
  }

  remove(test: string) {
    let index = this.tests.indexOf(test);
    this.tests.splice(index, 1);
  }

  add(test: string) {
    this.tests.push(test);
  }

  edit(test: string) {
    this.experimentBeingEdited = test;
  }

  save(test: string) {
    let index = this.tests.indexOf(this.experimentBeingEdited);
    this.tests.splice(index, 1, test);
  }

}
