import { toast } from 'react-hot-toast';

export const notifyError = (text: string): unknown => toast.error(text, { duration: 1500 });
