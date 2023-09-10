import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faArrowRight, faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { productos } from './products';
import * as Isotope from 'isotope-layout';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  selectedFilter: string = "*";
  faStar = faStar;
  faCartPlus = faCartPlus;
  listaDeProductos = productos;
  faArrowRight = faArrowRight;

  @ViewChild('filters') filters!: ElementRef;
  private isotope!: Isotope;


  constructor() { }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {

    this.isotope = new Isotope('.product-container', {
      itemSelector: '.product-item',
      layoutMode: 'fitRows'

    });

    const filterButtons = this.filters.nativeElement.querySelectorAll('li');
    filterButtons.forEach((button: any) => {
      button.addEventListener('click', () => {
        const filterValue = button.getAttribute('data-filter');
        this.filterItems(filterValue);
      });
    });
  }

  filterItems(filter: string): void {
    // Filtra los elementos según la clase de filtro
    this.isotope.arrange({ filter });
    this.selectedFilter = filter;
  }
}






