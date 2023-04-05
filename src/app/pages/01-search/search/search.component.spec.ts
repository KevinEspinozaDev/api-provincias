import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { SearchComponent } from './search.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableComponent } from '../table/table.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from 'src/shared/material/material.module';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, MatFormFieldModule, BrowserAnimationsModule, HttpClientModule, MaterialModule],
      declarations: [SearchComponent, TableComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Debería verificar que el componente se creó correctamente', () => {
    expect(component).toBeTruthy();
  });

  it('Debería actualizar "nombreSubmitted" con el valor "buenos" al enviar el formulario.', () => {
    // Simulamos el ingreso de texto en el campo de nombre
    const nombreInput = fixture.nativeElement.querySelector('input[name="nombre"]');
    nombreInput.value = 'buenos';
    nombreInput.dispatchEvent(new Event('input'));

    // Simulamos el envío del formulario
    const form = fixture.nativeElement.querySelector('form');
    form.dispatchEvent(new Event('submit'));

    // Verificamos que el valor de nombreSubmitted sea 'buenos'
    expect(component.nombreSubmitted).toEqual('buenos');
  });

  it('Debería actualizar nombreSubmitted con el valor "rio" al enviar el formulario.', () => {
    // Simulamos el ingreso de texto en el campo de nombre
    const nombreInput = fixture.nativeElement.querySelector('input[name="nombre"]');
    nombreInput.value = 'rio';
    nombreInput.dispatchEvent(new Event('input'));

    // Simulamos el envío del formulario
    const form = fixture.nativeElement.querySelector('form');
    form.dispatchEvent(new Event('submit'));

    // Verificamos que el valor de nombreSubmitted sea 'rio'
    expect(component.nombreSubmitted).toEqual('rio');
  });

  it('Debería actualizar nombreSubmitted con el valor "n" al enviar el formulario', () => {
    // Simulamos el ingreso de texto en el campo de nombre
    const nombreInput = fixture.nativeElement.querySelector('input[name="nombre"]');
    nombreInput.value = 'n';
    nombreInput.dispatchEvent(new Event('input'));

    // Simulamos el envío del formulario
    const form = fixture.nativeElement.querySelector('form');
    form.dispatchEvent(new Event('submit'));

    // Verificamos que el valor de nombreSubmitted sea 'n'
    expect(component.nombreSubmitted).toEqual('n');
  });
});
