import { useState, useEffect } from "react";
import { get } from "lodash";

export default function useAuthroiseHook(id, button) {
  console.log("🚀 ~ file: index.jsx ~ line 4 ~ Authroziation ~ id", id);
  const [token, getTokenHandler] = useState("");

  useEffect(() => {
    if (button) {
    }
  }, [button]);
}
