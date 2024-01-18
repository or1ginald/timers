export interface ITimer {
  id: string;
  isRunning: boolean;
  time: number | null;
  toggle: () => void;
  reset: () => void;
  getElapsedTime(): number;
  reRenderAllTimers: () => void;
}

export class Timer implements ITimer {
  private startTime: number | null = null;

  public isRunning: boolean = false;

  public time: number = 0;

  public id: string;

  public reRenderAllTimers: () => void;

  constructor(id: string, reRenderAllTimers: () => void) {
    this.id = id;
    this.reRenderAllTimers = reRenderAllTimers;
  }

  private start(): void {
    this.startTime = Date.now();
    this.isRunning = true;
  }

  private stop(): void {
    this.time = this.getElapsedTime();
    this.isRunning = false;
  }

  public reset = (): void => {
    this.startTime = null;
    this.time = 0;
    this.isRunning = false;
  };

  public toggle = (): void => {
    if (!this.isRunning) {
      this.start();
      return;
    }
    this.stop();
  };

  public getElapsedTime(): number {
    if (this.startTime === null) {
      return 0;
    }

    if (!this.isRunning) {
      return this.time;
    }

    return Date.now() - this.startTime + this.time;
  }
}
