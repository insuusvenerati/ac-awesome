import createHmac from "create-hmac";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";

const KEY = process.env.GATSBY_IMGPROXY_KEY;
const SALT = process.env.GATSBY_IMGPROXY_SALT;

const ImgProxy = ({
  width = 100,
  height = 100,
  extension = "",
  url,
  gravity = "no",
  enlarge = 1,
  resizing_type = "fill",
  style,
  alt,
}) => {
  const [imgUrl, setImgUrl] = useState();

  useEffect(() => {
    const urlSafeBase64 = (string) => {
      return Buffer.from(string)
        .toString("base64")
        .replace(/=/g, "")
        .replace(/\+/g, "-")
        .replace(/\//g, "_");
    };

    const hexDecode = (hex) => Buffer.from(hex, "hex");

    const sign = (salt, target, secret) => {
      const hmac = createHmac("sha256", hexDecode(secret));
      hmac.update(hexDecode(salt));
      hmac.update(target);
      return urlSafeBase64(hmac.digest());
    };

    const encoded_url = urlSafeBase64(url);
    const path = `/${resizing_type}/${width}/${height}/${gravity}/${enlarge}/${encoded_url}.${extension}`;
    const signature = sign(SALT, path, KEY);
    const result = `${process.env.GATSBY_IMGPROXY_URL}${signature}${path}`;
    setImgUrl(result);
  }, [enlarge, extension, gravity, height, resizing_type, url, width]);

  if (!imgUrl) {
    return <h1>Error loading image</h1>;
  }

  return (
    <>
      <img style={style} alt={alt} src={imgUrl} />
    </>
  );
};

export default ImgProxy;

ImgProxy.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  extension: PropTypes.string,
  url: PropTypes.string.isRequired,
  gravity: PropTypes.string,
  enlarge: PropTypes.number,
  resizing_type: PropTypes.string,
  style: PropTypes.string,
  alt: PropTypes.string,
};
