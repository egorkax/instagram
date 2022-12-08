import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'inst-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css'],
})
export class PipeComponent {
  title = 'It s random words for testing '
  url = 'https://angular.io/api/common/NgClass'
  date = new Date(2022, 4, 12, 10)
}
