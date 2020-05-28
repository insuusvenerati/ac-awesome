import React, { useState, useEffect } from "react";
import * as createHmac from "create-hmac";

const KEY = "a95185ca73638006efc498aba222928be81341f000a5787ec76701ae4b6ec162";
const SALT = "cba311161eab3324661edd4043248ab3281557d6c9bbb8b3cff8e448b9ce92aa";

export const ImgProxy = ({
  width = 100,
  height = 100,
  extension = "",
  url,
  gravity = "no",
  enlarge = 1,
  resizing_type = "fill",
}) => {
  const [imgUrl, setImgUrl] = useState("");

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
    const result = `https://acawesome.b-cdn.net/${signature}${path}`;
    setImgUrl(result);
  }, []);

  return (
    <div>
      <img src={imgUrl} alt="" />
    </div>
  );
};
