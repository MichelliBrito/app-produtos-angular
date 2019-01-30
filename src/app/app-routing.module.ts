import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { ProdutosComponent } from './produtos/produtos.component';
import { ProdutoAddComponent } from './produto-add/produto-add.component';

const routes: Routes = [
  {
    path: 'produtos',
    component: ProdutosComponent
  },
  {
    path: 'produto-add',
    component: ProdutoAddComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
