"use client";

import { Box, Button, Card, CardContent, Modal, Typography } from "@mui/material";
import Aos from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import styles from "./style";

const OurLeaders = ({ leaderContentData }) => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);

  const handleOpen = (member) => {
    setSelectedMember(member);
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
    setSelectedMember(null);
  };

  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
    });
  }, []);

  return (
    <Box sx={styles.containerCSS}>
      <Box sx={{ marginBottom: "40px" }}>
        <Typography variant="h2" sx={styles.containerCSS["& h2"]}>
          {leaderContentData?.title}
        </Typography>
        <Typography variant="body1" sx={styles.containerCSS["& body1"]}>
          {leaderContentData?.description}
        </Typography>
      </Box>

      <Box sx={styles.teamConatiner}>
        {leaderContentData?.leaderData?.map((member) => (
          <Card
            key={member?._id}
            sx={styles.teamCard}
            onClick={() => handleOpen(member)}
            data-aos="zoom-in-up"
          >
            <CardContent sx={{ textAlign: "center" }}>
              <Image src={member.imageUrl} width={150} height={150} alt={member.name} />
              <Typography variant="h6" sx={{ marginTop: "1rem" }}>
                {member?.name}
              </Typography>
              <Typography variant="subtitle1" sx={{ color: "gray" }}>
                {member?.role}
              </Typography>

              <Box sx={{ marginTop: "1rem", display: "flex", justifyContent: "center", gap: 4 }}>
                <a
                  href={member?.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                >
                  <FaLinkedin size={24} style={{ color: "#fff" }} />
                </a>
                <a
                  href={member?.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                >
                  <BsTwitterX size={24} style={{ color: "#fff" }} />
                </a>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>
      {/* Modal for Team Member Details */}
      <Modal open={openModal} onClose={handleClose}>
        <Box sx={styles.modalConatiner}>
          {selectedMember && (
            <>
              <Typography variant="h5" gutterBottom>
                {selectedMember.name}
              </Typography>
              <Typography variant="subtitle1" sx={{ color: "gray", marginBottom: "1rem" }}>
                {selectedMember.role}
              </Typography>
              <Typography variant="body2">{selectedMember.description}</Typography>
              <Button variant="contained" onClick={handleClose} sx={styles.buttonCSS}>
                Close
              </Button>
            </>
          )}
        </Box>
      </Modal>
    </Box>
  );
};

export default OurLeaders;
