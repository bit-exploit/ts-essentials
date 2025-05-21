import { StoppedState } from "./states.ts";
import { State } from "./types.ts";

export class MusicPlayer {
  private state: State;

  constructor() {
    this.state = new StoppedState(this);
  }

  setState(state: State): void {
    this.state = state;
  }

  play(): void {
    this.state.play();
  }

  pause(): void {
    this.state.pause();
  }

  stop(): void {
    this.state.stop();
  }
}
