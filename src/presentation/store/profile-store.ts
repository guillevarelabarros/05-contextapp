import { create } from 'zustand';

interface ProfileState {
  name: string;
  email: string;
}

export const useProfileStore = create<ProfileState>()( () => ( {
  name: 'John Doe',
  email: 'john.doe@google.com',
} ) );
