import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ScrollSpyService } from '../components/scroll-spy/scroll-spy.service';
import { Config } from '../app-config';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  public currentSection;
  public themeConfig: any;

  constructor(public scrollSpy: ScrollSpyService, private activatedRoute: ActivatedRoute ) {
    this.themeConfig = Config.config;

    console.log(this.themeConfig);

  }

  ngOnInit(): void {}

  onSectionChange(sectionId: string) {
    this.currentSection = sectionId;
    this.scrollSpy.nextCount(sectionId);
  }

}
