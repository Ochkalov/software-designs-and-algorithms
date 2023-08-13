import { PriorityQueue } from "./PriorityQueue";

export interface SchedulerI {
  postTask(task: () => Promise<any>, priority: number): void;
  run(): Promise<void>;
}

export class Scheduler implements SchedulerI {
  private taskQueue: PriorityQueue<() => Promise<any>> = new PriorityQueue();

  postTask(task: () => Promise<any>, priority: number): void {
    this.taskQueue.enqueue(task, priority);
  }

  async run(): Promise<void> {
    const tasks: (() => Promise<any>)[] = [];

    while (this.taskQueue.size() > 0) {
      const task = this.taskQueue.dequeue();
      if (task) {
        tasks.push(task);
      }
    }

    await Promise.all(tasks.map(task => task()));
  }
}
