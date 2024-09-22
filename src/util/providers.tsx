'use client'

import { TasksProvider } from '@/contexts/tasks.context'
import { ReactNode } from 'react'

export default function Provider({ children }: { children: ReactNode }) {
  return <TasksProvider>{children}</TasksProvider>
}
