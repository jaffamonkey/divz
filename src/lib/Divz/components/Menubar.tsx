import React, { useState } from 'react';

export const Menubar: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(false);

  const toggleMenubar = (): void => {
    setVisible(prev => !prev);
  };

  // const [demo, setDemo] = useState<number>(1);

  // const isActive = (link: number) => {
  //   return link === demo ? "active" : "";
  // };

  return (
    <>
      <button className="toggle-button" onClick={toggleMenubar}>
        ☰
      </button>

      {visible && (
        <div className="menubar">
          <a className="fa fa-instagram" href="https://www.instagram.com/thelillyguildtrust" />
          <a className="fa fa-envelope" href="mailto:terrormarclub@gmail.com" />
          <a className="fa fa-phone" href="tel:+447394074047" />
          {/* <a href="#" className={isActive(3)} onClick={() => setDemo(3)}>Click here</a> */}
          {/* <a
            key={3}
            className={isActive(3)}
            onClick={() => setDemo(3)}>Videos</a> */}
        </div>
      )}
    </>
  );
};
