import Card from "../Components/Card";
import القرآن from "../assets/خلفيات-بنات-حاملة-مصحف-3.jpg";
import الحديث from "../assets/الحديث_الشريف.jpg";
import الصلاة from "../assets/مواقيت_الصلاة.jpeg";
import التفسير from "../assets/تفسير.jpg";

const Home = () => {
  const cardContent = [
    {
      id: 1,
      title: "القرآن الكريم",
      img: القرآن,
      content:
        "الَّذِينَ آتَيْنَاهُمُ الْكِتَابَ يَتْلُونَهُ حَقَّ تِلَاوَتِهِ أُولَٰئِكَ يُؤْمِنُونَ بِهِ ۗ وَمَن يَكْفُرْ بِهِ فَأُولَٰئِكَ هُمُ الْخَاسِرُونَ",
    },
    {
      id: 2,
      title: "مواقيت الصلاة",
      img: الصلاة,
      content:
        "إِنَّ الصَّلَاةَ كَانَتْ عَلَى الْمُؤْمِنِينَ كِتَابًا مَوْقُوتًا",
    },
    {
      id: 4,
      title: "الحديث الشريف",
      img: الحديث,
      content:
        "وَمَا آتَاكُمُ الرَّسُولُ فَخُذُوهُ وَمَا نَهَاكُمْ عَنْهُ فَانتَهُوا ۚ وَاتَّقُوا اللَّهَ ۖ إِنَّ اللَّهَ شَدِيدُ الْعِقَابِ",
    },
    {
      id: 3,
      title: "تفسير القرآن",
      img: التفسير,
      content:
        " كِتَابٌ أَنزَلْنَاهُ إِلَيْكَ مُبَارَكٌ لِّيَدَّبَّرُوا آيَاتِهِ وَلِيَتَذَكَّرَ أُوْلُوا الْأَلْبَابِ",
    },
  ];
  return (
    <div className="flex justify-center items-center w-full">
      <div className="bg-light dark:bg-dark background"></div>
      <div className="rounded-xl bg-dark-transparent-100 mt-5 sm:h-auto sm:w-[calc(50vw)] h-[calc(55vh)] w-[calc(75vw)] flex flex-wrap justify-evenly p-2 items-center text-black dark:text-white">
        {cardContent.map((e) => (
          <Card key={e.id} image={e.img} title={e.title} content={e.content} />
        ))}
      </div>
    </div>
  );
};

export default Home;
