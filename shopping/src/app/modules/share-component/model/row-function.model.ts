export class RowFunctionModel {
  public icon: string;
  public title: string;
  public tooltip: string;
  public action: Function;


  constructor(icon: string, title: string, tooltip: string, action: Function) {
    this.icon = icon;
    this.title = title;
    this.tooltip = tooltip;
    this.action = action;
  }
}
