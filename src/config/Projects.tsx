/**
 * Projects Configuration
 * @author Samarth Shukla
 * Defines all projects displayed in the portfolio
 */
import NextJsPng from '@/components/technologies/NextJsPng';
import NodeJsPng from '@/components/technologies/NodeJsPng';
import ReactPng from '@/components/technologies/ReactPng';
import TypeScriptPng from '@/components/technologies/TypeScriptPng';
import CPPng from '@/components/technologies/CPPng';
import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    title: 'Mistry Message',
    description:
      'Anonymous advice platform allowing users to send and receive advice confidentially with a clean, modern interface',
    image: '/project/mistrymessage.png',
    link: 'https://mistrymessage.online',
    technologies: [
      { name: 'Next.js', icon: <NextJsPng key="nextjs" /> },
      { name: 'TypeScript', icon: <TypeScriptPng key="typescript" /> },
      { name: 'React', icon: <ReactPng key="react" /> },
    ],
    github: '',
    live: 'https://mistrymessage.online',
    isWorking: true,
    status: 'maintenance',
    showWebLink: true,
  },
  {
    title: 'Duckie Productivity MCP Server',
    description:
      'AI-powered productivity MCP server with rubber duck debugging capabilities, task management, and Spotify integration',
    image: '/project/advice-sam.png',
    link: 'https://github.com/SamarthShukla17/duckie-productivity-mcp-server',
    technologies: [
      { name: 'TypeScript', icon: <TypeScriptPng key="typescript" /> },
      { name: 'Node.js', icon: <NodeJsPng key="nodejs" /> },
    ],
    github: 'https://github.com/SamarthShukla17/duckie-productivity-mcp-server',
    live: 'https://github.com/SamarthShukla17/duckie-productivity-mcp-server',
    isWorking: true,
  },
  {
    title: 'Duckie 2.0',
    description:
      'Enhanced MCP Server with advanced debugging capabilities, LinkedIn post generation, and AI-powered content creation tools',
    image: '/project/advice-sam.png',
    link: 'https://github.com/SamarthShukla17/Duckie-2.0',
    technologies: [
      { name: 'TypeScript', icon: <TypeScriptPng key="typescript" /> },
      { name: 'Node.js', icon: <NodeJsPng key="nodejs" /> },
    ],
    github: 'https://github.com/SamarthShukla17/Duckie-2.0',
    live: 'https://github.com/SamarthShukla17/Duckie-2.0',
    isWorking: true,
  },
  {
    title: 'BitSqueez',
    description:
      'Advanced space-minimizing tool for data compression and optimization with efficient algorithms for storage optimization',
    image: '/project/bitsqueez.png',
    link: 'https://github.com/SamarthShukla17/BitSqueez',
    technologies: [
      { name: 'C++', icon: <CPPng key="cpp" /> },
      { name: 'Algorithms', icon: <TypeScriptPng key="algorithms" /> },
      { name: 'Data Structures', icon: <NodeJsPng key="datastructures" /> },
    ],
    github: 'https://github.com/SamarthShukla17/BitSqueez',
    live: 'https://github.com/SamarthShukla17/BitSqueez',
    isWorking: true,
  },
  {
    title: 'Bandwidth Optimizer',
    description:
      'Network performance enhancement tool for efficient data transmission with advanced algorithms for traffic optimization',
    image: '/project/bandwidthOp.png',
    link: 'https://github.com/SamarthShukla17/Bandwidth-Optimizer',
    technologies: [
      { name: 'C++', icon: <CPPng key="cpp" /> },
      { name: 'Networking', icon: <TypeScriptPng key="networking" /> },
      { name: 'Performance', icon: <NodeJsPng key="performance" /> },
    ],
    github: 'https://github.com/SamarthShukla17/Bandwidth-Optimizer',
    live: 'https://github.com/SamarthShukla17/Bandwidth-Optimizer',
    isWorking: true,
  },
  {
    title: 'Memory Allocator',
    description:
      'Custom memory allocator implementation in C for efficient memory management and allocation strategies',
    image: '/project/memoryallocator.png',
    link: 'https://github.com/SamarthShukla17/Memory-allocator',
    technologies: [
      { name: 'C', icon: <CPPng key="c" /> },
      { name: 'Memory Management', icon: <TypeScriptPng key="memory" /> },
      { name: 'Systems Programming', icon: <NodeJsPng key="systems" /> },
    ],
    github: 'https://github.com/SamarthShukla17/Memory-allocator',
    live: 'https://github.com/SamarthShukla17/Memory-allocator',
    isWorking: true,
  },
];
