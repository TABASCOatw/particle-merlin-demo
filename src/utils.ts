import { notification } from 'antd';

export const copyToClipboard = async (text: string): Promise<void> => {
  if ('clipboard' in navigator) {
    await navigator.clipboard.writeText(text);
    notification.success({
      message: 'Address Copied',
    });
  } else {

    (document as any).execCommand('copy', true, text);
  }
};

export const truncateAddress = (address: string): string => `${address.slice(0, 6)}...${address.slice(address.length - 4)}`;