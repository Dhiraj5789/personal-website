import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export function ReconsiderModal({ open, onClose }: { open: boolean, onClose: ()=> void}) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="modal"
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", stiffness: 160, damping: 18 }}
          >
            <Image
              src="/reconsider.jpg"
              alt="reconsider"
              className="modal-image"
              width={400}
              height={400}
            />

            <button onClick={onClose}>Okay</button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
