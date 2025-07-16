export class IsDraggingHandler {
  isDragging: boolean = false;
  startDragging = () => {
    this.isDragging = true;
  };
  stopDragging = () => {
    this.isDragging = false;
  };
}

export enum Mode {
  BassEdit,
  Solve,
  View,
}
