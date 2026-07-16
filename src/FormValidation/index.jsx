import { useState } from "react";
import Form from "./form";
import Table from "./table";
import StudentModal from "./modal";
import Search from "./search";
export default function Index() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-100 py-10">
      <div className="mx-auto max-w-6xl px-4">
        {/* Form */}
        <Form />
        <Search />
        {/* Table */}
        <Table setOpen={setOpen} />
      </div>
      <StudentModal open={open} onClose={() => setOpen(false)} />
    </div>
  );
}
