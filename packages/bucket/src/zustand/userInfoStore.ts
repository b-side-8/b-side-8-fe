import { create, StateCreator } from 'zustand';
import { devtools } from 'zustand/middleware';

interface IUserInfoStore {
  userInfo: {
    nickname: string;
    birth: {
      yyyy: string;
      mm: string;
      dd: string;
    };
    gender: string;
    profileImg: string;
  };
  setNickname: (nickname: string) => void;
  setBirth: (yyyy: string, mm: string, dd: string) => void;
  setGender: (gender: string) => void;
  setProfileImg: (profileImg: string) => void;
}

const userInfoStore = create<IUserInfoStore>((set, get) => ({
  userInfo: {
    nickname: '',
    birth: { yyyy: '', mm: '', dd: '' },
    gender: '',
    profileImg: '',
  },
  setNickname: (nickname: string) =>
    set((state) => ({
      userInfo: { ...state.userInfo, nickname },
    })),
  setBirth: (yyyy: string, mm: string, dd: string) =>
    set((state) => ({
      userInfo: { ...state.userInfo, birth: { yyyy, mm, dd } },
    })),
  setGender: (gender: string) =>
    set((state) => ({
      userInfo: { ...state.userInfo, gender },
    })),
  setProfileImg: (profileImg: string) =>
    set((state) => ({
      userInfo: { ...state.userInfo, profileImg },
    })),
}));

export default userInfoStore;
