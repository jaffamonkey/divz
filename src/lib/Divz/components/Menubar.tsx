import React, { useState } from 'react';

export const Menubar: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(false);

  const toggleMenubar = (): void => {
    setVisible(prev => !prev);
  };

  const [, setDemo] = useState<number>(1);

  // const isActive = (link: number) => {
  //   return link === demo ? "active" : "";
  // };

  function ActionLink() {
    const handleClick = (e: { preventDefault: () => void; }) => {
      e.preventDefault();
      setDemo(3)
    }
    return (
      <a className="fa fa-camera" onClick={handleClick} />
    );
  }
  ActionLink()
  return (
    <>
      <button className="toggle-button" onClick={toggleMenubar}>
        ☰
      </button>

      {visible && (
        <div className="menubar">
          ActionLink()
          <a className="fa fa-instagram" href="https://www.instagram.com/thelillyguildtrust" />
          <a className="fa fa-envelope" href="mailto:terrormarclub@gmail.com" />
          <a className="fa fa-phone" href="tel:+447394074047" />
        </div>
      )}
    </>
  );
};
