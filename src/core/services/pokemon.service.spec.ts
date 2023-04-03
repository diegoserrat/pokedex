import { async, getTestBed, TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { PokemonService } from './pokemon.service';

describe('PokemonService', () => {
  let injector: TestBed;
  let service: PokemonService;
  let httpClient: HttpClient;
  let httpMock: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: []
    }).compileComponents()
    .then(() => {
        injector = getTestBed();
        httpClient = injector.get(HttpClient);
        httpMock = injector.get(HttpTestingController);
        service = injector.get(PokemonService);
    });
  }));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
