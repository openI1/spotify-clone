import {create} from "zustand";

interface AuthModal{
    isOpen:boolean;
    onOpen:()=>void;
    onClose:()=>void;
}

const useAuthModal =create<AuthModal>((set)=>({
    isOpen:false,
    onOpen:()=>set({isOpen:true}),
    onClose:()=>set({isOpen:false}),
}))

export default useAuthModal;