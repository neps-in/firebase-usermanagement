import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppHomeComponent } from './app-home.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppHomeComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppHomeComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'firebase-usermanagement'`, () => {
    const fixture = TestBed.createComponent(AppHomeComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('firebase-usermanagement');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppHomeComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to firebase-usermanagement!');
  });
});
