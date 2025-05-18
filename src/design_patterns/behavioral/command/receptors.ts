export class Light {
  turnOn(): void {
    console.log("[LIGHT] ON");
  }
  turnOff(): void {
    console.log("[LIGHT] OFF");
  }
}

export class Door {
  open(): void {
    console.log("[DOOR] OPEN");
  }
}
