'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, X } from 'lucide-react';

interface NodeData {
  id: string;
  x: number;
  y: number;
  r: number;
  title: string;
  description: string;
  connections: string[];
}

const nodes: NodeData[] = [
  {
    id: 'data-source',
    x: 100,
    y: 100,
    r: 12,
    title: 'Data Source',
    description: 'Collect and aggregate data from multiple sources',
    connections: ['processing', 'iot']
  },
  {
    id: 'processing',
    x: 200,
    y: 150,
    r: 14,
    title: 'Processing Node',
    description: 'Real-time data processing and transformation',
    connections: ['data-source', 'cloud', 'analytics', 'integration']
  },
  {
    id: 'cloud',
    x: 300,
    y: 100,
    r: 12,
    title: 'Cloud Storage',
    description: 'Scalable cloud infrastructure and storage',
    connections: ['processing', 'analytics']
  },
  {
    id: 'iot',
    x: 150,
    y: 250,
    r: 10,
    title: 'IoT Device',
    description: 'Connected devices and sensors',
    connections: ['data-source', 'processing', 'analytics']
  },
  {
    id: 'analytics',
    x: 250,
    y: 250,
    r: 10,
    title: 'Analytics',
    description: 'Data analysis and insights generation',
    connections: ['processing', 'cloud', 'iot', 'integration']
  },
  {
    id: 'integration',
    x: 200,
    y: 300,
    r: 12,
    title: 'Integration Hub',
    description: 'System integration and API management',
    connections: ['processing', 'iot', 'analytics']
  }
];

const connections = [
  { from: 'data-source', to: 'processing' },
  { from: 'data-source', to: 'iot' },
  { from: 'processing', to: 'cloud' },
  { from: 'processing', to: 'analytics' },
  { from: 'cloud', to: 'analytics' },
  { from: 'iot', to: 'analytics' },
  { from: 'processing', to: 'integration' },
  { from: 'integration', to: 'iot' },
  { from: 'integration', to: 'analytics' }
];

