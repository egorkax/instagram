import { Component, EventEmitter, Output } from '@angular/core'

@Component({
  selector: 'inst-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent {
  @Output() sendGradeEvent = new EventEmitter<string>()
  inputValue = ''

  sendGradeHandler() {
    this.sendGradeEvent.emit(this.inputValue)
  }
}
