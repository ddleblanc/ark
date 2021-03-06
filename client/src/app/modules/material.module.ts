import { NgModule } from '@angular/core';
import { MatButtonModule, MatSnackBarModule, MatRippleModule, MatTooltipModule, MatGridListModule, MatListModule, MatBottomSheetModule, MatSelectModule, MatOptionModule, MatInputModule, MatChipsModule, MatCheckboxModule, MatIconModule, MatMenuModule, MatTabsModule, MatCardModule, MatToolbarModule } from '@angular/material'

@NgModule({
    imports: [
        MatButtonModule, MatSnackBarModule, MatRippleModule, MatTooltipModule, MatGridListModule, MatListModule, MatBottomSheetModule, MatOptionModule, MatSelectModule, MatInputModule, MatChipsModule, MatCheckboxModule, MatIconModule, MatMenuModule, MatTabsModule, MatCardModule, MatToolbarModule
    ],
    exports: [
        MatButtonModule, MatSnackBarModule, MatRippleModule, MatTooltipModule, MatGridListModule, MatListModule, MatBottomSheetModule, MatOptionModule, MatInputModule, MatSelectModule, MatChipsModule, MatCheckboxModule, MatIconModule, MatMenuModule, MatTabsModule, MatCardModule, MatToolbarModule
    ]
})

export class MaterialModule { }