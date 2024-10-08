import { List } from '@/app/list'
import '@/app/tasks/tasks.styles.scss'
import { useTasks } from '@/contexts/tasks.context'

export function Tasks() {
  const { tasks, tasksChecked } = useTasks()
  return (
    <div className="card">
      {tasks.length > 0 && (
        <text className="tasks.text">Suas tarefas de hoje</text>
      )}
      {tasks.map((task) => (
        <List key={task.id} task={task} />
      ))}
      {tasksChecked.length > 0 && (
        <text className="tasks.text">Tarefas finalizadas</text>
      )}
      {tasksChecked
        .filter((task) => task.checked === true)
        .map((task) => (
          <List key={task.id} task={task} />
        ))}
    </div>
  )
}
