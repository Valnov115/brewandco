"use client";

import { useModal } from "@/components/ModalContext";
import ReservationModal from "@/components/ReservationModal";

export default function ReservationModalRoot() {
  const { isOpen, closeModal } = useModal();
  return <ReservationModal isOpen={isOpen} onClose={closeModal} />;
}
