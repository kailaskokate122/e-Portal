import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ThemeableBrowser, ThemeableBrowserOptions, ThemeableBrowserObject } from '@ionic-native/themeable-browser/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  options: ThemeableBrowserOptions = {
    statusbar: {
      color: '#ffffffff'
    },
    toolbar: {
      height: 44,
      color: '#485461'
    },
    title: {
      color: '#fff0f0ff',
      showPageTitle: true,
      staticText: 'e-Portal'
    },
    backButton: {
      wwwImage: 'assets/logo3.png',
      align: 'left',
      event: 'backPressed'
    },
    closeButton: {
      wwwImage: 'assets/logout.png',
      align: 'right',
      event: 'closePressed'
    },
    backButtonCanClose: true
  };

  constructor(private themeableBrowser: ThemeableBrowser, private router: Router) { //private iab: InAppBrowser

  }

  ngOnInit() {

  }

  ionViewWillEnter() {
    this.openInAppBrowser();
  }


  openInAppBrowser() {
    const browser: ThemeableBrowserObject = this.themeableBrowser.create('https://ionicframework.com/', '_blank', this.options);
    browser.on('closePressed').subscribe(data => {
      browser.close();
      this.router.navigateByUrl('/login');
    });
    browser.on('backPressed').subscribe(data => {
      browser.close();
      this.router.navigateByUrl('/login');
    })
  }

}
