import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const LogoutConfirmationModal = ({ show, onClose, onLogout }) => {
  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>로그아웃 확인</Modal.Title>
      </Modal.Header>
      <Modal.Body>로그아웃 하시겠습니까?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          취소
        </Button>
        <Button variant="primary" onClick={onLogout} className="text-white">
          로그아웃
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default LogoutConfirmationModal;
