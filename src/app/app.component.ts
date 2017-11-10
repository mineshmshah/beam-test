import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Name that cat!';
  isDisabled = true;
  txt= 'cats';
  tab = '';
  tabText= '';
  count = 0;
  catName= '';
  term = 'cats';

  attacker:any;
  runAway:any;
  searchBar:any;

  cat1: any = {
    name: 'Happy',
    age: 12,
    attackPower: 3,
    armour: 0,
    magic: 16
  };
  cat2: any = {
    name: 'Crappy',
    age: 12,
    attackPower: 3,
    armour: 0,
    magic: 16
  };
  cat3: any = {
    name: 'Sad',
    age: 12,
    attackPower: 3,
    armour: 0,
    magic: 16
  };
  cats: Array<any> = [this.cat1 , this.cat2, this.cat3];

  constructor() {
    // setInterval(() => {
    //   this.isDisabled = !this.isDisabled;
    //   this.txt += 'cats';
    // }, 1000);
  }
  updateTerm(term) {
    // console.log(this.term);
    this.term = term;
  }
  sortByName() {
    this.cats.sort(function(a, b) {
      const nameA = a.name.toUpperCase(); // ignore upper and lowercase
      const nameB = b.name.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      // names must be equal
      return 0;
    });
  }
  handleTabEvent(evt) {
    this.tabText = evt.target.value;
}
}

