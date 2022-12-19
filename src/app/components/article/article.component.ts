import { Component } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent {

estatus = false;
estatus2 = true;

  toggleBtn(){
    this.estatus = !this.estatus;
    this.estatus2 = !this.estatus2;
  }

}
