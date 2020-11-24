import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BatikPage } from './batik.page';

describe('BatikPage', () => {
  let component: BatikPage;
  let fixture: ComponentFixture<BatikPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BatikPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BatikPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
