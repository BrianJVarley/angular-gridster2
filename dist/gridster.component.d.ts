import { OnInit, ElementRef, OnDestroy, Renderer2, DoCheck } from '@angular/core';
import { GridsterConfig } from './gridsterConfig.interface';
import { GridsterItemComponent } from './gridsterItem.component';
import { GridsterGridComponent } from './gridsterGrid.component';
export declare class GridsterComponent implements OnInit, OnDestroy, DoCheck {
    renderer: Renderer2;
    options: GridsterConfig;
    calculateLayoutDebounce: Function;
    onResizeFunction: (event: any) => void;
    movingItem: GridsterItemComponent;
    previewStyle: Function;
    el: any;
    $options: GridsterConfig;
    mobile: boolean;
    curWidth: number;
    curHeight: number;
    scrollBarPresent: boolean;
    grid: Array<GridsterItemComponent>;
    columns: number;
    rows: number;
    curColWidth: number;
    curRowHeight: number;
    windowResize: Function;
    gridLines: GridsterGridComponent;
    private cleanCallback;
    constructor(el: ElementRef, renderer: Renderer2);
    ngOnInit(): void;
    ngDoCheck(): void;
    optionsChanged(): void;
    ngOnDestroy(): void;
    onResize(): void;
    checkIfToResize(): boolean;
    setGridSize(): void;
    setGridDimensions(): void;
    calculateLayout(): void;
    addItem(itemComponent: GridsterItemComponent): void;
    removeItem(itemComponent: GridsterItemComponent): void;
    checkCollision(itemComponent: GridsterItemComponent, ignoreItem?: GridsterItemComponent): GridsterItemComponent | boolean;
    findItemWithItem(itemComponent: GridsterItemComponent, ignoreItem?: GridsterItemComponent): GridsterItemComponent;
    autoPositionItem(itemComponent: GridsterItemComponent): void;
    pixelsToPosition(x: number, y: number, roundingMethod: Function): [number, number];
    pixelsToPositionX(x: number, roundingMethod: Function): number;
    pixelsToPositionY(y: number, roundingMethod: Function): number;
    positionXToPixels(x: number): number;
    positionYToPixels(y: number): number;
    checkCompactUp(): boolean;
    moveUpTillCollision(itemComponent: GridsterItemComponent): boolean;
    checkCompactLeft(): boolean;
    moveLeftTillCollision(itemComponent: GridsterItemComponent): boolean;
}