import { Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser'

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  constructor(
    public meta: Meta
  ) { }

  generateTags(config){
    config = {
      title: "Ng SEO",
      description: "Mi Angular Website",
      author: "",
      keywords: "",
      slug: "", //url
      ...config
    }
    this.meta.addTag({ name: 'description', content: 'How to use Angular 4 meta service' });
    this.meta.addTag({ name: 'author', content: 'talkingdotnet' });
    this.meta.addTag({ name: 'keywords', content: 'Angular, Meta Service' });

    // this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    // this.meta.updateTag({ name: 'twitter:site', content: '@MiTwitter' });
    // this.meta.updateTag({ name: 'twitter:title', content: config.title });
    // this.meta.updateTag({ name: 'twitter:description', content: config.description });
    // this.meta.updateTag({ name: 'twitter:image', content: config.image });

    // this.meta.updateTag({ property: 'og:type', content: 'article' });
    // this.meta.updateTag({ property: 'og:site_name', content: 'My Website Name' });
    // this.meta.updateTag({ property: 'og:title', content: config.title });
    // this.meta.updateTag({ property: 'og:description', content: config.description });
    // this.meta.updateTag({ property: 'og:image', content: config.image });
    // this.meta.updateTag({ property: 'og:url', content: `https://example.com/${config.slug}` });
  }
}
