import type { Project } from "../types/project";

export const projects: Project[] = [
  {
    id: 1,
    slug: "kubernetes-nginx",

    title: "Kubernetes Nginx Deployment",

    category: "Kubernetes Fundamentals",

    challenge:
      "Deploy an Nginx application on Kubernetes while understanding Deployments, ReplicaSets and Services.",

    solution:
      "Built a Kubernetes Deployment with a NodePort Service using Minikube. Implemented rolling updates, scaling and service exposure to understand Kubernetes core objects.",

    architecture: [
      "Browser",
      "NodePort Service",
      "Deployment",
      "ReplicaSet",
      "Pod",
    ],

    learnings: [
      "Deployments & ReplicaSets",
      "NodePort Services",
      "Rolling Updates",
      "Horizontal Scaling",
    ],

    technologies: [
      "Kubernetes",
      "Docker",
      "Nginx",
      "Minikube",
    ],

    github:
      "https://github.com/vivekbuildsai/minikube_projects/tree/main/project1_deploy_nginx",

    documentation: "",

    demo: "",

    featured: true,
  },

  {
    id: 2,
    slug: "three-tier-app",

    title: "Three-Tier Application",

    category: "Cloud Native Architecture",

    challenge:
      "Deploy a complete three-tier application consisting of a frontend, backend API and MySQL database on Kubernetes.",

    solution:
      "Containerized all application components and deployed them using Kubernetes Deployments, Services and Persistent Volumes while enabling communication between all tiers.",

    architecture: [
      "Browser",
      "React Frontend",
      "Backend API",
      "MySQL",
      "Persistent Volume",
    ],

    learnings: [
      "Three-tier architecture",
      "Service Communication",
      "Persistent Storage",
      "Application Networking",
    ],

    technologies: [
      "React",
      "Docker",
      "Kubernetes",
      "MySQL",
      "PVC",
    ],

    github:
      "https://github.com/vivekbuildsai/minikube_projects/tree/main/project2_three_tier_app",

    documentation: "",

    demo: "",

    featured: true,
  },

  {
    id: 3,
    slug: "configmap-secret-pv-pvc",

    title: "ConfigMap, Secret, PV & PVC",

    category: "Configuration & Storage",

    challenge:
      "Manage application configuration, sensitive credentials and persistent storage following Kubernetes best practices.",

    solution:
      "Configured ConfigMaps and Secrets to externalize application configuration while using Persistent Volumes and Persistent Volume Claims to ensure durable MySQL storage.",

    architecture: [
      "ConfigMap",
      "Secret",
      "Deployment",
      "MySQL",
      "Persistent Volume",
      "Persistent Volume Claim",
    ],

    learnings: [
      "ConfigMaps",
      "Secrets",
      "Persistent Volumes",
      "Persistent Volume Claims",
    ],

    technologies: [
      "Kubernetes",
      "ConfigMap",
      "Secret",
      "PV",
      "PVC",
      "MySQL",
    ],

    github:
      "https://github.com/vivekbuildsai/minikube_projects/tree/main/project3-configmap-secret-pv",

    documentation: "",

    demo: "",

    featured: true,
  },

  {
    id: 4,
    slug: "statefulset-mysql",

    title: "StatefulSet MySQL",

    category: "Stateful Workloads",

    challenge:
      "Deploy a database workload requiring stable identities, ordered deployment and persistent storage.",

    solution:
      "Implemented a MySQL StatefulSet with persistent storage to understand how Kubernetes manages stateful applications and durable data.",

    architecture: [
      "Client",
      "Service",
      "StatefulSet",
      "MySQL Pod",
      "Persistent Volume",
    ],

    learnings: [
      "StatefulSets",
      "Stable Network Identity",
      "Persistent Storage",
      "Database Deployments",
    ],

    technologies: [
      "Kubernetes",
      "StatefulSet",
      "MySQL",
      "PVC",
    ],

    github:
      "https://github.com/vivekbuildsai/minikube_projects/tree/main/project4-statefulset-mysql",

    documentation: "",

    demo: "",

    featured: true,
  },
];
