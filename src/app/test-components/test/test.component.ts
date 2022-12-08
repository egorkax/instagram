import { Component } from '@angular/core'

interface Fruit {
  id: string
  name: string
  price: number
}

@Component({
  selector: 'inst-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent {
  fruits: Array<Fruit> = [
    { id: '1', name: 'apple', price: 10 },
    { id: '2', name: 'orange', price: 20 },
    { id: '3', name: 'banana', price: 30 },
    { id: '4', name: 'pears', price: 70 },
    { id: '5', name: 'avocados', price: 5 },
    { id: '6', name: 'kiwi', price: 6 },
    { id: '7', name: 'limon', price: 67 },
    { id: '8', name: 'sliva', price: 34 },
    { id: '9', name: 'tomato', price: 22 },
    { id: '10', name: 'potato', price: 89 },
  ]
  constructor() {}
}
