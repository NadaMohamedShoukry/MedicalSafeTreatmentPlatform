import Empty from "../../assets/empty.svg";
import { useTheme } from "../../context/ThemeContext";
function EmptyClinical() {
  const { language } = useTheme();
  return (
    <div className="mt-10 flex flex-col items-center justify-center gap-5">
      <img className="w-40 h-35" src={Empty} alt="empty-data" />
      <p className="text-xl text-center">
        {language === "en"
          ? "More information coming soon"
          : "المزيد من المعلومات قريباً"}
      </p>
    </div>
  );
}

export default EmptyClinical;
