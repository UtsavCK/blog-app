import { Suspense } from "react";
import EditBlog from "./EditBlog";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <EditBlog />
    </Suspense>
  );
}