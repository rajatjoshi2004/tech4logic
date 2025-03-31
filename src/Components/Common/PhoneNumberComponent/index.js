import React, { useState } from "react";
import { Typography } from "@mui/material";
import { MdCall } from "react-icons/md";
import Link from "next/link";

const PhoneNumberComponent = () => {
  const phoneNumber = "+91-9920599105";
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Typography
      variant="body2"
      color={isHovered ? "#fff" : "#A7A7A7"}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
    >
      <Link
        href={`tel:${phoneNumber}`}
        style={{
          textDecoration: "underline",
          color: "inherit",
          display: "flex",
          alignItems: "center",
        }}
      >
        <MdCall size={20} style={{ marginRight: "8px", color: "#fff" }} />
        {phoneNumber}
      </Link>
    </Typography>
  );
};

export default PhoneNumberComponent;
