import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Params } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
private homeId:number;     //定义一个变量来接收路由传递过来的homeid
  constructor(private roteInfo:ActivatedRoute) { }
  //从URL中去参数
  ngOnInit() {
    this.roteInfo.params.subscribe((params:Params)=>this.homeId=params["id"]);
  }
}

export class Home{
  constructor(public id:number){}
}
