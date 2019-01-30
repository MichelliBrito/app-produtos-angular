import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  produtos: Produto[] = [];

  constructor(public rest:RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(): void {
    this.rest.getProducts().subscribe((produtos: Produto []) => {
      this.produtos = produtos,
      console.log(produtos);
    });
  }

  add() {
    this.router.navigate(['/product-add']);
  }

}
