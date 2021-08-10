import { Component, OnInit } from '@angular/core';
import { MetatagsService } from 'src/app/services/metatags.service';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-success-stories',
  templateUrl: './success-stories.component.html',
  styleUrls: ['./success-stories.component.scss']
})
export class SuccessStoriesComponent implements OnInit {

	testtmonials = [
		{
			img: 'assets/images/sucess-stories/LG-Electronics-Colombia.jpg',
			name: 'LG Electronics',
			occupation: 'Ximena Delatorre<br>Human Resources Manager',
			description: '“Por la diligencia, los resultados y el profesionalismo con que han llevado el sistema de gestión al resultado esperado como lo acordamos en nuestras negociaciones iniciales. El seguimiento, control y presentación de reportes, acompañados de la empatía de las personas con las que estamos día a día ha sido intachable. Se nota el liderazgo de aSERseguridad en nuestros logros.”'
		},
		{
			img: 'assets/images/sucess-stories/Arte-Pop.png',
			name: 'ArtePOP SAS',
			occupation: 'Adriana González',
			description: '“Cuentan con un equipo altamente calificado y su trabajo y servicio ha sido vital para nuestra compañía.”'
		},
		{
			img: 'assets/images/sucess-stories/Expreso-Andino-de-Carga copy.png',
			name: 'Expreso Andino de Carga',
			occupation: 'Liliana Ruiz<br>Jefe SST',
			description: '“Se mantiene un excelente seguimiento y prestación del servicio, acorde a las necesidades de la organización.”'
		},
		{
			img: 'assets/images/sucess-stories/Banco-Agrario-de-Colombia.jpg',
			name: 'Banco Agrario de Colombia',
			occupation: 'Ángela Torres<br>Profesional Universitario',
			description: '“Excelentes profesionales, capacidades técnicas, servicios mas allá de los contratados.”'
		},
		{
			img: 'assets/images/sucess-stories/CM_.png',
			name: 'CM& Televisión',
			occupation: 'John David Méndez<br>Gerente de Proyectos CM&',
			description: '“Gracias a su experiencia estamos logrando cumplir las metas propuestas.”'
		},
		{
			img: 'assets/images/sucess-stories/Ecopositiva.png',
			name: 'Ecopositiva',
			occupation: 'Giovanni González Lesmes<br>Dirección HSEQ',
			description: '“Hemos tenido excelente apoyo de la empresa razón por la cual la experiencia a sido muy buena.”'
		},
		{
			img: 'assets/images/sucess-stories/NTC-Nacional-de-Television-y-Comunicaciones.png',
			name: 'NTC Televisión',
			occupation: 'Marcela Motta<br>Administración y SST',
			description: '“Porque el asesor que nos ha atendido durante la vigencia del contrato ha sido excelente, su manejo de las actividades y del personal, es maravilloso y siempre están a resolver cualquier duda e inquietud que se presente.”'
		},
		{
			img: 'assets/images/sucess-stories/Seguridad-Privada-KGB.jpg',
			name: 'Seguridad Privada KGB',
			occupation: 'Wilson Rivera<br>Gerente de Operaciones',
			description: '“Calidad y excelencia en los servicios recibidos, una organización comprometida e innovadora.”'
		}
	]
	constructor(
		private _title: Title,
		private _metaService: Meta,
		private metaServ: MetatagsService) { 
		console.log("Testimonios", this.testtmonials)
	}

	ngOnInit() {
		this.metaServ.createCanonicalURL();
		this._title.setTitle('Casos de éxito - Respaldados por nuestra marca');    
		this._metaService.updateTag({
		name: 'description', content: 'Nuestros clientes son respaldados por nuestra marca, garantizandoles tranquilidad y confianza gestionando la seguridad y salud en el trabajo'
		});
		this._metaService.addTag({
		name: 'author', content: '@Maaaik_reyes'
		});
		this._metaService.updateTag({
		name: 'keywords', content: 'Empresas de SST, Riesgos Laborales, Consultoría en SST, Asesoría en SST, SG-SST'
		});
	}

}
