/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

@Component({
  selector: 'clr-dg-detail-body',
  template: `
    <div class="clr-dg-detail-body-wrapper">
      <ng-content></ng-content>
    </div>
  `,
  host: {
    '[class.datagrid-detail-body]': 'true',
  },
})
export class ClrDatagridDetailBody {}