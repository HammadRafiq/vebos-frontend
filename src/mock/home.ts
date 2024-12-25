import { DollarIcon, OptimizeIcon } from "@assets/icons";
import ProtectionIcon from "@assets/icons/protection-icon";
import {
  amplitudeImage,
  ghostImage,
  hellosignImage,
  razorpayImage,
} from "@assets/images";

export const homeSliderData = [
  ghostImage,
  razorpayImage,
  hellosignImage,
  amplitudeImage,
];
export const ServiceWeOfferData = [
  {
    name: "Manage + Distribute + Optimize",
    description:
      "Managing, uploading and making the best from your content.our team can also handle your content at every platform",
    Icon: OptimizeIcon,
  },
  {
    name: "Multi-Platform Asset Protection",
    description:
      "Digital Rights Management everywhere at any length of asset. Content ID (soon) YouTube copyright protection system. Locates your videos across YouTube and start making a profitfrom your work",
    Icon: ProtectionIcon,
  },
  {
    name: "Getting Paid As Soon As Possible",
    description:
      "Get paid for your work as soon as we receive it - Skip unnecessary waiting time. We will get you collaborations with brands around the world on top of our own projects in the e-com and apps marketsIf you want to know more, just ask",
    Icon: DollarIcon,
  },
];
