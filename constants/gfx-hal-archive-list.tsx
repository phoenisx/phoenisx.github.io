import React from 'react';
import { IArchiveItem } from '@constants/archive-list';
import { Tags } from '@constants/tags';

import InlineCode from '@components/inline-code';

export const halArchiveRecord: Record<string, IArchiveItem> = {
  'display-window': {
    key: 'display-window',
    link: '/gfx-hal-initials/display-window',
    title: 'Setup & Display Blank Window',
    titleString: 'Setup & Display Blank Window',
    description:
      'Learn Displaying a Blank Window using winit and bind it to gfx-hal surface instance',
    ogImage:
      'https://user-images.githubusercontent.com/11786283/82109997-98852400-9758-11ea-84a0-aa3996c67f86.jpg',
    tags: [Tags.RUST],
    createdAt: new Date('2020/04/25 17:00:00'),
    updatedAt: new Date('2020/05/28 23:50:00'),
    isPublished: true,
  },
  'physical-logical-devices': {
    key: 'physical-logical-devices',
    link: '/gfx-hal-initials/physical-logical-devices',
    title: 'Adapters & Physical/Logical Devices & Device Queues',
    titleString: 'Adapters & Physical/Logical Devices & Device Queues',
    description:
      'Learn to Instantiate Vulkan Physical/Logical Devices and get Device Queue from gfx-hal adapters',
    ogImage:
      'https://user-images.githubusercontent.com/11786283/82111231-485e8f80-9761-11ea-9f21-8843d4a66752.jpg',
    tags: [Tags.TUTORIAL, Tags.RUST, Tags.GFX_HAL],
    createdAt: new Date('2020/05/16 8:45:00'),
    updatedAt: new Date('2020/05/29 9:25:00'),
    isPublished: true,
  },
  'swap-chain': {
    key: 'swap-chain',
    link: '/gfx-hal-initials/swap-chain',
    title: (
      <span>
        SwapChain and Image Views in &nbsp;
        <InlineCode>gfx-hal</InlineCode>
      </span>
    ),
    titleString: 'SwapChain and Image Views in gfx-hal',
    description:
      'Learning about Swapchain, Double Buffering and Image Views. Understanding the implementation of SwapChain in gfx-hal',
    ogImage:
      'https://user-images.githubusercontent.com/11786283/82640938-22396380-9c29-11ea-9ee5-9a7fc01920da.jpg',
    tags: [Tags.TUTORIAL, Tags.RUST, Tags.GFX_HAL],
    createdAt: new Date('2020/05/22 10:20:00'),
    updatedAt: new Date('2020/06/06 14:00:00'),
    isPublished: true,
  },
  'render-pass': {
    key: 'render-pass',
    link: '/gfx-hal-initials/render-pass',
    title: 'Render Pass',
    titleString: 'Render Pass in Vulkan',
    description: 'Render Pass initialization and basic understanding in Vulkan',
    ogImage:
      'https://user-images.githubusercontent.com/11786283/82640938-22396380-9c29-11ea-9ee5-9a7fc01920da.jpg',
    tags: [Tags.TUTORIAL, Tags.RUST, Tags.GFX_HAL],
    createdAt: new Date('2020/06/06 14:30:00'),
    updatedAt: new Date('2020/06/06 14:30:00'),
    isPublished: true,
  },
  'command-buffers': {
    key: 'command-buffers',
    link: '/gfx-hal-initials/command-buffers',
    title: 'Command Buffers & Pool',
    titleString: 'Command Buffers & Pool',
    description:
      'Understanding Command Pools and Command Buffers in Vulkan and gfx-hal',
    ogImage:
      'https://user-images.githubusercontent.com/11786283/82124794-f0567600-97be-11ea-9023-ea1467a6b734.jpg',
    tags: [Tags.TUTORIAL, Tags.RUST, Tags.GFX_HAL],
    createdAt: new Date('2020/05/16 21:45:00'),
    updatedAt: new Date('2020/05/16 21:45:00'),
    isPublished: true,
  },
  shaders: {
    key: 'shaders',
    link: '/gfx-hal-initials/shaders',
    title: 'Shaders',
    titleString: 'Shaders',
    description:
      'Understanding Shaders & writing minimal Shader using GLSL Shading language',
    ogImage:
      'https://user-images.githubusercontent.com/11786283/82640938-22396380-9c29-11ea-9ee5-9a7fc01920da.jpg',
    tags: [Tags.TUTORIAL, Tags.RUST, Tags.GFX_HAL],
    createdAt: new Date('2020/05/23 19:30:00'),
    updatedAt: new Date('2020/05/23 19:35:00'),
    isPublished: true,
  },
};

export const size = Object.keys(halArchiveRecord).length;
