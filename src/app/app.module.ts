import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { InternalNavbarComponent } from './internal-navbar/internal-navbar.component';
import { OverviewComponent } from './overview/overview.component';
import { FinancialsComponent } from './financials/financials.component';
import { SpendAnalysisComponent } from './spend-analysis/spend-analysis.component';
import { EmployeesComponent } from './employees/employees.component';
import { OrgChartsComponent } from './org-charts/org-charts.component';
import { EmployeeTrendsComponent } from './employee-trends/employee-trends.component';
import { BuyerIntentComponent } from './buyer-intent/buyer-intent.component';
import { CompetitorsComponent } from './competitors/competitors.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { NewsFeedComponent } from './news-feed/news-feed.component';
import { JobsComponent } from './jobs/jobs.component';
import { NgChartsModule } from 'ng2-charts';
import { SpendDetailsComponent } from './spend-details/spend-details.component';
import { CompetitorDetailsComponent } from './competitor-details/competitor-details.component';


@NgModule({
  declarations: [
    AppComponent,
    InternalNavbarComponent,
    OverviewComponent,
    FinancialsComponent,
    SpendAnalysisComponent,
    EmployeesComponent,
    OrgChartsComponent,
    EmployeeTrendsComponent,
    BuyerIntentComponent,
    CompetitorsComponent,
    TechnologiesComponent,
    NewsFeedComponent,
    JobsComponent,
    SpendDetailsComponent,
    CompetitorDetailsComponent,
  ],
  imports: [
    BrowserModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