export default function HeroSection() {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [selectedNode, setSelectedNode] = useState<string | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const getNodeById = (id: string) => nodes.find(n => n.id === id);
  const getNodeCoords = (id: string) => {
    const node = getNodeById(id);
    return node ? { x: node.x, y: node.y } : null;
  };

  const handleNodeHover = (nodeId: string | null) => {
    setHoveredNode(nodeId);
  };

  const handleNodeClick = (nodeId: string) => {
    setSelectedNode(selectedNode === nodeId ? null : nodeId);
  };

  const handleMouseMove = (e: React.MouseEvent<SVGSVGElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const activeNode = selectedNode || hoveredNode;
  const activeNodeData = activeNode ? getNodeById(activeNode) : null;
  const highlightedConnections = activeNode
    ? connections.filter(
        c => c.from === activeNode || c.to === activeNode
      )
    : [];

  // For bottom nodes, show info panel at top instead
  const showInfoPanelAtTop = activeNodeData && activeNodeData.y > 200;

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-background via-primary/3 to-primary/8 dark:from-primary/15 dark:via-background dark:via-primary/5 dark:to-primary/15" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_30%,rgba(59,130,246,0.15),transparent_60%)] dark:bg-[radial-gradient(ellipse_at_20%_30%,rgba(96,165,250,0.2),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_70%,rgba(59,130,246,0.12),transparent_60%)] dark:bg-[radial-gradient(ellipse_at_80%_70%,rgba(96,165,250,0.18),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_70%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(96,165,250,0.08),transparent_70%)]" />
      <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,rgba(59,130,246,0.03)_60deg,transparent_120deg,rgba(59,130,246,0.03)_180deg,transparent_240deg,rgba(59,130,246,0.03)_300deg,transparent_360deg)] dark:bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,rgba(96,165,250,0.05)_60deg,transparent_120deg,rgba(96,165,250,0.05)_180deg,transparent_240deg,rgba(96,165,250,0.05)_300deg,transparent_360deg)] opacity-40" style={{ animation: 'spin 20s linear infinite' }} />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMzYjgyZjYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-30 dark:opacity-20" />
      
      <div className="container relative mx-auto px-6 py-20 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in-up">
            <div className="inline-block">
              <span className="bg-primary/10 dark:bg-primary/20 text-primary px-4 py-2 border-2 border-primary/30 text-sm font-bold uppercase tracking-wider">
                Technology & Data Solutions
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-foreground leading-tight tracking-tight">
              Put Your Technology and Data First
            </h1>
            <p className="text-xl md:text-2xl text-foreground-secondary leading-relaxed max-w-2xl font-medium">
              Let us help take care of your technology and data processes so that you can save time, make informed decisions and improve your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link 
                href="tel:+61487631858" 
                className="group relative bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 border-2 border-primary font-bold transition-all duration-300 text-center shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 hover:scale-105 flex items-center justify-center gap-2 uppercase tracking-wide"
              >
                Contact Us
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="#process" 
                className="group text-primary hover:text-primary/80 px-8 py-4 font-bold transition-all duration-300 text-center border-2 border-primary hover:bg-primary/10 flex items-center justify-center gap-2 uppercase tracking-wide"
              >
                See our Process
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-lg relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-primary/30 blur-2xl opacity-50 animate-pulse" />
              <div className="relative bg-gradient-to-br from-background-secondary via-background to-background-tertiary p-8 aspect-square flex items-center justify-center border-2 border-primary/40 shadow-2xl backdrop-blur-sm overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10" />
                <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_24%,rgba(59,130,246,0.05)_25%,rgba(59,130,246,0.05)_26%,transparent_27%,transparent_74%,rgba(59,130,246,0.05)_75%,rgba(59,130,246,0.05)_76%,transparent_77%,transparent)] bg-[length:20px_20px]" />
                <div className="relative z-10 w-full h-full flex items-center justify-center">
                  <svg 
                    className="w-full h-full cursor-pointer relative z-10" 
                    viewBox="0 0 400 400" 
                    xmlns="http://www.w3.org/2000/svg"
                    onMouseMove={handleMouseMove}
                    style={{ pointerEvents: 'all' }}
                  >
                    <defs>
                      <linearGradient id="nodeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="1" />
                        <stop offset="100%" stopColor="hsl(var(--primary-600))" stopOpacity="1" />
                      </linearGradient>
                      <linearGradient id="nodeGradientHover" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="1" />
                        <stop offset="100%" stopColor="hsl(var(--primary-600))" stopOpacity="1" />
                      </linearGradient>
                      <linearGradient id="dataFlowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0" />
                        <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
                      </linearGradient>
                      <filter id="glow">
                        <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                        <feMerge>
                          <feMergeNode in="coloredBlur"/>
                          <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                      </filter>
                    </defs>
                    
                    {/* Network connections - base */}
                    <g stroke="hsl(var(--primary))" strokeWidth="2" strokeOpacity="0.2" style={{ pointerEvents: 'none' }}>
                      {connections.map((conn, idx) => {
                        const fromNode = getNodeById(conn.from);
                        const toNode = getNodeById(conn.to);
                        if (!fromNode || !toNode) return null;
                        const isHighlighted = highlightedConnections.some(
                          hc => hc.from === conn.from && hc.to === conn.to
                        );
                        return (
                          <line
                            key={idx}
                            x1={fromNode.x}
                            y1={fromNode.y}
                            x2={toNode.x}
                            y2={toNode.y}
                            strokeOpacity={isHighlighted ? 0.8 : 0.2}
                            strokeWidth={isHighlighted ? 3 : 2}
                            className="transition-all duration-300"
                          />
                        );
                      })}
                    </g>

                    {/* Animated data flows */}
                    <g style={{ pointerEvents: 'none' }}>
                      {connections.map((conn, idx) => {
                        const fromNode = getNodeById(conn.from);
                        const toNode = getNodeById(conn.to);
                        if (!fromNode || !toNode) return null;
                        const pathId = `path-${idx}`;
                        const isHighlighted = highlightedConnections.some(
                          hc => hc.from === conn.from && hc.to === conn.to
                        );
                        const duration = 2 + (idx % 3) * 0.5;
                        return (
                          <g key={idx}>
                            <path
                              id={pathId}
                              d={`M ${fromNode.x} ${fromNode.y} L ${toNode.x} ${toNode.y}`}
                              fill="none"
                            />
                            <circle
                              r={isHighlighted ? 4 : 3}
                              fill="hsl(var(--primary))"
                              opacity={isHighlighted ? 1 : 0.5}
                              filter={isHighlighted ? 'url(#glow)' : undefined}
                            >
                              <animateMotion
                                dur={`${duration}s`}
                                repeatCount="indefinite"
                                begin={`${idx * 0.2}s`}
                              >
                                <mpath href={`#${pathId}`} />
                              </animateMotion>
                            </circle>
                          </g>
                        );
                      })}
                    </g>

                    {/* Network nodes */}
                    <g>
                      {nodes.map((node) => {
                        const isActive = activeNode === node.id;
                        const isHovered = hoveredNode === node.id;
                        const isSelected = selectedNode === node.id;
                        const scale = isActive ? 1.5 : isHovered ? 1.3 : 1;
                        const nodeRadius = node.r * scale;
                        return (
                          <g key={node.id} style={{ pointerEvents: 'all' }}>
                            {/* Hover ring */}
                            {isActive && (
                              <circle
                                cx={node.x}
                                cy={node.y}
                                r={node.r * 2.5}
                                fill="none"
                                stroke="hsl(var(--primary))"
                                strokeWidth="2"
                                strokeOpacity="0.4"
                                style={{
                                  animation: 'pulse 2s ease-in-out infinite',
                                  pointerEvents: 'none'
                                }}
                              />
                            )}
                            {/* Invisible larger hit area for easier interaction - bigger for bottom nodes and central node */}
                            <circle
                              cx={node.x}
                              cy={node.y}
                              r={node.y > 200 ? node.r * 3 : node.id === 'processing' ? node.r * 2.5 : node.r * 2}
                              fill="transparent"
                              style={{ cursor: 'pointer' }}
                              onMouseEnter={() => handleNodeHover(node.id)}
                              onMouseLeave={() => handleNodeHover(null)}
                              onClick={() => handleNodeClick(node.id)}
                            />
                            {/* Node circle */}
                            <circle
                              cx={node.x}
                              cy={node.y}
                              r={nodeRadius}
                              fill={isSelected ? "hsl(var(--primary))" : "url(#nodeGradient)"}
                              filter={isActive ? 'url(#glow)' : undefined}
                              style={{
                                transition: 'all 0.3s ease',
                                cursor: 'pointer',
                                pointerEvents: 'none'
                              }}
                            >
                              <title>{node.title}</title>
                            </circle>
                            {/* Node label - position above for bottom nodes, below for top nodes */}
                            {isActive && (
                              <text
                                x={node.x}
                                y={node.y > 200 ? node.y - nodeRadius - 12 : node.y + nodeRadius + 20}
                                textAnchor="middle"
                                fill="hsl(var(--primary))"
                                fontSize="11"
                                fontWeight="bold"
                                style={{ pointerEvents: 'none' }}
                              >
                                {node.title}
                              </text>
                            )}
                          </g>
                        );
                      })}
                    </g>

                    {/* Pulsing rings around central node - only when no active node */}
                    {!activeNode && (
                      <circle
                        cx={200}
                        cy={150}
                        r="20"
                        fill="none"
                        stroke="hsl(var(--primary))"
                        strokeWidth="1"
                        strokeOpacity="0.4"
                        style={{ pointerEvents: 'none' }}
                      >
                        <animate
                          attributeName="r"
                          values="20;35;20"
                          dur="3s"
                          repeatCount="indefinite"
                        />
                        <animate
                          attributeName="opacity"
                          values="0.4;0;0.4"
                          dur="3s"
                          repeatCount="indefinite"
                        />
                      </circle>
                    )}
                  </svg>

                  {/* Info panel - show at top for bottom nodes, bottom for top nodes */}
                  {activeNodeData && (
                    <div
                      className={`absolute left-4 right-4 bg-background/95 backdrop-blur-md border-2 border-primary/40 p-4 shadow-2xl z-30 ${
                        showInfoPanelAtTop ? 'top-4' : 'bottom-4'
                      }`}
                      style={{
                        animation: 'slideUp 0.3s ease-out'
                      }}
                    >
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <h3 className="font-black text-primary text-base uppercase tracking-wide flex-1">
                          {activeNodeData.title}
                        </h3>
                        <button
                          onClick={() => {
                            setSelectedNode(null);
                            setHoveredNode(null);
                          }}
                          className="flex-shrink-0 p-1 hover:bg-primary/10 border border-primary/30 transition-colors"
                          aria-label="Close"
                        >
                          <X className="w-4 h-4 text-primary" />
                        </button>
                      </div>
                      <p className="text-foreground-secondary text-xs font-medium mb-3">
                        {activeNodeData.description}
                      </p>
                      <div className="flex flex-wrap gap-2 items-center">
                        <span className="text-xs text-foreground-muted font-bold uppercase">
                          Connected to:
                        </span>
                        {activeNodeData.connections.map((connId) => {
                          const connNode = getNodeById(connId);
                          return connNode ? (
                            <span
                              key={connId}
                              className="text-xs bg-primary/10 text-primary px-2 py-1 border border-primary/30 font-bold uppercase"
                            >
                              {connNode.title}
                            </span>
                          ) : null;
                        })}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
