import {Component, ComponentFactoryResolver, Injector, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {EventComponent} from '../../admin/calendar/event/event.component';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  @ViewChild('viewContainer', {static: true, read: ViewContainerRef}) viewContainerRef: ViewContainerRef;

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private dialogRef: MatDialogRef<any>, private injector: Injector) { }

  ngOnInit() {
    this.loadComponent();
  }

  loadComponent() {

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(EventComponent);

    const componentRef = this.viewContainerRef.createComponent(componentFactory, 0, this.injector);
    ( componentRef.instance as EventComponent).data = {id: 10};
  }

  dismiss() {

    this.dialogRef.close();
  }

  close() {
    this.dialogRef.close();
  }

}
