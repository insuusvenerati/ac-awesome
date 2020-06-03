import createHmac from "create-hmac";
import "lazysizes";
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
  lazyload = true,
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

    // function sign(tgt) {
    //   const signer = new jsSHA256("SHA-256", "TEXT", {
    //     hmacKey: { value: KEY, format: "HEX" },
    //   });

    //   signer.update(Buffer.from(SALT, "hex"));
    //   signer.update(tgt);

    //   return signer
    //     .getHMAC("B64")
    //     .replace(/=/g, "")
    //     .replace(/\+/g, "-")
    //     .replace(/\//g, "_");
    // }

    const encoded_url = urlSafeBase64(url);
    const path = `/${resizing_type}/${width}/${height}/${gravity}/${enlarge}/${encoded_url}.${extension}`;
    const signature = sign(SALT, path, KEY);
    const result = `${process.env.GATSBY_IMGPROXY_URL}${signature}${path}`;
    setImgUrl(result);
  }, []);

  if (!imgUrl) {
    return <h1>Error loading image</h1>;
  }

  return (
    <img
      className={`${lazyload ? "lazyload" : ""}`}
      style={style}
      data-src={imgUrl}
      alt={alt}
    />
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
  lazyload: PropTypes.bool,
};
