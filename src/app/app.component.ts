import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  members: any = [];

  initializeList() {
    var list = JSON.parse(localStorage.getItem('list') || '[]');
    if (list !== []) {
      list.map((data: any, index: number) => (data.id = index + 1));
    }
    this.members = list;
  }

  onSubmit(data: any) {
    console.log('form submitted', data);
    if (data.invalid) {
      alert('Check your values and Field cannot be empty');
      return;
    }
    // alert('Successfullt Submitted');
    const { name, age, gender } = data.value;
    this.members.push({ id: null, name, age, gender });
    localStorage.setItem('list', JSON.stringify(this.members));
  }

  getList() {
    if (Object.keys(this.members).length === 0) return true;
    else return false;
  }

  deleteItem(id: number) {
    var newList = this.members.filter(
      (data: any, index: number) => index !== id - 1
    );
    localStorage.setItem('list', JSON.stringify(newList));
  }
}
