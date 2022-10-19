import React, { useEffect, useState } from "react";

import styles from "./Dropdown.module.scss";

import { ReactComponent as DropdownIcon } from "../../assets/icons/dropdownIcon.svg";
import useComponentVisible from "../../hooks/useComponentVisible";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import convertRemToPixels from "../../utils/fn/convertRemToPixels";

interface DropDownProps extends React.ComponentProps<"div"> {
  options: string[];
  selectedOption: string;
  setOption: (option: string) => void;
  className?: string;
  label?: string;
}

const DropDown = ({
  className,
  label = "Seleziona un opzione",
  options,
  selectedOption,
  setOption,
  ...restProps
}: DropDownProps) => {
  const [position, setPosition] = useState<any>(null);
  const [openTop, setOpenTop] = useState<boolean>(false);
  const { height } = useWindowDimensions();

  const {
    ref,
    isComponentVisible: isOpen,
    setIsComponentVisible: toggleIsOpen,
  } = useComponentVisible(false);

  const onSelectOption = (opt: string) => {
    toggleIsOpen(false);
    setOption(opt);
  };

  useEffect(() => {
    if (ref.current) {
      setPosition(ref.current.getBoundingClientRect());
    }
  }, []);

  useEffect(() => {
    if (position && height) {
      const contentHeight = convertRemToPixels(22.4);
      const elementPosition = position.y + convertRemToPixels(4.8);

      setOpenTop(height - elementPosition < contentHeight);
    }
  }, [position, height]);

  // TODO open top if isn't enough space bottom and add max height to options container for setting scroll

  return (
    <div
      className={`${styles.container} ${className}`}
      ref={ref}
      {...restProps}
    >
      <div
        className={`${styles.contentContainer} ${
          isOpen && styles.activeContainer
        }`}
        onClick={() => toggleIsOpen(!isOpen)}
      >
        <p
          className={`${styles.defaultText} ${
            selectedOption && styles.selectedText
          }`}
        >
          {selectedOption || label}
        </p>
        <DropdownIcon />
      </div>
      <div
        className={`${styles.optionsContainer} ${
          isOpen && styles.showOptions
        } ${openTop && styles.openTop} ${className}`}
      >
        {options?.map((option, index) => {
          return (
            <div
              onClick={() => onSelectOption(option)}
              key={index}
              className={styles.option}
            >
              <p>{option}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DropDown;
