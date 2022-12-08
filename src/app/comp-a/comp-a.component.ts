import { Component, OnInit } from '@angular/core'
import { ValueService } from '../service/value.service'

@Component({
  selector: 'inst-comp-a',
  templateUrl: './comp-a.component.html',
  styleUrls: ['./comp-a.component.css'],
})
export class CompAComponent implements OnInit {
  constructor(private valueService: ValueService) {}
  public test = 0

  ngOnInit(): void {}
}
