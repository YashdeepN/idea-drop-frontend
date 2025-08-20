import type { Idea } from "@/types";
import { Link } from "@tanstack/react-router";

const IdeaCard = ({
  idea,
  button = true,
  buttonContent,
}: {
  idea: Idea;
  button?: boolean;
  buttonContent: string;
}) => {
  const linkClasses = button
    ? "text-center mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
    : "text-blue-600 hover:underline mt-3";
  return (
    <div className="border-gray-300 p-4 rounded shadow bg-white flex flex-col justify-between">
      <div>
        <h2 className="text-lg font-semibold">{idea.title}</h2>
        <p className="text-gray-700 mt-2">{idea.summary}</p>
      </div>

      <Link
        to="/ideas/$ideaId"
        params={{ ideaId: idea._id.toString() }}
        className={linkClasses}
      >
        {buttonContent}
      </Link>
    </div>
  );
};

export default IdeaCard;
