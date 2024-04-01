import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  userList = [""]
  userName : string = ""
 

onclick(){
   this.userList.push(this.userName)
}
ondelete(){
  const index = this.userList.indexOf(this.userName);
    this.userList.splice(index, 1);

}
}