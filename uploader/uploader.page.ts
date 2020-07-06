import { Component, OnInit, ViewChild } from '@angular/core';
import { Http } from '@angular/http';
import { AngularFirestore } from '@angular/fire/firestore';
import { UserService } from 'src/app/user.service';
import { firestore } from 'firebase/app';

@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.page.html',
  styleUrls: ['./uploader.page.scss'],
})
export class UploaderPage implements OnInit {

  imageURL: string
  aciklama: string

  
  //@ViewChild('filebtn') filebtn;
  //@ViewChild('filebtn') button;
    constructor(public http: Http,
      public afStore: AngularFirestore,
      public service: UserService) { }

  ngOnInit() {
  }
  
resimYukle(){



}
  postOlustur() {
    const resim = this.imageURL
    const aciklama = this.aciklama

    this.afStore.doc(`users/${this.service.getUID()}`).update({
      posts: firestore.FieldValue.arrayUnion({
        resim,
        aciklama
      })
    })


  }
  fileChanged(event) {
    const files = event.target.files
    //console.log(files)

    const data = new FormData()
    data.append('file', files[0])
    data.append('UPLOADCARE_STORE', '1')
    data.append('UPLOADCARE_PUB_KEY', 'fc5ebdd700b30c2ada4b')
    this.http.post('https://upload.uploadcare.com/base/', data).subscribe(event => {
      //console.log(event)
      this.imageURL = event.json().file
    })
  }
}
