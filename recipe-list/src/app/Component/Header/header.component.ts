import {Component,Input, EventEmitter, Output} from "@angular/core"
@Component({
	selector: "app-header",
	templateUrl:"./header.component.html"
})

export class HeaderComponent{
	collapsed = true;
	@Output() changePage : EventEmitter<void> = new EventEmitter();


	triggerChangePage(page){
		this.changePage.emit(page)
	}
}
