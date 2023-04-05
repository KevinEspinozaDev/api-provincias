import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { SearchService } from '../services/search.service';

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

  @Input() nombreSearched: string = '';

  provincias: Array<Provincia> = [];
  displayedColumns: string[] = ['nombre', 'lat', 'lon'];
  loading: boolean = false;

  constructor(
    private searchService: SearchService,
  ){ }


  ngOnInit(): void {
  }

  // Este método se invoca cada vez que ocurre un cambio en un valor de entrada
  ngOnChanges(changes: SimpleChanges) {

    if (changes['nombreSearched'] && changes['nombreSearched'].currentValue !== '') {
      this.getDataProvincias(changes['nombreSearched'].currentValue);
    }

  }

  getDataProvincias(nombreSearched:string): void{

    this.loading = true;

    this.searchService.getData(nombreSearched)
      .subscribe({
        next: (res) => {
          this.provincias = res.provincias;
          this.loading = false;
        },
        error: (error) => {
          console.error(error);
        }
    });
  }

}
