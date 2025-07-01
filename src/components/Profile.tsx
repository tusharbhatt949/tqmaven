import { motion } from "framer-motion";
import GradientCard from "./ui/GradientCard";
import { CrossIcon } from "../assets/svgs/CrossIcon";
import ArrowIcon from "../assets/svgs/ArrowIcon";

interface ProfileProps {
  onClose: () => void;
}

const Profile: React.FC<ProfileProps> = ({ onClose }) => {
  return (
    <motion.div
      className=" fixed inset-0 z-50 flex items-center justify-center "
      style={{ backgroundImage: "url('/src/assets/popupBg.png')" }}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
    >
      <div className="w-[80%] h-[90%] flex justify-center items-center rounded-[4rem] bg-[var(--bg-secondary)]/100 backdrop-blur-sm bg-cover bg-no-repeat bg-center ">
        <div
          className="absolute top-10 right-10 cursor-pointer z-50 "
          onClick={onClose}
        >
          <CrossIcon className="text-[color:var(--text-primary)]" />
        </div>

        <div className="w-full flex justify-between z-1000 p-[5%]">
          <ArrowIcon direction="left" color="#ffffff60" />
          <ArrowIcon direction="right" />
        </div>

        <GradientCard />
      </div>

    </motion.div>
  );
};

export default Profile;
