import { Injectable } from "@angular/core"
// this make the service available in all the application 
@Injectable({providedIn: 'root'})

export class Print{
	print(array: number[]){
		console.log(array)
	}
}

