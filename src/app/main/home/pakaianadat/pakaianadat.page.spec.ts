import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PakaianadatPage } from './pakaianadat.page';

describe('PakaianadatPage', () => {
  let component: PakaianadatPage;
  let fixture: ComponentFixture<PakaianadatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PakaianadatPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PakaianadatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
