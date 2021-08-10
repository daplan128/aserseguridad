import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

	constructor(
		public title: Title,
		public meta: Meta,
		private router: Router
	) {
		this.router.errorHandler = (error: any) => {
			let routerError = error.toString();			
			if (routerError.indexOf('Cannot match any routes') >= 0 ) {
				console.log("Error 404 URL", routerError)
				this.router.navigate(['/404']);
			} else {
				console.log("Error THORW", error)
				throw error;
			}
		}		
	}

  ngOnInit() {
    //Meta
    // this.title.setTitle('aSERseguridad');
    // this.meta.addTag({ name: 'description', content: 'Sistemas de gestión de seguridad y salud en el trabajo'});
    // this.meta.addTag({ name: 'keywords', content: 'SGSST, Sistemas de gestión de seguridad y salud en el trabajo, SST, Seguridad y salud en el trabajo, SG-SST'});
  }
}
