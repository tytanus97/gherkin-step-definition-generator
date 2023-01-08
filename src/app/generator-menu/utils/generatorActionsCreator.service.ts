import { Injectable } from "@angular/core";
import { of } from "rxjs";

@Injectable()
export class GeneratorActionsCreatorService {

    getGeneratorActions() {
        return of([])
    }
}