import { BoardForm } from "./BoardForm";

export default function NewBoardPage() {
  return (
    <div className="flex flex-col gap-10">
      <h1 className="text-2xl">Create a new broad</h1>
      <BoardForm />
    </div>
  );
}
