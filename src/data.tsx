import { Brain, LineChart, Network } from 'lucide-react';

export const projects = [
  {
    title: "AI-Powered Climate Analysis",
    description: "Leveraging machine learning to predict climate patterns and environmental impacts across Ecuador",
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=2072",
    metrics: [
      { label: "Accuracy Rate", value: "97.8%" },
      { label: "Data Points", value: "2.4M+" }
    ],
    icon: <Brain className="w-6 h-6 text-blue-400" />
  },
  {
    title: "Biomedical Data Mining",
    description: "Advanced analytics platform processing healthcare records to identify patterns in disease progression",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=2070",
    metrics: [
      { label: "Processing Power", value: "12.5 PF" },
      { label: "Success Rate", value: "94.2%" }
    ],
    icon: <LineChart className="w-6 h-6 text-blue-400" />
  },
  {
    title: "Smart City Infrastructure",
    description: "Real-time urban data analysis for optimizing city services and resource allocation",
    image: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?q=80&w=2027",
    metrics: [
      { label: "Live Sensors", value: "50K+" },
      { label: "Cities Covered", value: "12" }
    ],
    icon: <Network className="w-6 h-6 text-blue-400" />
  }
];

export const stats = [
  {
    value: "500TB+",
    label: "Data Processed",
    sublabel: "Daily computational throughput"
  },
  {
    value: "150+",
    label: "Research Papers",
    sublabel: "Published in top journals"
  },
  {
    value: "45+",
    label: "Global Partners",
    sublabel: "International collaborations"
  }
];