import { MusicPlayer } from "./context.ts";
import { State } from "./types.ts";

export class PlayingState implements State {
  constructor(private player: MusicPlayer) {}

  play(): void {
    console.log("[--] Ya se esta reproduciendo música");
  }

  pause(): void {
    console.log("[⏸ ] Pausando la música...");
    this.player.setState(new PausedState(this.player));
  }

  stop(): void {
    console.log("[⏹ ] Deteniendo la música...");
    this.player.setState(new StoppedState(this.player));
  }
}

export class PausedState implements State {
  constructor(private player: MusicPlayer) {}

  play(): void {
    console.log("[▶ ] Reanudando la música...");
    this.player.setState(new PlayingState(this.player));
  }

  pause(): void {
    console.log("[--] Ya está pausado.");
  }

  stop(): void {
    console.log("[⏹ ] Deteniendo la música desde pausa...");
    this.player.setState(new StoppedState(this.player));
  }
}

export class StoppedState implements State {
  constructor(private player: MusicPlayer) {}
  play(): void {
    console.log("[▶ ] Comenzando reproducción...");
    this.player.setState(new PlayingState(this.player));
  }

  pause(): void {
    console.log("[!!] NO se puede pausar (está detenido).");
  }

  stop(): void {
    console.log("[--] Ya está detenido.");
  }
}
