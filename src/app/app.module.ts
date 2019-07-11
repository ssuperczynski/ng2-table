import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { routing } from './routes';
import { HighlightModule } from 'ngx-highlightjs';
import typescript from 'highlight.js/lib/languages/typescript';

export function hljsLanguages() {
  return [
    { name: 'typescript', func: typescript },
  ];
}

import {
  AsyncComponent,
  BasicComponent,
  CheckboxDefaultComponent,
  CheckboxesComponent,
  ClickEventComponent,
  CollapsedRowsComponent,
  ColTemplateComponent,
  ColumnWidthComponent,
  CustomFiltersComponent,
  CustomIntableSortComponent,
  CustomizeThemeComponent,
  CustomSortComponent,
  DynamicConfigurationComponent,
  DynamicRowComponent,
  ExchangeTemplateComponent,
  ExportsComponent,
  FilterTemplateComponent,
  FixedWidthComponent,
  GlobalSearchComponent,
  GroupRowsComponent,
  HorizontalScrollComponent,
  LiveUpdateComponent,
  ManyTablesComponent,
  ModalComponent,
  NoResultsTemplateComponent,
  PaginationComponent,
  PaginationRangeComponent,
  PersistStateComponent,
  ResizableComponent,
  RowTemplateComponent,
  SearchComponent,
  SelectAllTemplateComponent,
  SelectCellComponent,
  SelectColComponent,
  SelectRowComponent,
  ServerPaginationComponent,
  ServerSortComponent,
  SortComponent,
  StylesComponent,
  SummaryFooterComponent,
  TemplateComponent,
  ToggleColumnComponent,
  InlineComponent,
  InlineRowComponent,
  ContextMenuComponent,
  ApiComponent,
  ApiDocComponent,
  BootstrapComponent,
  DocComponent,
  InstallationComponent,
  PinnedComponent,
  ColumnClassComponent,
  NestedTableComponent,
  PersistStateRouterComponent,
  InfiniteScrollComponent,
  MobileComponent,
} from './demo';
import { TableModule } from 'ngx-easy-table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    TableModule,
    routing,
    HighlightModule.forRoot({
      languages: hljsLanguages,
    }),
  ],
  declarations: [
    AppComponent,
    BasicComponent,
    SearchComponent,
    PaginationComponent,
    GlobalSearchComponent,
    SortComponent,
    ClickEventComponent,
    TemplateComponent,
    SelectRowComponent,
    SelectColComponent,
    SelectCellComponent,
    ModalComponent,
    LiveUpdateComponent,
    ExchangeTemplateComponent,
    ServerPaginationComponent,
    RowTemplateComponent,
    ServerSortComponent,
    GroupRowsComponent,
    ManyTablesComponent,
    DynamicRowComponent,
    CustomSortComponent,
    CollapsedRowsComponent,
    HorizontalScrollComponent,
    CheckboxesComponent,
    CustomFiltersComponent,
    ToggleColumnComponent,
    DynamicConfigurationComponent,
    CheckboxDefaultComponent,
    ExportsComponent,
    ResizableComponent,
    ColumnWidthComponent,
    FixedWidthComponent,
    CustomizeThemeComponent,
    StylesComponent,
    ColTemplateComponent,
    SummaryFooterComponent,
    FilterTemplateComponent,
    CustomIntableSortComponent,
    PersistStateComponent,
    PaginationRangeComponent,
    AsyncComponent,
    SelectAllTemplateComponent,
    NoResultsTemplateComponent,
    InlineComponent,
    InlineRowComponent,
    ContextMenuComponent,
    ApiComponent,
    ApiDocComponent,
    BootstrapComponent,
    DocComponent,
    InstallationComponent,
    PinnedComponent,
    ColumnClassComponent,
    NestedTableComponent,
    PersistStateRouterComponent,
    InfiniteScrollComponent,
    MobileComponent,
  ],
  bootstrap: [AppComponent],
  providers: [],
})
export class AppModule {
}
