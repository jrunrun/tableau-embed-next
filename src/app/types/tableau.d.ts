declare namespace Tableau {
  interface VizOptions {
    hideTabs?: boolean;
    hideToolbar?: boolean;
    width?: string;
    height?: string;
    device?: 'desktop' | 'tablet' | 'phone';
    toolbar?: 'top' | 'bottom' | 'hidden';
  }

  interface Viz {
    workbook?: Workbook;
    refreshDataAsync(): Promise<void>;
  }

  interface Workbook {
    activeSheet?: Sheet;
    applyFilterAsync?(fieldName: string, value: any): Promise<void>;
    getActiveSheetAsync(): Promise<Sheet>;
    getSheetsAsync(): Promise<Sheet[]>;
  }

  interface Sheet {
    applyFilterAsync?(fieldName: string, value: any, updateType: string): Promise<void>;
    getFiltersAsync(): Promise<Filter[]>;
    getWorksheetsAsync(): Promise<Worksheet[]>;
  }

  interface Filter {
    fieldName: string;
    values: any[];
  }

  interface Worksheet {
    applyFilterAsync(fieldName: string, value: any, updateType: string): Promise<void>;
    getFiltersAsync(): Promise<Filter[]>;
  }
}

declare module 'tableau' {
  interface HTMLElementTagNameMap {
    'tableau-viz': TableauViz;
  }

  class TableauViz extends HTMLElement {
    src: string;
    toolbar: 'top' | 'bottom' | 'hidden';
    hideTabs: boolean;
    device: 'desktop' | 'tablet' | 'phone';
    width: string;
    height: string;
    workbook?: Tableau.Workbook;
    refreshDataAsync(): Promise<void>;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject): void;
  }

  const TableauEventType: {
    FirstInteractive: 'firstInteractive';
    FilterChanged: 'filterChanged';
    MarksSelected: 'marksSelected';
    TabSwitched: 'tabSwitched';
    StoryPointSwitched: 'storyPointSwitched';
    ParameterChanged: 'parameterChanged';
    CustomViewLoaded: 'customViewLoaded';
    CustomViewSaved: 'customViewSaved';
    CustomViewRemoved: 'customViewRemoved';
  };
} 