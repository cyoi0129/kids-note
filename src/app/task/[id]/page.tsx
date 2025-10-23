import TaskDetailComponent from "@/components/task/TaskDetail";
import { TaskProvider } from "@/services/task/provider";

export default async function TaskDetail({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  const task_id = Number(id);
  return (
    <main>
      <TaskProvider id={task_id}>
        <TaskDetailComponent />
      </TaskProvider>
    </main>
  );
}
