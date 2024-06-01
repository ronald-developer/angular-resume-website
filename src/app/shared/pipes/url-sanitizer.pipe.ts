import { Pipe, PipeTransform, Sanitizer, SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'urlSanitizer'
})
export class UrlSanitizerPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {

  }

  transform(value: string): unknown {
    return this.sanitizer.bypassSecurityTrustResourceUrl(value);
  }

}
