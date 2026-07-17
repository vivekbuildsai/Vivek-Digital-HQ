import type { Project } from "../types/project";

export const projects: Project[] = [
  {
    id: 1,
    slug: "kubernetes-nginx",

    title: "Kubernetes Nginx Deployment",

    category: "Kubernetes Fundamentals",

    overview:
      "This project demonstrates deployment of an Nginx application on Kubernetes using Minikube. It focuses on understanding Deployments, ReplicaSets, Pods and Services while learning the Kubernetes deployment workflow.",

    challenge:
      "Deploy an Nginx web server on Kubernetes while understanding how Deployments, ReplicaSets, Pods and Services work together.",

    solution:
      "Created Deployment and Service manifests, deployed them to Minikube, exposed the application through a NodePort Service and performed rolling updates and scaling operations.",

    architecture: [
      "Browser",
      "NodePort Service",
      "Deployment",
      "ReplicaSet",
      "Pod",
    ],

    kubernetesObjects: [
      "Deployment",
      "ReplicaSet",
      "Pod",
      "NodePort Service",
    ],

    projectStructure: [
      "project1_deploy_nginx/",
      "├── deployment.yaml",
      "├── service.yaml",
      "└── README.md",
    ],

    commands: [
      "kubectl apply -f deployment.yaml",
      "kubectl apply -f service.yaml",
      "kubectl get all",
      "kubectl describe deployment nginx-deployment",
      "kubectl rollout restart deployment nginx-deployment",
      "kubectl delete -f deployment.yaml",
    ],

    learnings: [
      "Deployments manage ReplicaSets",
      "ReplicaSets maintain desired Pods",
      "Services expose workloads",
      "Rolling updates",
      "Scaling applications",
    ],

    interviewQuestions: [
      "What is a Deployment?",
      "Difference between Pod and Deployment?",
      "Why do we need ReplicaSets?",
      "What is NodePort?",
      "How does a rolling update work?",
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

    overview:
      "Built and deployed a complete three-tier application consisting of a frontend, backend API and MySQL database on Kubernetes.",

    challenge:
      "Deploy multiple interconnected services while enabling communication between frontend, backend and database.",

    solution:
      "Containerized every application component and deployed them using Deployments, Services and Persistent Volume Claims.",

    architecture: [
      "Browser",
      "Frontend",
      "Backend API",
      "MySQL",
      "Persistent Volume",
    ],

    kubernetesObjects: [
      "Deployment",
      "ClusterIP Service",
      "NodePort Service",
      "Persistent Volume Claim",
      "Pod",
    ],

    projectStructure: [
      "project2_three_tier_app/",
      "├── frontend/",
      "├── backend/",
      "├── mysql/",
      "└── kubernetes/",
    ],

    commands: [
      "kubectl apply -f .",
      "kubectl get deployments",
      "kubectl get svc",
      "kubectl get pvc",
      "kubectl logs <pod>",
    ],

    learnings: [
      "Three-tier architecture",
      "Service discovery",
      "Networking",
      "Persistent storage",
      "Application deployment",
    ],

    interviewQuestions: [
      "How do frontend and backend communicate?",
      "Why ClusterIP?",
      "Why NodePort?",
      "How does Kubernetes DNS work?",
      "Why Persistent Volumes?",
    ],

    technologies: [
      "React",
      "Node.js",
      "MySQL",
      "Docker",
      "Kubernetes",
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

    overview:
      "Implemented Kubernetes ConfigMaps, Secrets, Persistent Volumes and Persistent Volume Claims to separate configuration from application code and persist MySQL data.",

    challenge:
      "Externalize application configuration, securely manage credentials and ensure data persistence even after pod restarts.",

    solution:
      "Used ConfigMaps for application configuration, Secrets for sensitive credentials and Persistent Volumes with Persistent Volume Claims to provide durable storage.",

    architecture: [
      "ConfigMap",
      "Secret",
      "Deployment",
      "MySQL",
      "Persistent Volume",
      "Persistent Volume Claim",
    ],

    kubernetesObjects: [
      "ConfigMap",
      "Secret",
      "Deployment",
      "Persistent Volume",
      "Persistent Volume Claim",
      "Pod",
    ],

    projectStructure: [
      "project3-configmap-secret-pv/",
      "├── configmap.yaml",
      "├── secret.yaml",
      "├── pv.yaml",
      "├── pvc.yaml",
      "├── deployment.yaml",
      "└── README.md",
    ],

    commands: [
      "kubectl apply -f configmap.yaml",
      "kubectl apply -f secret.yaml",
      "kubectl apply -f pv.yaml",
      "kubectl apply -f pvc.yaml",
      "kubectl apply -f deployment.yaml",
      "kubectl get configmap",
      "kubectl get secret",
      "kubectl get pv",
      "kubectl get pvc",
    ],

    learnings: [
      "Configuration management",
      "Secrets management",
      "Persistent Volumes",
      "Persistent Volume Claims",
      "Storage lifecycle",
    ],

    interviewQuestions: [
      "What is a ConfigMap?",
      "Difference between ConfigMap and Secret?",
      "What is a Persistent Volume?",
      "Why do we need a PVC?",
      "How is storage bound in Kubernetes?",
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

    overview:
      "Built a MySQL database using Kubernetes StatefulSets to understand stable pod identities, ordered deployment and persistent storage for stateful applications.",

    challenge:
      "Deploy a database requiring stable identities and persistent storage while maintaining predictable startup and shutdown behaviour.",

    solution:
      "Implemented a StatefulSet with persistent storage and a headless Service to provide stable networking and durable database storage.",

    architecture: [
      "Client",
      "Headless Service",
      "StatefulSet",
      "MySQL Pod",
      "Persistent Volume",
    ],

    kubernetesObjects: [
      "StatefulSet",
      "Headless Service",
      "Persistent Volume",
      "Persistent Volume Claim",
      "Pod",
    ],

    projectStructure: [
      "project4-statefulset-mysql/",
      "├── statefulset.yaml",
      "├── service.yaml",
      "├── pvc.yaml",
      "└── README.md",
    ],

    commands: [
      "kubectl apply -f statefulset.yaml",
      "kubectl apply -f service.yaml",
      "kubectl get statefulsets",
      "kubectl describe statefulset mysql",
      "kubectl get pods",
      "kubectl get pvc",
    ],

    learnings: [
      "StatefulSets",
      "Stable pod identity",
      "Ordered deployment",
      "Persistent storage",
      "Database workloads",
    ],

    interviewQuestions: [
      "What is a StatefulSet?",
      "Difference between StatefulSet and Deployment?",
      "What is a Headless Service?",
      "Why are StatefulSets used for databases?",
      "How does Kubernetes preserve pod identity?",
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
