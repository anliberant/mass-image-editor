import { toast } from 'react-hot-toast';

export const notifySuccess = (text: string): unknown => toast.success(text, { duration: 2500 });
