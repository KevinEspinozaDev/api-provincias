import { Component, Input, OnInit } from '@angular/core';
import { SearchService } from '../services/search.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];


interface Centroide{
  lat: string;
  lon: string;
}
interface Provincia{
  id: string;
  nombre: string;
  centroide: Centroide;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  provincias: Array<Provincia> = [];

  constructor(
    private searchService: SearchService,
  ){

  }

  @Input() provincia: string = '';
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

  ngOnInit(): void {
      this.getDataProvincias(this.provincia);
  }

  getDataProvincias(provincia:string): void{

    this.searchService.getData(provincia)
      .subscribe({
        next: (res) => {
          this.provincias = res.provincias;
        },
        error: (error) => {
          console.error(error);
        }
    });
  }

}
