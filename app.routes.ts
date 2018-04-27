import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';


  
  
  

export const routes: Routes=[ 
    {path: '', redirectTo: 'sppages', pathMatch: 'full'},
    {path: 'sppages', loadChildren: './sppages/sppages.module#SppagesModule'}
];

export const routing: ModuleWithProviders=RouterModule.forRoot(routes, { useHash: true })


