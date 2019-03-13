import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'dash',
    loadChildren: '@tabularius/modules/app-dash#AppDashModule'
  },
  {
    path: 'journal',
    loadChildren: '@tabularius/modules/app-journal#AppJournalModule'
  },
  {
    path: 'reports',
    loadChildren: '@tabularius/modules/app-reports#AppReportsModule'
  },
  {
    path: 'import',
    loadChildren: '@tabularius/modules/app-import#AppImportModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: []
})
export class AppRoutingModule {}
