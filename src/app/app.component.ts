import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public data: any = {
    email: "",
    subject: "",
    description: ""
  }

  constructor(db: AngularFireDatabase) {
    this.data = db.list('/data');
  }
  cancel(): void {
    console.log('do nothing')
  }
  
  save(): void {
    let error = false;
    if (this.data.subject.length > 80) {
      alert("It is more than 80 char");
      return;
    }
    if (this.data.description.length > 400) {
      error = true;
    }

    if (error === false) {
      this.data.push({
        "email": this.data.email,
        "subject": this.data.subject,
        "description": this.data.description
      });
      console.log(this.data);
    }
  }
}
