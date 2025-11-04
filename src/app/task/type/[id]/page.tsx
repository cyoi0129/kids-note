import TaskTypeComponent from "@/components/task/TaskType";
import { TaskTypeProvider } from "@/services/task/provider";

export default async function TaskType({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const task_type_id = Number(id);
  return (
    <main>
      <TaskTypeProvider id={task_type_id}>
        <TaskTypeComponent />
      </TaskTypeProvider>
    </main>
  );
}
