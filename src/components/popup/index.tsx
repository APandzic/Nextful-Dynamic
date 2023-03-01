import { useEffect, useState } from 'react';

type PopupProps = {
  data: {
    show: boolean;
    message: string;
    duration: number;
    appearance: string;
  };
};

const Popup = ({ data }: PopupProps) => {
  const { show, message, duration, appearance } = data;
  const [visible, setVisible] = useState(false);

  // Hide the popup after the specified duration
  useEffect(() => {
    if (show) {
      setVisible(true); 

      setTimeout(() => setVisible(false), duration);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const color = appearance === 'success' ? 'bg-green-500' : 'bg-red-500';

  return (
    <div
      className={`fixed top-0 right-0 p-4 rounded-lg text-white shadow-lg ${color} ${!visible && 'hidden'}`}
    >
      {message}
    </div>
  );
};

export default Popup;