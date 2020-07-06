import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TYTExamsPage } from './tyt-exams.page';

describe('TYTExamsPage', () => {
  let component: TYTExamsPage;
  let fixture: ComponentFixture<TYTExamsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TYTExamsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TYTExamsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
