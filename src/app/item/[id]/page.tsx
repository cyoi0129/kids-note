import ItemDetailComponent from "@/components/item/ItemDetail";
import { ItemProvider } from "@/services/item/provider";

export default async function ItemDetail({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  const item_id = Number(id);
  return (
    <main>
      <ItemProvider id={item_id}>
        <ItemDetailComponent />
      </ItemProvider>
    </main>
  );
}
