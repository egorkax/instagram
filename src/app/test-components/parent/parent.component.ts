import { Component } from '@angular/core'

export interface Lesson {
  id: number
  title: string
  weekGrades: Array<{ id: number; gradeItem: number }>
}

@Component({
  selector: 'inst-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent {
  isLoading = true
  lessons: Lesson[] = [
    {
      id: 0,
      title: 'Math',
      weekGrades: [
        { id: 0, gradeItem: 5 },
        { id: 1, gradeItem: 4 },
        { id: 2, gradeItem: 3 },
      ],
    },
    {
      id: 0,
      title: 'Engl',
      weekGrades: [
        { id: 0, gradeItem: 3 },
        { id: 1, gradeItem: 4 },
        { id: 2, gradeItem: 3 },
      ],
    },
  ]
  value = ''

  constructor() {
    setTimeout(() => {
      this.isLoading = false
    }, 3000)
  }
  getGrade(grade: string) {
    // this.grades.push(grade)
  }
}
