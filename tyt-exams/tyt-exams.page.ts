import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { firestore } from 'firebase/app';
import { Http } from '@angular/http';



@Component({
  selector: 'app-tyt-exams',
  templateUrl: './tyt-exams.page.html',
  styleUrls: ['./tyt-exams.page.scss'],
})
export class TYTExamsPage implements OnInit {


  turkce;
  mat;
  sosyal;
  fen;
  obp;

  constructor(public http: Http,
    public afStore: AngularFirestore,
    public service: UserService) { }

  tytHesap() {

    console.log('hesaplandı')
    var turkce = parseInt(this.turkce);
    var mat = parseInt(this.mat);
    var sosyal = parseInt(this.sosyal);
    var fen = parseInt(this.fen);

    var obp = parseInt(this.obp);

    var Puan = turkce * 3.3 + mat * 3.3 + sosyal * 3.4 + fen * 3.4 + obp * 0.6 + 100;
   
    
    var Puans = Puan,
      toString = Puans.toString(),
      toConcat = Puans + "";
    

    this.afStore.doc(`users/${this.service.getUID()}`).update({
      tyt: firestore.FieldValue.arrayUnion({
        Puans,
        
      })
    })




    alert('TYT PUANINIZ : ' + Puan +     '  veritabıba gönderildi.')
    

  }




  ngOnInit() {
  }

}
