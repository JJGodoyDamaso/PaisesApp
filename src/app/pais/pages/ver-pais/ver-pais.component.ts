import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { switchMap, tap } from 'rxjs';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!:Country;

  constructor(private activatedRoute: ActivatedRoute, private paisService: PaisService) { }

  ngOnInit(): void {
   
    this.activatedRoute.params
    .pipe(
      switchMap((params)=> this.paisService.getPaisPorCodigo(params['id'])),
      tap(console.log)
    )
    .subscribe(pais => {
      console.log(pais);
      console.log(pais[0]);
      this.pais = pais[0];
    })

    // this.activatedRoute.params.subscribe((params:Params)=>{
    //   console.log(params['id']);
    //   this.paisService.getPaisPorCodigo(params['id']).subscribe((pais)=>{
    //     console.log(pais);
    //   })
    // });
  }

}
