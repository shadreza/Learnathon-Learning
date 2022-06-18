import { ValidatorFn, AbstractControl, ValidationErrors } from "@angular/forms";

export function ageValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const todayDate: Date = new Date()
    const date: Date = control.value
    if (!date) {
      return { notEligible : {value : control.value} }
    }
    const yearsLived: number = todayDate.getFullYear() - date.getFullYear()
    let result : boolean = false
    if (yearsLived > 18) {
      result = true
    } else if (yearsLived == 18) {
      const monthsLived: number = todayDate.getMonth() - date.getMonth()
      if (monthsLived > 0) {
        result = true
      } else if (monthsLived == 0) {
        const daysLived: number = todayDate.getDay() - date.getDay()
        if (daysLived >= 0) {
          result = true
        } else {
          result = false
        }
      } else {
        result = false
      }
    } else {
      result = false
    }

    return result ? null : { notEligible : {value : control.value} }

  }
}
