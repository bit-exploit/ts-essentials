import { DoorOpenCommand, LightOnCommand } from "./commands";
import { RemoteControl } from "./invokers";
import { Door, Light } from "./receptors";

// * receptors
const light = new Light();
const door = new Door();

// * commands
const lightOn = new LightOnCommand(light);
const doorOpen = new DoorOpenCommand(door);

// * invoker
const remote = new RemoteControl();
remote.addCommand(lightOn);
remote.addCommand(doorOpen);

remote.pressButton(0);
remote.pressButton(1);
