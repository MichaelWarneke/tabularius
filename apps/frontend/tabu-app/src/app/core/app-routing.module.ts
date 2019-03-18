import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IsAuthenticatedGuard } from '@tabularius/core/router-guards';

const routes: Routes = [
  {
    path: 'account',
    loadChildren: '@tabularius/modules/app-account#AppAccountModule'
  },
  {
    path: 'dash',
    loadChildren: '@tabularius/modules/app-dash#AppDashModule',
    canActivate: [IsAuthenticatedGuard]
  },
  {
    path: 'journal',
    loadChildren: '@tabularius/modules/app-journal#AppJournalModule',
    canActivate: [IsAuthenticatedGuard]
  },
  {
    path: 'reports',
    loadChildren: '@tabularius/modules/app-reports#AppReportsModule',
    canActivate: [IsAuthenticatedGuard]
  },
  {
    path: 'import',
    loadChildren: '@tabularius/modules/app-import#AppImportModule',
    canActivate: [IsAuthenticatedGuard]
  },
  {
    path: 'setup',
    loadChildren: '@tabularius/modules/app-setup#AppSetupModule',
    canActivate: [IsAuthenticatedGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: []
})
export class AppRoutingModule {}
