import { For } from "@chakra-ui/react";
import { AppPage } from "~/components";
import { Skeleton } from "~/components/ui/skeleton";

const Page = () => (
  <AppPage title="Dashboard" subtitle="All important metrics at a glance">
    <For each={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}>
      {(i) => <Skeleton key={i} my={"2"} height="36" />}
    </For>
  </AppPage>
);

export default Page;
