import React, { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import TypewriterEffect from "@/components/TypewriterEffect";
import TerminalWindow from "@/components/TerminalWindow";
import FloatLogo from "@/components/FloatLogo";
import GlowingButton from "@/components/GlowingButton";
import EmailSignup from "@/components/EmailSignup";
import Terminal from "@/components/Terminal";
import AnimatedTimeline from "@/components/AnimatedTimeline";
import RitualDisplay from "@/components/RitualDisplay";
import { FeatureGrid } from "@/components/FeaturePreview";

const Index = () => {
  // Track scroll position for animations
  const { ref: heroRef, inView: heroInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // Rotating sigils
  const sigils = ["{■}", "{∴}", "{⊡}"];
  const [currentSigil, setCurrentSigil] = React.useState(0);

  useEffect(() => {
    const sigilInterval = setInterval(() => {
      setCurrentSigil((prev) => (prev + 1) % sigils.length);
    }, 3000);

    return () => clearInterval(sigilInterval);
  }, []);

  // Command line simulation
  const terminalCommands = [
    {
      command: "help",
      output: [
        "FLOAT BBS - Terminal Interface v0.1",
        "Available commands:",
        "- help: Show this message",
        "- about: About FLOAT BBS",
        "- concept: The Rotfield metaphor",
      ],
      delay: 0,
    },
    {
      command: "about",
      output: [
        "FLOAT BBS is a terminal-first knowledge management system",
        "built for neurodivergent minds, launching Q2 2025.",
        "",
        "Core philosophy: 'Shacks, Not Cathedrals'",
        "Where digital fragments decay, connect, and bloom again.",
      ],
      delay: 3500,
    },
    {
      command: "concept",
      output: [
        "The Rotfield is a digital swamp where ideas decay and regenerate.",
        "It consists of:",
        "- Shacks: Adaptable, modular note structures",
        "- Boardwalks: Connections between ideas",
        "- Bone Piles: Archives with latent value",
        "- Gardens: Curated knowledge collections",
      ],
      delay: 3000,
    },
  ];

  // Ritual workflows data
  const ritualWorkflows = [
    {
      command: "floatctl --toss",
      name: "Quick Thought Capture",
      description:
        "Rapidly capture thoughts without interrupting your flow. Ideas are thrown into the Rotfield as unprocessed fragments to be developed later.",
      variant: "default",
    },
    {
      command: "floatctl --bloom",
      name: "Structured Editing",
      description:
        "Transform rough notes into structured content. Connect ideas, add metadata, and establish relationships between existing shacks.",
      variant: "garden",
    },
    {
      command: "floatctl --rot",
      name: "Archiving to Bone Piles",
      description:
        "Archive inactive notes to Bone Piles where they remain searchable but don't clutter active thinking space. Digital decay as a feature.",
      variant: "bone-pile",
    },
    {
      command: "floatctl --necro",
      name: "AI-assisted Resurrection",
      description:
        "Use Note Necromancy to bring back relevant ideas from Bone Piles based on current work. AI helps identify patterns and connections.",
      variant: "teal",
    },
    {
      command: "floatctl --tend",
      name: "Garden Nurturing",
      description:
        "Cultivate and organize your best ideas into Gardens. Maintain connections while creating presentable knowledge collections.",
      variant: "boardwalk",
    },
  ];

  // Features data
  const features = [
    {
      title: "Terminal-first TUI",
      description:
        "A modal interface inspired by Vim, designed for keyboard-centric workflows with minimal distractions.",
      command: "floatctl --ui",
      output: ["Loading terminal user interface...", "[OK] Ready"],
      variant: "default",
    },
    {
      title: "Knowledge Graph",
      description:
        "Visualize connections between ideas with an interactive graph that adapts to your thinking patterns.",
      command: "floatctl --graph",
      output: ["Generating knowledge graph...", "[OK] 128 nodes rendered"],
      variant: "boardwalk",
    },
    {
      title: "Note Necromancy",
      description:
        "AI-assisted resurrection of archived ideas when they become relevant to your current context.",
      command: "floatctl --necro",
      output: ["Running semantic search...", "[FOUND] 5 related bone fragments"],
      variant: "bone-pile",
    },
    {
      title: "Multi-panel Workspaces",
      description:
        "Customizable workspaces with context-aware styling to support different thinking modes.",
      command: "floatctl --workspace",
      output: ["Loading custom workspace...", "[OK] 'Deep Focus' mode activated"],
      variant: "teal",
    },
    {
      title: "Git-based Versioning",
      description:
        "Seamless cross-device sync using Git, with automatic versioning and offline capabilities.",
      command: "floatctl --sync",
      output: ["Syncing with remote...", "[OK] All changes committed"],
      variant: "garden",
    },
    {
      title: "Plugin System",
      description:
        "Extend your Rotfield with custom rituals and integrations tailored to your workflow.",
      command: "floatctl --plugin list",
      output: ["Available plugins:", "- obsidian-import", "- zotero-connector", "- gpt-oracle"],
      variant: "default",
    },
  ];

  // Timeline data
  const timelineItems = [
    {
      phase: "Phase 1",
      title: "Foundation",
      date: "Q2 2025",
      status: "current" as const,
    },
    {
      phase: "Phase 2",
      title: "Rituals",
      date: "Q3 2025",
      status: "planned" as const,
    },
    {
      phase: "Phase 3",
      title: "Community",
      date: "Q4 2025",
      status: "planned" as const,
    },
    {
      phase: "Phase 4",
      title: "Expansion",
      date: "Q1 2026",
      status: "planned" as const,
    },
  ];

  return (
    <>
      {/* Scanlines overlay */}
      <div className="scanlines"></div>

      {/* Main content */}
      <div className="min-h-screen flex flex-col">
        {/* Hero Section */}
        <section
          ref={heroRef}
          id="hero"
          className="min-h-screen flex items-center justify-center relative section"
        >
          <div className="absolute top-4 right-4">
            <div className="animate-rotate-sigil text-magenta text-2xl font-bold">
              {sigils[currentSigil]}
            </div>
          </div>

          <div className="max-w-5xl mx-auto text-center space-y-12">
            <div
              className={`transform transition-all duration-1000 ${
                heroInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              <FloatLogo className="mx-auto mb-8" />

              <div className="mb-8">
                <TypewriterEffect
                  text="FLOAT BBS: Shacks, Not Cathedrals"
                  className="text-2xl sm:text-3xl md:text-4xl font-bold text-magenta mb-4"
                  typingSpeed={60}
                />
                <p className="text-lg md:text-xl text-terminal-text/80 max-w-2xl mx-auto">
                  A cyberpunk knowledge system for neurodivergent minds
                </p>
              </div>

              <div className="mt-12">
                <TerminalWindow className="max-w-2xl mx-auto">
                  <Terminal commands={terminalCommands} />
                </TerminalWindow>
              </div>

              <div className="mt-12">
                <GlowingButton className="text-lg px-8 py-4">
                  Join the Waitlist
                </GlowingButton>
              </div>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-magenta"
            >
              <path d="M12 5v14"></path>
              <path d="M19 12l-7 7-7-7"></path>
            </svg>
          </div>
        </section>

        {/* The Rotfield Concept */}
        <section id="concept" className="section bg-terminal-bg/20">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              The Rotfield Concept
            </h2>
            <p className="text-lg mb-8 max-w-3xl">
              The Rotfield is a digital swamp where ideas decay and regenerate, an adaptive
              ecosystem for knowledge work that embraces impermanence as a feature.
              Unlike rigid systems, the Rotfield thrives on change.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <TerminalWindow variant="default" title="float@bbs:~/shacks">
                <h3 className="text-xl font-bold mb-2">Shacks</h3>
                <p className="text-terminal-text opacity-90 mb-4">
                  Adaptable, modular note structures that can be quickly assembled and modified.
                  Unlike rigid cathedrals, shacks evolve with your thinking.
                </p>
                <div className="text-terminal-text/70 text-sm">
                  <code>
                    &gt; Viewing shack_173.md (last edited 3 days ago)
                    <br />
                    &gt; Connected to 7 other notes
                  </code>
                </div>
              </TerminalWindow>

              <TerminalWindow variant="boardwalk" title="float@bbs:~/boardwalks">
                <h3 className="text-xl font-bold mb-2">Boardwalks</h3>
                <p className="text-terminal-text opacity-90 mb-4">
                  Connections between ideas that form pathways through the Rotfield. 
                  Create trails of thought that guide but don't constrain.
                </p>
                <div className="text-terminal-text/70 text-sm">
                  <code>
                    &gt; Boardwalk "Creative Process" contains 12 nodes
                    <br />
                    &gt; Current position: node 4/12
                  </code>
                </div>
              </TerminalWindow>

              <TerminalWindow variant="bone-pile" title="float@bbs:~/bone_piles">
                <h3 className="text-xl font-bold mb-2">Bone Piles</h3>
                <p className="text-terminal-text opacity-90 mb-4">
                  Archives with latent value where inactive notes go. Not deleted, 
                  but decayed—ready for necromancy when relevant again.
                </p>
                <div className="text-terminal-text/70 text-sm">
                  <code>
                    &gt; Bone pile contains 73 archived notes
                    <br />
                    &gt; Last resurrection: 2 days ago
                  </code>
                </div>
              </TerminalWindow>

              <TerminalWindow variant="garden" title="float@bbs:~/gardens">
                <h3 className="text-xl font-bold mb-2">Gardens</h3>
                <p className="text-terminal-text opacity-90 mb-4">
                  Curated knowledge collections that represent your refined thinking. 
                  Carefully tended but still connected to the wider Rotfield.
                </p>
                <div className="text-terminal-text/70 text-sm">
                  <code>
                    &gt; Garden "Systems Thinking" is 87% complete
                    <br />
                    &gt; Last tended: today
                  </code>
                </div>
              </TerminalWindow>
            </div>
          </div>
        </section>

        {/* Ritual Workflows */}
        <section id="rituals" className="section">
          <div className="max-w-5xl mx-auto">
            <RitualDisplay rituals={ritualWorkflows} />
          </div>
        </section>

        {/* Neurodivergent-First Design */}
        <section id="neurodivergent" className="section bg-terminal-bg/20">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Neurodivergent-First Design
            </h2>
            
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-6 mt-8">
              <div className="flex items-start gap-4">
                <div className="bg-magenta rounded-full p-2 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-black"
                  >
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Reduced Decision Fatigue</h3>
                  <p className="text-terminal-text opacity-90">
                    Contextual actions and minimal interfaces reduce cognitive load,
                    letting you focus on thinking, not tool management.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-magenta rounded-full p-2 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-black"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Flow State Support</h3>
                  <p className="text-terminal-text opacity-90">
                    Minimal interruptions and keyboard-driven workflows designed
                    to keep you in your creative or analytical flow.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-magenta rounded-full p-2 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-black"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="m4.93 4.93 14.14 14.14" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Stimming-Friendly</h3>
                  <p className="text-terminal-text opacity-90">
                    Satisfying interactions and animations that provide sensory
                    feedback without being distracting or overwhelming.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-magenta rounded-full p-2 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-black"
                  >
                    <path d="M12 20v-6M12 14l-4-4M12 14l4-4" />
                    <path d="M12 4v10" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Hyperfocus Tools</h3>
                  <p className="text-terminal-text opacity-90">
                    Distraction blocking features and focused workspace modes
                    that help channel hyperfocus productively.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-magenta rounded-full p-2 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-black"
                  >
                    <rect width="18" height="18" x="3" y="3" rx="2" />
                    <path d="M9 9h6v6H9z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Task Switching</h3>
                  <p className="text-terminal-text opacity-90">
                    Session persistence and context saving to make task switching
                    less disruptive and more manageable.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-magenta rounded-full p-2 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-black"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 8v8" />
                    <path d="M8 12h8" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Reduced Friction</h3>
                  <p className="text-terminal-text opacity-90">
                    Streamlined capture processes ensure thoughts are recorded
                    with minimal barriers and context switching.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 border border-magenta/30 p-6 rounded-md bg-terminal-bg/50">
              <blockquote className="text-lg italic text-purple">
                "Your memory deserves better than ChatGPT. Trust the drift, defer the scaffold."
              </blockquote>
            </div>
          </div>
        </section>

        {/* Features Preview */}
        <section id="features" className="section">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Features Preview
            </h2>
            <p className="text-lg mb-8 max-w-3xl">
              FLOAT BBS combines terminal efficiency with modern knowledge management,
              creating a unique system tailored to neurodivergent workflows.
            </p>

            <FeatureGrid features={features as any} />
          </div>
        </section>

        {/* Roadmap & Timeline */}
        <section id="roadmap" className="section bg-terminal-bg/20">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Roadmap & Timeline
            </h2>
            <div className="mb-8">
              <div className="inline-block bg-magenta/20 border border-magenta/40 text-magenta px-3 py-1 rounded-md">
                Current Status: In Development
              </div>
            </div>

            <AnimatedTimeline items={timelineItems} />
          </div>
        </section>

        {/* About & Philosophy */}
        <section id="philosophy" className="section">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              About & Philosophy
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Shacks, Not Cathedrals</h3>
                <p className="text-terminal-text opacity-90 mb-4">
                  The core philosophy of FLOAT is that our digital knowledge spaces should be 
                  adaptable shacks—easily modified, moved, or rebuilt—rather than rigid cathedrals 
                  that resist change.
                </p>
                <p className="text-terminal-text opacity-90 mb-4">
                  Digital impermanence isn't a bug—it's a feature that mirrors how our brains 
                  actually work, selectively forgetting and remembering based on context and need.
                </p>
                
                <div className="mt-8">
                  <blockquote className="text-purple italic border-l-4 border-purple pl-4 py-2">
                    "Shacks adapt. Cathedrals crumble."
                  </blockquote>
                </div>
              </div>
              
              <div>
                <TerminalWindow variant="teal" title="float@bbs:~/philosophy">
                  <div className="space-y-4">
                    <div className="text-terminal-text opacity-90">
                      <p className="mb-2">Key principles:</p>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Embrace digital decay as generative</li>
                        <li>Value flexibility over permanence</li>
                        <li>Design for cognitive diversity</li>
                        <li>Support ritual without rigidity</li>
                        <li>Build tools that feel like extensions of thought</li>
                      </ul>
                    </div>
                    
                    <div className="text-sm text-terminal-text opacity-70 border-t border-dashed border-muted/30 pt-2 mt-4">
                      <code>
                        Created by a collective of neurodivergent developers
                        <br />
                        Build version: 0.2.5-alpha
                      </code>
                    </div>
                  </div>
                </TerminalWindow>
              </div>
            </div>
          </div>
        </section>

        {/* Join the Journey */}
        <section id="join" className="section bg-terminal-bg/30">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Join the Journey
            </h2>
            <p className="text-lg mb-12 max-w-2xl mx-auto">
              FLOAT BBS launches Q2 2025. Sign up now for early access
              and updates on development progress.
            </p>

            <div className="mb-12">
              <EmailSignup />
            </div>

            <div className="flex flex-wrap justify-center gap-8 mt-12">
              <a
                href="#"
                className="text-magenta hover:text-white transition-colors flex items-center gap-2"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
                GitHub
              </a>
              <a
                href="#"
                className="text-magenta hover:text-white transition-colors flex items-center gap-2"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
                Twitter
              </a>
              <a
                href="#"
                className="text-magenta hover:text-white transition-colors flex items-center gap-2"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="m3 21 9-9M14.5 14.5l5.5 5.5M19.32 12.34a5 5 0 1 0-7.08-7.08L4 13.5V20h6.5l8.82-8.66z" />
                </svg>
                Discord
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 border-t border-muted/30 text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="text-magenta font-bold text-xl">FLOAT BBS</div>
            <div className="text-magenta">{sigils[currentSigil]}</div>
          </div>
          <p className="text-terminal-text/60 text-sm">
            © 2025 FLOAT BBS · Coming Q2 2025
          </p>
          <p className="text-terminal-text/40 text-xs mt-2 max-w-md mx-auto">
            "In the Rotfield, decay is generative."
          </p>
        </footer>
      </div>
    </>
  );
};

export default Index;
