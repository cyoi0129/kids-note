import NewKidComponent from "@/components/kid/NewKid";
import { SchoolProvider } from "@/services/school/provider";

export default function NewKid() {
  return (
    <main>
      <SchoolProvider>
        <NewKidComponent />
      </SchoolProvider>
    </main>
  );
}
