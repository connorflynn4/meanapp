import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';


  getUrl() {
      return "url('https://cdn.japantimes.2xx.jp/wp-content/uploads/2017/12/p7-debito-a-20180104-870x522.jpg')";
    }
}
