import { Directive ,HostListener, ElementRef} from '@angular/core';
@
Directive({
    selector: '[hoverDir]'
})

 export class HoverDirective { 
    constructor(private el: ElementRef) {
       
     }
    @HostListener('mouseenter') onMouseEnter() {
       this.el.nativeElement.class = 'list-group-item list-group-item-action active';
    }

     @HostListener('mouseleave') onMouseLeave() {
       this.el.nativeElement.class = 'list-group-item list-group-item-action';
     }
}