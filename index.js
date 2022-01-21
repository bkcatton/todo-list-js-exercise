function newTask(title, description) {
  const task = {
    tastTitle: title,
    taskDescription: description,
    taskComplete: false,

    logState: function() {
      console.log(`${this.tastTitle} has${this.taskComplete ? " " : " not "}been completed`);
    },

    markCompleted: function() {
      this.taskComplete = true;
    }
  };
  return task;
}

const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2];

task1.logState();
task1.markCompleted();
task1.logState();

console.log(tasks);

