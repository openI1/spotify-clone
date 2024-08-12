"use client";

import AuthModal from "@/components/AuthModal";
import SubscribeModal from "@/components/SubscribeModal";
import UpLoadModal from "@/components/UploadModal";
import useUploadModal from "@/hooks/useUploadModal";
import { ProductWithPrices } from "@/types";
import { useEffect, useState } from "react";

interface ModalProviderProps {
  products: ProductWithPrices[];
}

const ModalProvider: React.FC<ModalProviderProps> = ({ products }) => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) {
    return null;
  }
  return (
    <>
      <AuthModal />
      <UpLoadModal />
      <SubscribeModal products={products} />
    </>
  );
};

export default ModalProvider;
