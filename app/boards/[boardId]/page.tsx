import { notFound } from "next/navigation";
import { prisma } from "~/src/db/prisma";

export default async function BoardPage({
  params,
}: {
  params: { boardId: string };
}) {
  const boardId = Number(params.boardId);
  if (isNaN(boardId)) {
    return notFound();
  }
  const board = await prisma.board.findUnique({
    where: {
      id: boardId,
    },
  });

  return (
    <div>
      <h2>broad page n° {boardId}</h2>
      <h1 className="text-4xl">{board?.title}</h1>
    </div>
  );
}
