import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

/* spinner */
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router
} from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { Config } from '../../app-config';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit, OnDestroy {
  public isSpinnerVisible = true;

  public themeConfig: any;

  constructor(
    private router: Router,
    @Inject(DOCUMENT) private document: Document,
    private activatedRoute: ActivatedRoute
  ) {
    this.router.events.subscribe(
      (event) => {
        if (event instanceof NavigationStart) {
          this.isSpinnerVisible = true;
        } else if (
          event instanceof NavigationEnd ||
          event instanceof NavigationCancel ||
          event instanceof NavigationError
        ) {
          this.isSpinnerVisible = false;
        }
      },
      () => {
        this.isSpinnerVisible = false;
      }
    );

    this.themeConfig = Config.config;
  }

  ngOnDestroy(): void {
    this.isSpinnerVisible = false;
  }

  ngOnInit(): void {}
}
