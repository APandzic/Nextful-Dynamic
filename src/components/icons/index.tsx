// create a react function svg component
import React from "react";
import { FiInstagram } from 'react-icons/fi';
import { FiFacebook } from 'react-icons/fi';
import { FiLinkedin } from 'react-icons/fi';
import { FiTwitter } from 'react-icons/fi';

interface Props {
  name: string;
  children?: React.ReactNode;
  size?: string | number;
  color?: string;
  title?: string;
}

const icons = (props: Props) => {
  switch (props.name) {
    case "instagram":
      return <FiInstagram {...props} />;
    case "facebook":
      return <FiFacebook {...props} />;
    case "linkedin":
      return <FiLinkedin {...props} />;
    case "twitter":
      return <FiTwitter {...props} />;
    default:
      return null;
  }
};

export default icons;
