/* Commençons par importer les objets nécessaires */
import { inject, TestBed } from '@angular/core/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import {
  HttpClientTestingModule, HttpTestingController
} from '@angular/common/http/testing';
import { FrescosesService } from './frescoses.service';
import { Frescoes } from '../model/Frescoes'
import { Observable } from 'rxjs';
import { AppDataState } from '../state/frescoes.state';
describe('FrescosesService', () => {
  let service: FrescosesService;

  let http, backend: HttpTestingController;
  frescoes$:new Observable<AppDataState<Frescoes[]>>();
  /*Créons notre module de test :*/
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ FrescosesService ]
    });

    /*Injectons nos services */
    beforeEach(inject([FrescosesService, HttpClient, HttpTestingController],(
       conf: FrescosesService,
      _h: HttpClient,
      _b: HttpTestingController) => {
        service = conf;
        http= _h;
        backend= _b;
      }))
  });


  /*Après chaque test, nous allons devoir vérifier que les requêtes ont bien été terminées */
  afterEach(inject([HttpTestingController], (httpMock: HttpTestingController) => {

    httpMock.verify();

 }));


 /*Codons maintenant notre test :*/
 it('should get data', () => {
  service.getAll().subscribe(res => {

    const list: Frescoes[] = [

    ];

      expect(res).toBe(list);
  });
  const req = backend.expectOne({
      url: '/frescoes',
      method: 'GET'
  });
  req.flush({ status: 200});
});

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});
