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
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CompanyInfoComponent } from './company-info/company-info.component';
import { OverviewFinanceHighlightsComponent } from './overview-finance-highlights/overview-finance-highlights.component';
import { OverviewEmployeesComponent } from './overview-employees/overview-employees.component';
import { OverviewRecentNewsComponent } from './overview-recent-news/overview-recent-news.component';
import { OverviewCompanyProductsComponent } from './overview-company-products/overview-company-products.component';
import { SankeyChartComponent } from './sankey-chart/sankey-chart.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { GeoChartComponent } from './geo-chart/geo-chart.component';


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
    CompanyInfoComponent,
    OverviewFinanceHighlightsComponent,
    OverviewEmployeesComponent,
    OverviewRecentNewsComponent,
    OverviewCompanyProductsComponent,
    SankeyChartComponent,
    GeoChartComponent,

    
  ],
  imports: [
    BrowserModule,
    NgChartsModule,
    HttpClientModule,
    FormsModule,
    NgxEchartsModule.forRoot({ echarts: () => import('echarts') })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
