import { PageContent } from "~/components/custom/page-content";
import ComingSoon from "~/components/coming-soon";

export default function Page() {
  return (
    <PageContent title="Dashboard">
      <ComingSoon className="h-screen" />
    </PageContent>
  );
}
