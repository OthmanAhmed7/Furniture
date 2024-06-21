import { useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NotificationContext from "../../context/NotificationContext";

const Notification = () => {
  const { notify } = useContext(NotificationContext);

  return (
    <AnimatePresence>
      {notify && (
        <motion.div
          initial={{ opacity: 0, top: -100 }}
          animate={{ opacity: 1, top: 30 }}
          exit={{ opacity: 0, top: -100 }}
          transition={{ type: "tween", duration: 0.3 }}
          className="fixed top-[2rem] w-[70%] left-[50%] translate-x-[-50%] text-center z-[700] bg-neutral-100 text-neutral-900 py-[0.5rem] px-[1.2rem] rounded-[0.4rem] shadow-md md:max-w-[30%]"
        >
          <p> ✅ {notify} </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Notification;
