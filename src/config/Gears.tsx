import Headphones from '@/components/svgs/devices/Headphones';
import Keyboard from '@/components/svgs/devices/Keyboard';
import Laptop from '@/components/svgs/devices/Laptop';
import Monitor from '@/components/svgs/devices/Monitor';
import Mouse from '@/components/svgs/devices/Mouse';
import Phone from '@/components/svgs/devices/Phone';

export const devices = [
  {
    name: 'Lenovo Thinkbook Yoga 14"in core i7 11th gen 16GB 512GB',
    icon: <Laptop className="size-4" />,
  },
  {
    name: 'BenQ GW2790Q (27 inch, 68.5 cm)',
    icon: <Monitor className="size-4" />,
  },
  {
    name: 'Logitech MK240 Wireless Nano Keyboard',
    icon: <Keyboard className="size-4" />,
  },
  {
    name: 'Logitech MK 240 Wireless Nano Mouse',
    icon: <Mouse className="size-4" />,
  },
  {
    name: 'OnePlus Nord Buds 2r',
    icon: <Headphones className="size-4" />,
  },
  {
    name: 'OnePlus Nord CE3 Lite 5G',
    icon: <Phone className="size-4" />,
  },
];
