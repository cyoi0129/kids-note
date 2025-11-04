import { KidProvider } from "@/services/kid/provider";
import KidComponent from "@/components/kid/Kid";
import { SchoolProvider } from "@/services/school/provider";

export default async function KidDetail({
  params,
}: {
  params: Promise<{ id: string}>;
}) {
  const { id } = await params;
  const kid_id = Number(id);
  return (
    <main>
      <KidProvider id={kid_id}>
        <SchoolProvider>
          <KidComponent />
        </SchoolProvider>
      </KidProvider>
    </main>
  );
}
