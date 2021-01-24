import { Injectable } from "@angular/core"
import {Print} from "./print.service"

@Injectable()
export class Service{
	array : number[] = []
	constructor(private log : Print){}
	print(){
		this.log.print(this.array)
	}
}

