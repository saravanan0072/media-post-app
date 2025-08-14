import React from 'react'
import { useState } from 'react'

const useHamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }
  return { isOpen, toggleMenu };
}

export default useHamburgerMenu