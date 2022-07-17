import { Observable } from "rxjs";

interface Pineapple extends iFruit{
    fruits:Observable<string>,
}