export class ROUTE {
  public static readonly BASIC = 'basic';
  public static readonly SEARCH = 'search';
  public static readonly PAGINATION = 'pagination';
  public static readonly SERVER_PAGINATION = 'server-pagination';
  public static readonly SERVER_SORT = 'server-sort';
  public static readonly GLOBAL_SEARCH = 'global-search';
  public static readonly SORT = 'sort';
  public static readonly CLICK_EVENT = 'click-event';
  public static readonly TEMPLATE = 'template';
  public static readonly MODAL = 'modal';
  public static readonly LIVE_UPDATE = 'live-update';
  public static readonly SELECT_ROW = 'select-row';
  public static readonly SELECT_COL = 'select-col';
  public static readonly SELECT_CELL = 'select-cell';
  public static readonly ROW_TEMPLATE = 'row-template';
  public static readonly GROUP_ROWS = 'group-rows';
  public static readonly MANY_TABLES = 'many-tables';
  public static readonly DYNAMIC_ROW = 'dynamic-row';
  public static readonly CUSTOM_SORT = 'custom-sort';
  public static readonly COLLAPSED_ROWS = 'collapsed-rows';
  public static readonly CHECKBOXES = 'checkboxes';
  public static readonly CHECKBOX_DEFAULT = 'checkbox-default';
  public static readonly HORIZONTAL_SCROLL = 'horizontal-scroll';
  public static readonly CUSTOM_FILTERS = 'custom-filters';
  public static readonly TOGGLE_COLUMN = 'toggle-column';
  public static readonly DYNAMIC_CONFIGURATION = 'dynamic-configuration';
  public static readonly EXPORTS = 'exports';
  public static readonly RESIZABLE = 'resizable';
  public static readonly COLUMN_WIDTH = 'column-width';
  public static readonly FIXED_WIDTH = 'fixed-width';
  public static readonly CUSTOMIZE_THEME = 'customize-theme';
  public static readonly STYLES = 'styles';
  public static readonly COL_TEMPLATE = 'col-template';
  public static readonly SUMMARY_FOOTER = 'summary-footer';
  public static readonly FILTER_TEMPLATE = 'filter-template';
  public static readonly FILTER_HEADER_TEMPLATE = 'filter-header-template';
  public static readonly CUSTOM_INTABLE_SORT = 'custom-intable-sort';
  public static readonly PERSIST_STATE = 'persist-state';
  public static readonly PAGINATION_RANGE = 'pagination-range';
  public static readonly ASYNC = 'async';
  public static readonly SELECT_ALL_TEMPLATE = 'select-all-template';
  public static readonly NO_RESULTS_TEMPLATE = 'no-results-template';
  public static readonly INLINE_CELL = 'inline-cell';
  public static readonly INLINE_ROW = 'inline-row';
  public static readonly CONTEXT_MENU = 'context-menu';
  public static readonly API = 'api';
  public static readonly BOOTSTRAP = 'bootstrap';
  public static readonly DOC = 'doc';
  public static readonly API_DOC = 'api-doc';
  public static readonly INSTALLATION = 'installation';
  public static readonly PINNED = 'pinned';
  public static readonly COLUMN_CLASS = 'column-class';
  public static readonly NESTED_TABLE = 'nested-table';
  public static readonly MOBILE = 'mobile';
  public static readonly LOADING_TEMPLATE = 'loading-template';
  public static readonly ADDITIONAL_ACTIONS_TEMPLATE = 'additional-actions-template';
  public static readonly NESTED_OBJECT = 'nested-object';
  public static readonly CUSTOM_PAGINATION = 'custom-pagination';
  public static readonly INFINITE_SCROLL = 'infinite-scroll';
  public static readonly INFINITE_SCROLL_SERVER = 'infinite-scroll-server';
  public static readonly REORDER = 'reorder';
  public static readonly PERSIST_STATE_ROUTER = (state: string) => `persist-state-router/${state}`;
}
