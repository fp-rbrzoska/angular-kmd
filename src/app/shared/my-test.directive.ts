import { Directive, ElementRef, Input, OnInit, Renderer2, TemplateRef, ViewContainerRef } from '@angular/core';
import { TestService } from '../core/test.service';
import { ButtonComponent } from './button/button.component';

@Directive({
  selector: '[kmdMyTest]'
})
export class MyTestDirective implements OnInit {

  @Input() kmdMyTest!: number
  constructor(
    // private _el: ElementRef<HTMLElement>,
    // private _renderer: Renderer2,
    private _testService: TestService,
    private _template: TemplateRef<any>,
    private _vcr: ViewContainerRef) {

    // _el.nativeElement.setAttribute('style',"color:red")
    // _renderer.setStyle(_el.nativeElement, 'color', 'blue')
   }

   ngOnInit() {
    for(let i=0; i<this.kmdMyTest; i++){

    this._vcr.createEmbeddedView(this._template)
    }
   }

}
