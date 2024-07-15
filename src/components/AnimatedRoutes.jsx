import React from 'react'
import { useLocation, Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Contact from '../Pages/Contact';
import { AnimatePresence,motion} from 'framer-motion'
import ProjectList from './ProjectList';


function MotionWrapper({ children }) {
  return (
    <motion.div
      key={children.key} // Ensure the key prop is set to the child component's key
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}
function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence initial={false} mode={'wait'} onExitComplete={()=>null}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<MotionWrapper><Home /></MotionWrapper>} />
        <Route path="/about" element={<MotionWrapper><About /></MotionWrapper>} />
        <Route path="/contact" element={<MotionWrapper><Contact /></MotionWrapper>} />
        <Route path="/projects" element={<MotionWrapper><ProjectList /></MotionWrapper>} />
      </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes;