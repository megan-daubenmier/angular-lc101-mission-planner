import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {

  toolbox: string[] = ['Habitat dome', 'Drones', 'Food containers', 'Oxygen tanks'];
  toolBeingEdited: string = null;

  constructor() { }

  ngOnInit() {
  }

  add(equipment: string) {
    this.toolbox.push(equipment);
  }

  remove(equipment: string) {
    let index = this.toolbox.indexOf(equipment);
    this.toolbox.splice(index, 1);
  }

  save(tool: string) {
    let index = this.toolbox.indexOf(this.toolBeingEdited);
    console.log(index);
    this.toolbox.splice(index, 1, tool);
    this.toolBeingEdited = null;
  }

  edit(tool: string) {
    this.toolBeingEdited = tool;
 }

}
