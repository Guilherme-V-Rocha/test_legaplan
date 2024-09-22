import { TaskData } from '@/data/tasks'
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'
import { v4 as uuidv4 } from 'uuid'

type TasksContextProps = {
  isAdd: boolean
  setIsAdd: Dispatch<SetStateAction<boolean>>
  setIsDelete: Dispatch<SetStateAction<string | undefined>>
  addTask: (value?: string) => void
  isDelete?: string
  cancel: () => void
  deleteTask: (id: string) => void
  tasks: Array<TaskData>
  tasksChecked: Array<TaskData>
  tasksCompleted: (id: string, checked: boolean) => void
}

const TasksContext = createContext<TasksContextProps>({} as TasksContextProps)

const TasksProvider = ({ children }: { children: ReactNode }) => {
  const [isAdd, setIsAdd] = useState(false)
  const [tasks, setTasks] = useState<Array<TaskData>>([])
  const [tasksChecked, setTasksChecked] = useState<Array<TaskData>>([])
  const [isDelete, setIsDelete] = useState<string>()
  const id = uuidv4()

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks')
    const storedTasksChecked = localStorage.getItem('tasksChecked')

    if (storedTasks) {
      setTasks(JSON.parse(storedTasks))
    }
    if (storedTasksChecked) {
      setTasksChecked(JSON.parse(storedTasksChecked))
    }
  }, [])

  useEffect(() => {
    if (tasks.length === 0 && tasksChecked.length === 0) {
      localStorage.removeItem('tasks')
      localStorage.removeItem('tasksChecked')
    } else {
      localStorage.setItem('tasks', JSON.stringify(tasks))
      localStorage.setItem('tasksChecked', JSON.stringify(tasksChecked))
    }
  }, [tasks, tasksChecked])

  const cancel = useCallback(() => {
    setIsAdd(false)
    setIsDelete(undefined)
  }, [])

  const addTask = useCallback(
    (value?: string) => {
      console.log(value)
      if (value !== undefined) {
        setTasks((prev) => [...prev, { id: id, name: value, checked: false }])
        cancel()
      }
    },
    [cancel, id]
  )

  const deleteTask = useCallback(
    (id: string) => {
      setTasks((prev) => prev.filter((value) => value.id !== id))
      setTasksChecked((prev) => prev.filter((value) => value.id !== id))
      cancel()
    },
    [cancel]
  )

  const tasksCompleted = useCallback(
    (id: string, checked: boolean) => {
      const task = tasks.find((value) => value.id === id)
      const taskChecked = tasksChecked.find((value) => value.id === id)
      if (checked === true && task) {
        setTasksChecked((prev) => [...prev, { ...task, checked: true }])
        setTasks((prev) => prev.filter((valuePrev) => valuePrev.id !== id))
      } else {
        if (taskChecked) {
          setTasks((prev) => [...prev, { ...taskChecked, checked: false }])
          setTasksChecked((prev) =>
            prev.filter((valuePrev) => valuePrev.id !== id)
          )
        }
      }
    },
    [tasks, tasksChecked]
  )

  return (
    <TasksContext.Provider
      value={{
        isAdd,
        setIsAdd,
        isDelete,
        setIsDelete,
        cancel,
        addTask,
        tasks,
        deleteTask,
        tasksCompleted,
        tasksChecked,
      }}
    >
      {children}
    </TasksContext.Provider>
  )
}

const useTasks = () => {
  return useContext(TasksContext)
}

export { TasksProvider, useTasks }
