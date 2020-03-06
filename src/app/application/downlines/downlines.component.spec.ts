import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DownlinesComponent } from './downlines.component';

describe('DownlinesComponent', () => {
  let component: DownlinesComponent;
  let fixture: ComponentFixture<DownlinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DownlinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DownlinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
