
class employee {
    constructor (name, surname, phoneNumber, occupation, education, dateOfEmployment, dateOfRelease ) {
          this.name = name 
          this.surname = surname
          this.phoneNumber = phoneNumber
          this.occupation = occupation
          this.education = education
          this.dateOfEmployment = dateOfEmployment
          this.dateOfRelease = dateOfRelease
      }
          
          get occupation() {
              return this._occupation
          }
          set occupation (value) {
              if (['systemAnalist', 'webDeveloper', 'networkEngineer', 'softwareEngineer'].includes(value)) this._position = value
              else this._occupation = false 
          }
          
          get dateOfEmployment() {
              return this._dateOfEmployment
          }
          set dateOfEmployment(value) {
              if (value > todayYear) this._dateOfEmployment = false
              else this._dateOfEmployment = value
          }
          
          get dateOfRelease() {
              return this._dateOfRelease
          }
          set dateOfRelease(value) {
              if (value < this._dateOfRelease) this._dateOfRelease = false
              else this._dateOfRelease = value
          }
  }
  
  
  
  const employee1 = new employee ('Oliver', 'Smitt', '+380948573621', 'softwareEngineer', 'javaScriptDeveloper', 2015, 2018); 
  const employee2 = new employee ('Noah', 'Reate', '+380992648317', 'networkEngineer', 'javaScriptDeveloper', 2020, 2022); 
  
  console.log (employee1)
  console.log (employee2)