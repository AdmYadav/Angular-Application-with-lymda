import { Component, OnInit } from '@angular/core';
import { DisplayService, Config } from '../displayservice.service';

@Component({
  selector: 'app-displayrec',
  templateUrl: './displayrec.component.html',
  styleUrls: ['./displayrec.component.css']
})
export class DisplayrecComponent implements OnInit {

  json_arr: any;

  constructor(private displayService: DisplayService) { }

  ngOnInit() {
    this.showConfig();
  }

  async showConfig() {
    (await this.displayService.getConfig())
      .subscribe(
        (data: Config) => {
          console.log("TYPE OF DATA IS ",typeof(data));
          console.log(data);
          this.json_arr = data;
          console.log(this.json_arr);
          this.json_arr = JSON.parse(this.json_arr);
          console.log("TYPE OF JSON_ARR IS ",typeof(this.json_arr));
        }
      );
  }
}


  // showConfig() {
  //   this.displayService.getConfig()
  //     .subscribe((data: Config) => this.config = {
  //         name: data['name'],
  //         age:  data['age']
  //     });
  // }


