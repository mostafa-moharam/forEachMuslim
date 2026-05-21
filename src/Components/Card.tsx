import { Link } from "react-router-dom";

const Card = ({
  title,
  image,
  content,
}: {
  title: string;
  content: string;
  image: string;
}) => {
  return (
    <Link
      to="/"
      className="relative bg-cover rounded-xl bg-center h-[calc(16vh)] w-[calc(35%)] sm:size-[calc(16vw)] m-[calc(2%)] bg-white flex items-center justify-center overflow-hidden group"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="absolute top-0 h-7 sm:h-8 lg:h-12 md:h-10 duration-400 group-hover:h-[calc(100%)] w-full flex justify-center items-center group-hover:top-0 text-[calc(8px)] xl:text-2xl lg:text-lg sm:text-sm text-center header font-medium text-white">
        <p className="text-center font-الاميري group-hover:hidden">{title}</p>
        <p className="hidden font-زين group-hover:block px-2">{content}</p>
      </div>
    </Link>
  );
};

export default Card;
