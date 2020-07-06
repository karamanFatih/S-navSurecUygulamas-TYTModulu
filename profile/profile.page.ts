import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { UserService } from 'src/app/user.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  userPosts
  constructor(public afStore:AngularFirestore, public service:UserService) {
    const posts = this.afStore.doc(`users/${this.service.getUID()}`)
  
    this.userPosts=posts.valueChanges()
  }
  ngOnInit() {
  }

}
