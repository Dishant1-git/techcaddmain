import type { CoursePage } from "./types";

export const aiDataCourses: CoursePage[] = [
  {
    slug: "artificial-intelligence",
    title: "Artificial Intelligence Certificate Program",
    navLabel: "Artificial Intelligence",
    group: "ai-data",
    icon: "BrainCircuit",
    tagline:
      "A full-length program taking you from Python and statistics to machine learning, deep learning and generative AI, finished with live projects and placement assistance.",
    level: "Intermediate",
    duration: "6–9 Months",
    eligibility: "12th pass or above; graduates and working professionals welcome. Basic computer skills required.",
    overview: [
      "This certificate program is built for learners who want a complete, career-ready path into AI rather than a single tool. You start with Python and the maths that matters, move through machine learning and deep learning, and finish with generative AI, LLM applications and deployment.",
      "Every stage is taught by working mentors through hands-on labs and live projects, in classroom batches at our Punjab and North India branches or in live online batches. Placement assistance covers portfolio review, mock interviews and introductions to hiring partners across Mohali, Chandigarh, Delhi NCR and beyond.",
    ],
    gains: [
      "End-to-end skills: Python, statistics, machine learning, deep learning and generative AI in one structured program",
      "Live projects built on real-style datasets, reviewed by mentors and published to your GitHub portfolio",
      "Hands-on experience with PyTorch, scikit-learn, Hugging Face and LLM APIs",
      "TechCADD certification on completion, plus resume, LinkedIn and mock-interview support",
      "Placement assistance and interview preparation for AI and data roles",
    ],
    syllabus: [
      {
        title: "Python for AI",
        summary: "Build a solid Python foundation focused on the data-handling patterns used in every AI workflow.",
        topics: [
          "Variables, control flow, functions and modules",
          "Lists, dictionaries, comprehensions and file handling",
          "Object-oriented Python and error handling",
          "NumPy arrays and vectorised operations",
          "Jupyter, virtual environments and Git basics",
        ],
      },
      {
        title: "Maths and Statistics for AI",
        summary: "Learn just enough linear algebra, probability and statistics to understand how models actually learn.",
        topics: [
          "Vectors, matrices and matrix operations",
          "Probability, distributions and Bayes’ theorem",
          "Descriptive statistics and hypothesis testing",
          "Derivatives, gradients and gradient descent",
          "Correlation, variance and the bias–variance trade-off",
        ],
      },
      {
        title: "Data Handling and Visualisation",
        summary: "Clean, explore and visualise real-world datasets before any model is trained.",
        topics: [
          "Pandas DataFrames, indexing, grouping and merging",
          "Handling missing values, outliers and duplicates",
          "Exploratory data analysis workflow",
          "Matplotlib and Seaborn charts",
          "Feature scaling and encoding",
        ],
      },
      {
        title: "Machine Learning with scikit-learn",
        summary: "Train, tune and evaluate classical models for prediction and pattern discovery.",
        topics: [
          "Linear and logistic regression",
          "Decision trees, random forests and gradient boosting",
          "K-means clustering and PCA",
          "Train-test split, cross-validation and hyperparameter tuning",
          "Metrics: precision, recall, F1, ROC-AUC, RMSE",
        ],
      },
      {
        title: "Deep Learning with PyTorch",
        summary: "Build neural networks from first principles and train them on real image and sequence data.",
        topics: [
          "Perceptrons, activation functions and backpropagation",
          "Tensors, autograd and training loops in PyTorch",
          "Convolutional neural networks for images",
          "Regularisation, dropout and batch normalisation",
          "Transfer learning with pretrained models",
        ],
      },
      {
        title: "NLP and Transformers",
        summary: "Work with text using modern tokenisation and transformer models.",
        topics: [
          "Text preprocessing and tokenisation",
          "Embeddings and semantic similarity",
          "Attention and the transformer architecture",
          "Hugging Face Transformers and pipelines",
          "Fine-tuning a model for text classification",
        ],
      },
      {
        title: "Generative AI and LLM Applications",
        summary: "Build practical applications on top of large language models responsibly.",
        topics: [
          "How LLMs work: pretraining, fine-tuning and inference",
          "Prompt engineering and structured outputs",
          "Retrieval-augmented generation with vector databases",
          "Building chat and agent workflows with LangChain or LlamaIndex",
          "Evaluation, safety, bias and responsible AI",
        ],
      },
      {
        title: "Deployment, Capstone and Interview Preparation",
        summary: "Ship a model as a working service, complete a capstone and prepare for AI job interviews.",
        topics: [
          "Serving models with FastAPI and Docker",
          "Experiment tracking basics with MLflow",
          "Capstone project with mentor review and demo",
          "Portfolio, GitHub and resume building",
          "Mock technical and HR interviews",
        ],
      },
    ],
    tools: [
      "Python",
      "NumPy",
      "Pandas",
      "scikit-learn",
      "PyTorch",
      "Hugging Face",
      "LangChain",
      "FastAPI",
      "Docker",
      "Git and GitHub",
      "Jupyter",
    ],
    projects: [
      {
        title: "Customer Churn Predictor",
        text: "Predict which subscribers are likely to leave using a tuned gradient-boosting model with clear business recommendations.",
        tags: ["scikit-learn", "Classification"],
      },
      {
        title: "Crop and Leaf Disease Classifier",
        text: "Train a convolutional network with transfer learning to identify plant disease from photos, relevant to Punjab’s farming belt.",
        tags: ["PyTorch", "Computer Vision"],
      },
      {
        title: "Review Sentiment Analyser",
        text: "Fine-tune a transformer to classify customer reviews and surface the themes behind negative feedback.",
        tags: ["NLP", "Hugging Face"],
      },
      {
        title: "Document Q&A Assistant",
        text: "Build a retrieval-augmented chatbot that answers questions from a company’s PDF manuals with cited sources.",
        tags: ["GenAI", "RAG"],
      },
      {
        title: "Demand Forecasting Model",
        text: "Forecast weekly sales for a manufacturing or export business using time-series features and regression models.",
        tags: ["Forecasting", "Pandas"],
      },
      {
        title: "Deployed Prediction API",
        text: "Package a trained model as a FastAPI service in a Docker container with a simple web front end.",
        tags: ["FastAPI", "Docker"],
      },
    ],
    careers: [
      {
        role: "AI Engineer",
        work: "Builds and integrates machine learning and LLM features into products.",
        hirers: "Software product companies, IT services firms and startups",
      },
      {
        role: "Machine Learning Engineer",
        work: "Trains, evaluates and deploys models on production data.",
        hirers: "Fintech, e-commerce and analytics companies",
      },
      {
        role: "Data Scientist (Junior)",
        work: "Explores data, builds predictive models and communicates insights.",
        hirers: "Consulting firms, healthcare and manufacturing businesses",
      },
      {
        role: "Generative AI Developer",
        work: "Creates chatbots, RAG systems and automation on top of LLM APIs.",
        hirers: "Digital agencies, SaaS companies and enterprise IT teams",
      },
      {
        role: "NLP Analyst",
        work: "Processes and classifies text data for search, support and analytics.",
        hirers: "BPO and customer-experience companies, media and edtech firms",
      },
    ],
    whyNow: [
      "Companies of every size, from Mohali IT Park firms to Delhi NCR enterprises, are adding AI features and need people who can build them, not only use them.",
      "Generative AI has made the fundamentals more valuable: employers look for candidates who understand data, models and deployment, not just prompts.",
    ],
    faqs: [
      {
        q: "Do I need a programming background to join?",
        a: "No. The program starts with Python from scratch. Comfort with basic school-level maths is enough to begin.",
      },
      {
        q: "How is this different from the short AI courses on your site?",
        a: "The short AI courses focus on one topic or tool. This certificate program is a full career path covering Python, machine learning, deep learning and generative AI, with live projects and placement assistance.",
      },
      {
        q: "Can I attend online?",
        a: "Yes. Live online batches follow the same syllabus, mentors and project reviews as classroom batches at our branches.",
      },
      {
        q: "Will I get a certificate?",
        a: "Yes. You receive a TechCADD certification after completing the modules and capstone project.",
      },
      {
        q: "Is placement assistance included?",
        a: "Yes. This includes portfolio and resume review, mock interviews and introductions to hiring partners. Outcomes depend on your performance and the openings available.",
      },
    ],
    related: ["machine-learning", "deep-learning", "data-science"],
  },
  {
    slug: "machine-learning",
    title: "Machine Learning Certificate Program",
    navLabel: "Machine Learning",
    group: "ai-data",
    icon: "Cpu",
    tagline:
      "Master statistics, classical machine learning and MLOps basics through live projects, with certification and placement assistance for ML roles.",
    level: "Intermediate",
    duration: "4–6 Months",
    eligibility: "12th pass or above; basic programming knowledge is helpful but not mandatory.",
    overview: [
      "This program teaches machine learning the way it is used at work: understand the statistics, prepare the data, choose and tune a model, then track and ship it. You will spend most of your time building, not watching slides.",
      "Mentors with industry experience guide you through live projects in classroom or live online batches. By the end you will have a portfolio of end-to-end ML projects and placement assistance to help you start applying.",
    ],
    gains: [
      "Strong grounding in statistics and the classical algorithms that power most business ML",
      "Live projects covering regression, classification, clustering and time series",
      "MLOps basics: experiment tracking, model packaging and simple deployment",
      "TechCADD certification with a mentor-reviewed capstone",
      "Placement assistance, resume support and mock interviews",
    ],
    syllabus: [
      {
        title: "Python and Data Libraries",
        summary: "Get fluent in the Python stack used for every machine learning task.",
        topics: [
          "Python syntax, functions and modules",
          "NumPy arrays and broadcasting",
          "Pandas for loading, cleaning and reshaping data",
          "Matplotlib and Seaborn for plots",
          "Jupyter and Git workflow",
        ],
      },
      {
        title: "Statistics for Machine Learning",
        summary: "Build the statistical intuition needed to judge whether a model result can be trusted.",
        topics: [
          "Descriptive statistics and distributions",
          "Sampling, confidence intervals and hypothesis tests",
          "Correlation and covariance",
          "Probability and Bayes’ theorem",
          "Bias, variance and overfitting",
        ],
      },
      {
        title: "Feature Engineering",
        summary: "Turn raw data into inputs a model can learn from.",
        topics: [
          "Missing values and outlier handling",
          "Encoding categorical variables",
          "Scaling, normalisation and transformation",
          "Feature selection and dimensionality reduction with PCA",
          "Preventing data leakage with scikit-learn pipelines",
        ],
      },
      {
        title: "Supervised Learning",
        summary: "Train and compare regression and classification models on labelled data.",
        topics: [
          "Linear, Ridge and Lasso regression",
          "Logistic regression and k-nearest neighbours",
          "Decision trees and random forests",
          "Support vector machines",
          "Gradient boosting with XGBoost and LightGBM",
        ],
      },
      {
        title: "Unsupervised Learning and Time Series",
        summary: "Find structure in unlabelled data and forecast values over time.",
        topics: [
          "K-means and hierarchical clustering",
          "DBSCAN and anomaly detection",
          "Recommendation basics: content and collaborative filtering",
          "Time-series decomposition and ARIMA",
          "Forecasting with lag features and gradient boosting",
        ],
      },
      {
        title: "Model Evaluation and Tuning",
        summary: "Measure models honestly and improve them systematically.",
        topics: [
          "Cross-validation strategies",
          "Confusion matrix, precision, recall, F1 and ROC-AUC",
          "Regression metrics: MAE, RMSE, R²",
          "Grid search, random search and Optuna",
          "Handling imbalanced data",
        ],
      },
      {
        title: "MLOps Basics and Deployment",
        summary: "Track experiments and turn a notebook model into a usable service.",
        topics: [
          "Saving models with joblib and ONNX",
          "Experiment tracking with MLflow",
          "Building an API with FastAPI",
          "Containerising with Docker",
          "Monitoring for data drift: the core idea",
        ],
      },
      {
        title: "Capstone Project and Interview Preparation",
        summary: "Deliver a complete ML project and prepare to explain it in interviews.",
        topics: [
          "Problem framing and dataset selection",
          "End-to-end pipeline with documentation",
          "Mentor review and final demo",
          "ML interview questions and case studies",
          "Resume, GitHub and LinkedIn polish",
        ],
      },
    ],
    tools: [
      "Python",
      "NumPy",
      "Pandas",
      "scikit-learn",
      "XGBoost",
      "LightGBM",
      "Optuna",
      "MLflow",
      "FastAPI",
      "Docker",
      "Jupyter",
    ],
    projects: [
      {
        title: "House Value Prediction",
        text: "Build a regression pipeline with feature engineering and compare linear and boosted models on a property dataset.",
        tags: ["Regression", "Pipelines"],
      },
      {
        title: "Loan Default Classifier",
        text: "Predict credit risk on an imbalanced dataset and explain the model’s decisions to a non-technical audience.",
        tags: ["Classification", "Imbalanced Data"],
      },
      {
        title: "Customer Segmentation",
        text: "Cluster retail customers by purchase behaviour to guide targeted marketing for a Ludhiana-style multi-store business.",
        tags: ["K-means", "PCA"],
      },
      {
        title: "Sales Forecasting Dashboard",
        text: "Forecast monthly demand for a manufacturing or exports business and present results with clear charts.",
        tags: ["Time Series", "Forecasting"],
      },
      {
        title: "Product Recommender",
        text: "Create a simple recommendation engine using item similarity and evaluate it with offline metrics.",
        tags: ["Recommenders", "Similarity"],
      },
      {
        title: "Tracked and Deployed Model",
        text: "Log experiments in MLflow and serve the best model through a Dockerised FastAPI endpoint.",
        tags: ["MLflow", "Docker"],
      },
    ],
    careers: [
      {
        role: "Machine Learning Engineer",
        work: "Builds, tunes and deploys predictive models for production use.",
        hirers: "Product companies, fintech and IT services firms",
      },
      {
        role: "Data Scientist (Junior)",
        work: "Analyses data, builds models and presents findings to business teams.",
        hirers: "Analytics consultancies, retail and manufacturing companies",
      },
      {
        role: "Applied ML Analyst",
        work: "Uses ML techniques to solve specific problems such as churn, fraud or demand.",
        hirers: "Banks, insurance firms and e-commerce businesses",
      },
      {
        role: "MLOps Associate",
        work: "Supports model packaging, tracking and deployment pipelines.",
        hirers: "Software companies and cloud-focused teams",
      },
    ],
    whyNow: [
      "Machine learning sits underneath forecasting, recommendations, fraud detection and most AI products, so the skill carries across industries.",
      "Employers increasingly want people who can take a model from notebook to deployment, which is exactly the MLOps basics this program adds.",
    ],
    faqs: [
      {
        q: "Is this different from the Artificial Intelligence certificate program?",
        a: "Yes. This program goes deeper on statistics, classical machine learning and MLOps basics. The Artificial Intelligence program is broader and adds deep learning and generative AI.",
      },
      {
        q: "Do I need to know Python already?",
        a: "No. The first module covers Python and the data libraries you need from the beginning.",
      },
      {
        q: "How much maths is required?",
        a: "School-level maths is enough. Statistics and the required algebra are taught inside the course with practical examples.",
      },
      {
        q: "Are live online batches available?",
        a: "Yes. Live online batches follow the same syllabus and project reviews as classroom batches.",
      },
      {
        q: "Will I receive placement assistance?",
        a: "Yes. This includes portfolio review, mock interviews and introductions to hiring partners, subject to your performance and available openings.",
      },
    ],
    related: ["artificial-intelligence", "data-science", "deep-learning"],
  },
  {
    slug: "deep-learning",
    title: "Deep Learning Course",
    navLabel: "Deep Learning",
    group: "ai-data",
    icon: "Network",
    tagline:
      "Build and train neural networks for vision, language and sequence data with PyTorch, then deploy them in live projects.",
    level: "Advanced",
    duration: "3–4 Months",
    eligibility: "Working knowledge of Python and basic machine learning; graduates and working professionals preferred.",
    overview: [
      "This course takes you from the mathematics of neural networks to modern architectures such as CNNs and transformers. You will write training loops yourself, so you understand what frameworks do behind the scenes.",
      "Labs run on GPU-enabled notebooks and cover image, text and time-series tasks. Mentors review your projects, and placement assistance helps you present them to hiring teams.",
    ],
    gains: [
      "Clear understanding of backpropagation, optimisers and training behaviour",
      "Hands-on PyTorch practice with CNNs, sequence models and transformers",
      "Experience with transfer learning and fine-tuning pretrained models",
      "Live projects deployable as demos, with TechCADD certification",
      "Interview preparation and placement assistance for AI roles",
    ],
    syllabus: [
      {
        title: "Neural Network Foundations",
        summary: "Understand how a network learns, from a single neuron to a multi-layer model.",
        topics: [
          "Perceptron, layers and activation functions",
          "Loss functions and gradient descent",
          "Backpropagation step by step",
          "Weight initialisation",
          "Building a network from scratch in NumPy",
        ],
      },
      {
        title: "PyTorch Essentials",
        summary: "Use PyTorch to build, train and debug models efficiently.",
        topics: [
          "Tensors, autograd and GPU usage",
          "Datasets, DataLoaders and transforms",
          "nn.Module and custom training loops",
          "Optimisers and learning-rate schedulers",
          "Saving, loading and checkpointing models",
        ],
      },
      {
        title: "Training Better Models",
        summary: "Diagnose and fix common training problems.",
        topics: [
          "Overfitting, underfitting and learning curves",
          "Dropout, weight decay and data augmentation",
          "Batch and layer normalisation",
          "Hyperparameter search",
          "Mixed-precision training and TensorBoard",
        ],
      },
      {
        title: "Convolutional Neural Networks",
        summary: "Apply CNNs to image classification and detection tasks.",
        topics: [
          "Convolution, pooling and feature maps",
          "Architectures: ResNet, EfficientNet",
          "Transfer learning and fine-tuning",
          "Object detection with YOLO",
          "Image segmentation basics",
        ],
      },
      {
        title: "Sequence Models",
        summary: "Model text and time-series data with recurrent architectures.",
        topics: [
          "RNNs, LSTMs and GRUs",
          "Word embeddings and text classification",
          "Sequence-to-sequence models",
          "Time-series forecasting with neural networks",
          "Limits of recurrent models",
        ],
      },
      {
        title: "Transformers and Attention",
        summary: "Learn the architecture behind modern language and vision models.",
        topics: [
          "Self-attention and positional encoding",
          "Encoder and decoder blocks",
          "Hugging Face Transformers library",
          "Fine-tuning BERT-style models",
          "Vision Transformers overview",
        ],
      },
      {
        title: "Generative Models and Deployment",
        summary: "Explore generative approaches and serve models in real applications.",
        topics: [
          "Autoencoders and variational autoencoders",
          "GAN and diffusion model concepts",
          "Exporting models with ONNX and TorchScript",
          "Serving with FastAPI and Docker",
          "Ethics, bias and responsible use",
        ],
      },
      {
        title: "Capstone Project and Interview Preparation",
        summary: "Deliver a full deep learning project and rehearse for technical interviews.",
        topics: [
          "Choosing a problem and preparing the dataset",
          "Training, evaluation and error analysis",
          "Demo app with Streamlit or Gradio",
          "Deep learning interview questions",
          "Portfolio and GitHub documentation",
        ],
      },
    ],
    tools: [
      "Python",
      "PyTorch",
      "TensorFlow and Keras",
      "Hugging Face",
      "OpenCV",
      "TensorBoard",
      "ONNX",
      "FastAPI",
      "Docker",
      "Streamlit",
      "Google Colab",
    ],
    projects: [
      {
        title: "Handwritten Digit and Character Recogniser",
        text: "Train a CNN from scratch and compare it with a fine-tuned pretrained model.",
        tags: ["CNN", "PyTorch"],
      },
      {
        title: "Sports Equipment Defect Detector",
        text: "Detect surface defects in product photos, inspired by quality checks at Jalandhar sports-goods manufacturers.",
        tags: ["Computer Vision", "Transfer Learning"],
      },
      {
        title: "Object Detection with YOLO",
        text: "Detect and count objects in images and video streams, such as vehicles or safety gear.",
        tags: ["YOLO", "OpenCV"],
      },
      {
        title: "Text Classification with Transformers",
        text: "Fine-tune a BERT-style model to classify support tickets or news headlines.",
        tags: ["NLP", "Transformers"],
      },
      {
        title: "Stock and Demand Time-Series Forecaster",
        text: "Use LSTM models to forecast a numeric series and compare against a classical baseline.",
        tags: ["LSTM", "Forecasting"],
      },
      {
        title: "Deployed Image API",
        text: "Wrap a trained model in a FastAPI service with a Streamlit front end and Docker packaging.",
        tags: ["Deployment", "Docker"],
      },
    ],
    careers: [
      {
        role: "Deep Learning Engineer",
        work: "Designs, trains and optimises neural networks for production tasks.",
        hirers: "AI product companies, research labs and startups",
      },
      {
        role: "Computer Vision Engineer",
        work: "Builds image and video analysis systems for inspection, retail or surveillance.",
        hirers: "Manufacturing, retail-tech and security companies",
      },
      {
        role: "NLP Engineer",
        work: "Develops language models and text-processing pipelines.",
        hirers: "Chatbot, edtech and enterprise software firms",
      },
      {
        role: "AI Research Associate",
        work: "Reproduces papers, runs experiments and prototypes new models.",
        hirers: "Universities, R&D teams and AI startups",
      },
    ],
    whyNow: [
      "Transformers and diffusion models now power search, assistants, design tools and industrial inspection, and teams need engineers who understand them.",
      "Pretrained models make advanced projects reachable for individual learners, so a strong portfolio can stand out in hiring.",
    ],
    faqs: [
      {
        q: "What should I know before joining?",
        a: "You should be comfortable with Python and understand basic machine learning ideas such as training and testing. If unsure, our Machine Learning program is a good first step.",
      },
      {
        q: "Do I need my own GPU?",
        a: "No. Labs use cloud notebooks such as Google Colab, so a standard laptop is enough.",
      },
      {
        q: "Do you teach PyTorch or TensorFlow?",
        a: "The course is PyTorch-first, with Keras and TensorFlow covered for comparison since both appear in job requirements.",
      },
      {
        q: "Is this suitable for freshers?",
        a: "Yes, for freshers who already know Python and basic ML. It is an advanced course, so we recommend prior practice.",
      },
    ],
    related: ["artificial-intelligence", "machine-learning", "data-science"],
  },
  {
    slug: "data-science",
    title: "Data Science Course",
    navLabel: "Data Science",
    group: "ai-data",
    icon: "ChartLine",
    tagline:
      "Learn Python, statistics, SQL, machine learning and storytelling with data through live projects and placement assistance.",
    level: "Intermediate",
    duration: "5–6 Months",
    eligibility: "12th pass or above; graduates from any stream can join.",
    overview: [
      "Data science combines programming, statistics and business thinking. This course covers the full workflow: collecting data with SQL, analysing it in Python, modelling it, and presenting the result to decision-makers.",
      "You will work on live projects with mentors in classroom or live online batches, using datasets modelled on retail, exports, education and finance. Certification and placement assistance support your job search.",
    ],
    gains: [
      "The complete data science workflow, from raw data to a presented insight",
      "Practical SQL, Python, statistics and machine learning skills",
      "Live projects and a GitHub portfolio reviewed by mentors",
      "TechCADD certification on completion",
      "Placement assistance with resume support and mock interviews",
    ],
    syllabus: [
      {
        title: "Python Programming for Data",
        summary: "Learn Python with a focus on data manipulation and automation.",
        topics: [
          "Core syntax, functions and modules",
          "Data structures and file handling",
          "NumPy arrays",
          "Pandas DataFrames",
          "Jupyter and Git basics",
        ],
      },
      {
        title: "SQL and Databases",
        summary: "Query and combine business data stored in relational databases.",
        topics: [
          "SELECT, WHERE, GROUP BY and ORDER BY",
          "Joins across multiple tables",
          "Subqueries and CTEs",
          "Window functions",
          "Connecting SQL to Python",
        ],
      },
      {
        title: "Statistics and Probability",
        summary: "Use statistics to draw reliable conclusions from data.",
        topics: [
          "Descriptive statistics and distributions",
          "Probability and sampling",
          "Confidence intervals",
          "Hypothesis testing and A/B testing",
          "Correlation and regression basics",
        ],
      },
      {
        title: "Exploratory Data Analysis and Visualisation",
        summary: "Clean data and find patterns before modelling.",
        topics: [
          "Data cleaning and validation",
          "Univariate and multivariate analysis",
          "Matplotlib, Seaborn and Plotly",
          "Feature engineering",
          "Communicating findings with charts",
        ],
      },
      {
        title: "Machine Learning",
        summary: "Build and evaluate predictive models on structured data.",
        topics: [
          "Regression and classification",
          "Tree-based models and ensembles",
          "Clustering and PCA",
          "Cross-validation and tuning",
          "Model evaluation metrics",
        ],
      },
      {
        title: "Text Data and Time Series",
        summary: "Extend your toolkit to two common real-world data types.",
        topics: [
          "Text cleaning and TF-IDF",
          "Sentiment analysis basics",
          "Time-series trend and seasonality",
          "ARIMA and Prophet forecasting",
          "Evaluating forecasts",
        ],
      },
      {
        title: "Big Data and Deployment Basics",
        summary: "Understand how data science work scales and reaches users.",
        topics: [
          "Introduction to PySpark",
          "Cloud notebooks and storage concepts",
          "Building a dashboard with Streamlit",
          "Model serving basics with FastAPI",
          "Data ethics and privacy",
        ],
      },
      {
        title: "Capstone Project and Interview Preparation",
        summary: "Complete a business-style project and prepare for data science interviews.",
        topics: [
          "Framing a business question",
          "End-to-end analysis and model",
          "Presenting insights to stakeholders",
          "SQL, Python and statistics interview practice",
          "Resume and portfolio review",
        ],
      },
    ],
    tools: [
      "Python",
      "Pandas",
      "NumPy",
      "scikit-learn",
      "SQL",
      "PostgreSQL",
      "Matplotlib and Seaborn",
      "Plotly",
      "PySpark",
      "Streamlit",
      "Jupyter",
      "Git and GitHub",
    ],
    projects: [
      {
        title: "Retail Sales Analysis",
        text: "Analyse multi-store sales data with SQL and Python and recommend stock and pricing actions.",
        tags: ["SQL", "EDA"],
      },
      {
        title: "Student Performance Predictor",
        text: "Predict exam outcomes from attendance and assessment data and identify students who need support.",
        tags: ["Classification", "scikit-learn"],
      },
      {
        title: "Export Order Forecasting",
        text: "Forecast monthly orders for an exporter using time-series techniques and present the plan.",
        tags: ["Time Series", "Prophet"],
      },
      {
        title: "Customer Review Insights",
        text: "Extract sentiment and recurring themes from customer reviews to guide product improvements.",
        tags: ["NLP", "Text Mining"],
      },
      {
        title: "A/B Test Evaluation",
        text: "Design and evaluate an A/B test for a website change using proper statistical testing.",
        tags: ["Statistics", "Hypothesis Testing"],
      },
      {
        title: "Interactive Analytics App",
        text: "Publish a Streamlit app that lets users filter data and see model predictions.",
        tags: ["Streamlit", "Deployment"],
      },
    ],
    careers: [
      {
        role: "Data Scientist (Junior)",
        work: "Builds models and analyses to answer business questions.",
        hirers: "Analytics firms, product companies and consulting teams",
      },
      {
        role: "Data Analyst",
        work: "Queries, cleans and visualises data to support decisions.",
        hirers: "Retail, banking, manufacturing and IT services companies",
      },
      {
        role: "Machine Learning Associate",
        work: "Supports model development and evaluation on structured data.",
        hirers: "Fintech, insurance and e-commerce businesses",
      },
      {
        role: "Business Intelligence Analyst",
        work: "Turns data into dashboards and regular reports for managers.",
        hirers: "Enterprises, agencies and government-linked projects",
      },
      {
        role: "Research Analyst (Data)",
        work: "Runs statistical studies and summarises evidence for clients.",
        hirers: "Market research, education and healthcare organisations",
      },
    ],
    whyNow: [
      "Businesses across Punjab, Chandigarh and Delhi NCR now collect more data than they can use, and they need people who can turn it into decisions.",
      "SQL, Python and statistics remain the core requirements for data roles, and they are also the foundation for moving into AI later.",
    ],
    faqs: [
      {
        q: "Do I need a maths or IT degree?",
        a: "No. Graduates from any stream can join. Required statistics and Python are taught from the basics.",
      },
      {
        q: "What is the difference between Data Science and Data Analytics?",
        a: "Data Analytics focuses on SQL, Excel, Power BI and reporting. Data Science adds machine learning and forecasting on top of those skills.",
      },
      {
        q: "Will I work on real datasets?",
        a: "Yes. Projects use realistic datasets from retail, education, exports and finance, and are reviewed by mentors.",
      },
      {
        q: "Can I study online?",
        a: "Yes. Live online batches follow the same syllabus as classroom batches.",
      },
      {
        q: "Is placement assistance provided?",
        a: "Yes. It includes resume and portfolio review, mock interviews and introductions to hiring partners, depending on your performance and openings.",
      },
    ],
    related: ["machine-learning", "data-analytics", "python"],
  },
  {
    slug: "data-analytics",
    title: "Data Analytics Course",
    navLabel: "Data Analytics",
    group: "ai-data",
    icon: "ChartBar",
    tagline:
      "Learn Excel, SQL, Python and Power BI to clean data, find insights and build dashboards that businesses use every day.",
    level: "Beginner",
    duration: "3–4 Months",
    eligibility: "12th pass or above; no coding experience needed.",
    overview: [
      "This course trains you to be the person who answers business questions with data. You will learn Excel, SQL, Python and a BI tool, then combine them in reporting projects that mirror day-to-day analyst work.",
      "Classes are practical and project-led, in classroom or live online batches. You finish with a portfolio, certification and placement assistance for analyst roles across industries.",
    ],
    gains: [
      "Job-relevant skills in Excel, SQL, Python and Power BI",
      "Ability to clean data, analyse trends and present clear dashboards",
      "Live projects based on sales, HR, finance and operations data",
      "TechCADD certification and mentor feedback on your portfolio",
      "Placement assistance and mock interviews for analyst roles",
    ],
    syllabus: [
      {
        title: "Advanced Excel for Analysis",
        summary: "Use Excel confidently for cleaning, calculation and quick reporting.",
        topics: [
          "Formulas, XLOOKUP and conditional logic",
          "Data cleaning with Text and Flash Fill tools",
          "PivotTables and PivotCharts",
          "Power Query for repeatable transformations",
          "Dashboard basics with slicers",
        ],
      },
      {
        title: "SQL for Analysts",
        summary: "Retrieve and summarise data directly from databases.",
        topics: [
          "SELECT, filtering and sorting",
          "Aggregations and GROUP BY",
          "Joins and set operations",
          "Subqueries and CTEs",
          "Window functions for ranking and running totals",
        ],
      },
      {
        title: "Statistics for Analysts",
        summary: "Apply practical statistics to interpret numbers correctly.",
        topics: [
          "Mean, median, variance and standard deviation",
          "Distributions and outliers",
          "Correlation and trend analysis",
          "Sampling and confidence intervals",
          "Basics of A/B testing",
        ],
      },
      {
        title: "Python for Data Analysis",
        summary: "Automate analysis and handle larger datasets with Python.",
        topics: [
          "Python basics for analysts",
          "Pandas for cleaning and grouping",
          "Merging and reshaping datasets",
          "Visualisation with Matplotlib and Seaborn",
          "Reading Excel, CSV and SQL data",
        ],
      },
      {
        title: "Data Visualisation with Power BI",
        summary: "Design interactive dashboards that decision-makers can use without help.",
        topics: [
          "Connecting and transforming data",
          "Star-schema data modelling",
          "Core DAX measures",
          "Visual design and chart selection",
          "Publishing and sharing reports",
        ],
      },
      {
        title: "Business Analytics Cases",
        summary: "Practise turning data into recommendations across business functions.",
        topics: [
          "Sales and marketing analytics",
          "Customer retention and cohort analysis",
          "HR and finance reporting",
          "KPI design and definition",
          "Data storytelling and presentation",
        ],
      },
      {
        title: "Capstone Project and Interview Preparation",
        summary: "Complete an end-to-end analytics project and prepare for analyst interviews.",
        topics: [
          "Scoping a business problem",
          "Data cleaning, analysis and dashboard",
          "Presenting findings to a panel",
          "SQL and Excel interview practice",
          "Resume and LinkedIn review",
        ],
      },
    ],
    tools: [
      "Microsoft Excel",
      "Power Query",
      "SQL",
      "MySQL",
      "Python",
      "Pandas",
      "Matplotlib and Seaborn",
      "Power BI",
      "Google Looker Studio",
      "Jupyter",
    ],
    projects: [
      {
        title: "Sales Performance Dashboard",
        text: "Build a Power BI dashboard tracking revenue, region and product performance for a multi-branch business.",
        tags: ["Power BI", "DAX"],
      },
      {
        title: "Customer Cohort Analysis",
        text: "Use SQL and Python to measure repeat purchase behaviour and identify loyal segments.",
        tags: ["SQL", "Python"],
      },
      {
        title: "HR Attrition Report",
        text: "Analyse employee data to find patterns behind attrition and recommend retention steps.",
        tags: ["Excel", "Statistics"],
      },
      {
        title: "Marketing Campaign Analysis",
        text: "Compare channels by cost per lead and conversion to suggest budget allocation.",
        tags: ["Excel", "Pandas"],
      },
      {
        title: "Inventory and Supply Tracker",
        text: "Monitor stock levels and reorder points for a manufacturing or distribution business.",
        tags: ["SQL", "Dashboards"],
      },
      {
        title: "Automated Weekly Report",
        text: "Automate cleaning and summarising a weekly report with Power Query and Python.",
        tags: ["Automation", "Power Query"],
      },
    ],
    careers: [
      {
        role: "Data Analyst",
        work: "Cleans data, runs analysis and reports insights to teams.",
        hirers: "IT services, retail, banking and manufacturing firms",
      },
      {
        role: "Business Analyst",
        work: "Connects business needs to data and recommends process improvements.",
        hirers: "Consultancies, product companies and enterprises",
      },
      {
        role: "MIS Executive",
        work: "Maintains recurring reports and dashboards for management.",
        hirers: "Corporate offices, logistics and education organisations",
      },
      {
        role: "BI Developer (Junior)",
        work: "Builds dashboards and data models for reporting.",
        hirers: "Analytics teams and software companies",
      },
      {
        role: "Marketing Analyst",
        work: "Measures campaign performance and customer behaviour.",
        hirers: "Digital agencies and e-commerce brands",
      },
    ],
    whyNow: [
      "Almost every department now expects data-backed decisions, which keeps analyst skills in demand in offices from Chandigarh to Delhi NCR.",
      "Excel, SQL and Power BI are the most common requirements in analyst job postings, and this course covers all three with practice.",
    ],
    faqs: [
      {
        q: "Can I join without any coding experience?",
        a: "Yes. The course begins with Excel and builds up to SQL and Python step by step.",
      },
      {
        q: "Do you teach Power BI in this course?",
        a: "Yes. Power BI is a full module. If you want deeper coverage only on Power BI, we also offer a dedicated Power BI course.",
      },
      {
        q: "Is this course suitable for working professionals?",
        a: "Yes. Weekend and evening batches, plus live online options, suit people who are already working.",
      },
      {
        q: "What projects will I complete?",
        a: "You will build dashboards and analyses for sales, HR, marketing and operations use cases, and a final capstone.",
      },
    ],
    related: ["power-bi", "data-science", "tableau"],
  },
  {
    slug: "power-bi",
    title: "Power BI Course",
    navLabel: "Power BI",
    group: "ai-data",
    icon: "Layers",
    tagline:
      "Connect, model and visualise business data in Microsoft Power BI, and publish interactive dashboards with DAX measures.",
    level: "Beginner",
    duration: "1–2 Months",
    eligibility: "12th pass or above; basic Excel knowledge is helpful.",
    overview: [
      "Power BI is one of the most widely used business intelligence tools. This course shows you how to load data from many sources, model it properly, write DAX and design dashboards that managers actually read.",
      "The training is project-based in classroom or live online batches, with mentors reviewing your reports. You leave with a portfolio dashboard, certification and placement assistance.",
    ],
    gains: [
      "Ability to build a complete report from raw data in Power BI Desktop",
      "Solid grasp of data modelling and essential DAX",
      "Publishing, sharing and refresh in the Power BI Service",
      "Live projects that go straight into your portfolio",
      "TechCADD certification with interview preparation support",
    ],
    syllabus: [
      {
        title: "Introduction to Power BI and BI Concepts",
        summary: "Understand the Power BI ecosystem and how reports are planned.",
        topics: [
          "Power BI Desktop, Service and Mobile",
          "BI concepts and report planning",
          "Importing data from Excel, CSV and web",
          "Report canvas, pages and visuals",
          "Saving and file formats",
        ],
      },
      {
        title: "Data Preparation with Power Query",
        summary: "Clean and shape data reliably before it reaches the model.",
        topics: [
          "Power Query Editor interface",
          "Removing errors, duplicates and nulls",
          "Splitting, merging and pivoting columns",
          "Appending and merging queries",
          "Parameters and applied steps",
        ],
      },
      {
        title: "Data Modelling",
        summary: "Structure tables so calculations and filters behave correctly.",
        topics: [
          "Fact and dimension tables",
          "Star schema design",
          "Relationships, cardinality and filter direction",
          "Date tables and time intelligence prerequisites",
          "Hierarchies and model view",
        ],
      },
      {
        title: "DAX Fundamentals",
        summary: "Write measures and calculated columns that answer real business questions.",
        topics: [
          "Calculated columns versus measures",
          "SUM, AVERAGE, DISTINCTCOUNT and DIVIDE",
          "CALCULATE and filter context",
          "Time intelligence: YTD, previous year, moving average",
          "Variables and IF or SWITCH logic",
        ],
      },
      {
        title: "Visualisation and Report Design",
        summary: "Choose the right visuals and lay out reports for clarity.",
        topics: [
          "Bar, line, map, matrix and card visuals",
          "Slicers, filters and drill-through",
          "Bookmarks and navigation buttons",
          "Conditional formatting and themes",
          "Tooltips and accessibility",
        ],
      },
      {
        title: "Power BI Service and Sharing",
        summary: "Publish reports and keep them refreshed and secure.",
        topics: [
          "Publishing to workspaces",
          "Dashboards versus reports",
          "Scheduled refresh and gateways",
          "Row-level security basics",
          "Apps and sharing options",
        ],
      },
      {
        title: "Capstone Dashboard and Interview Preparation",
        summary: "Deliver a business dashboard and prepare for Power BI interviews.",
        topics: [
          "Requirement gathering and wireframe",
          "End-to-end report build",
          "Performance and best practices",
          "Power BI and DAX interview questions",
          "Portfolio and resume guidance",
        ],
      },
    ],
    tools: [
      "Power BI Desktop",
      "Power BI Service",
      "Power Query",
      "DAX",
      "Microsoft Excel",
      "SQL Server",
      "SharePoint",
      "DAX Studio",
    ],
    projects: [
      {
        title: "Sales and Revenue Dashboard",
        text: "Track revenue, margin and region-wise performance with year-on-year comparison.",
        tags: ["DAX", "Time Intelligence"],
      },
      {
        title: "HR Analytics Report",
        text: "Visualise headcount, attrition and hiring trends with drill-through pages.",
        tags: ["Power Query", "Visuals"],
      },
      {
        title: "Finance and Expense Tracker",
        text: "Build a budget-versus-actual report with conditional formatting and alerts.",
        tags: ["Modelling", "DAX"],
      },
      {
        title: "Retail Store Comparison",
        text: "Compare stores across cities such as Ludhiana, Jalandhar and Chandigarh on sales and footfall.",
        tags: ["Star Schema", "Maps"],
      },
      {
        title: "Education Results Dashboard",
        text: "Analyse student performance by class and subject with interactive slicers.",
        tags: ["Slicers", "Bookmarks"],
      },
      {
        title: "Secure Shared Report",
        text: "Publish a report with row-level security so each regional manager sees only their data.",
        tags: ["Power BI Service", "RLS"],
      },
    ],
    careers: [
      {
        role: "Power BI Developer",
        work: "Builds data models, DAX measures and dashboards for business teams.",
        hirers: "IT services, consulting firms and enterprises",
      },
      {
        role: "BI Analyst",
        work: "Turns business requirements into reports and insights.",
        hirers: "Retail, banking, logistics and manufacturing companies",
      },
      {
        role: "Data Analyst",
        work: "Cleans and analyses data and presents it through dashboards.",
        hirers: "Analytics firms and corporate offices",
      },
      {
        role: "MIS and Reporting Executive",
        work: "Automates recurring reports for management review.",
        hirers: "Finance, HR and operations departments",
      },
    ],
    whyNow: [
      "Power BI integrates with Excel, Teams and Microsoft 365, which many North Indian companies already use, so adoption keeps growing.",
      "A short, focused course lets you add a job-ready reporting skill quickly, whether you are a fresher or already working.",
    ],
    faqs: [
      {
        q: "Do I need to know Excel first?",
        a: "Basic Excel helps but is not mandatory. We revise the essentials at the start.",
      },
      {
        q: "Will I learn DAX?",
        a: "Yes. DAX is a core module, including CALCULATE, filter context and time intelligence.",
      },
      {
        q: "Does the course cover the Power BI Service?",
        a: "Yes. You will publish reports, set refresh, and apply row-level security basics.",
      },
      {
        q: "Can I take this course online?",
        a: "Yes. Live online batches run with the same content and project reviews.",
      },
      {
        q: "Is Power BI a good next step after Data Analytics?",
        a: "It is a strong choice. The Data Analytics course includes a Power BI module, and this dedicated course goes deeper into modelling and DAX.",
      },
    ],
    related: ["data-analytics", "tableau", "data-science"],
  },
  {
    slug: "tableau",
    title: "Tableau Course",
    navLabel: "Tableau",
    group: "ai-data",
    icon: "Eye",
    tagline:
      "Build interactive visualisations, calculated fields and story-driven dashboards in Tableau, then publish and share them with confidence.",
    level: "Beginner",
    duration: "1–2 Months",
    eligibility: "12th pass or above; basic Excel knowledge is helpful.",
    overview: [
      "Tableau is a leading data visualisation platform known for fast exploration and polished dashboards. This course teaches you to connect data, build charts, write calculations and tell clear stories with data.",
      "Sessions are practical, with mentor feedback on every project in classroom or live online batches. You finish with a Tableau Public portfolio, certification and placement assistance.",
    ],
    gains: [
      "Confidence building charts, dashboards and stories in Tableau Desktop",
      "Skills in calculated fields, LOD expressions and parameters",
      "A public portfolio of dashboards on Tableau Public",
      "TechCADD certification on completion",
      "Interview preparation and placement assistance for BI roles",
    ],
    syllabus: [
      {
        title: "Getting Started with Tableau",
        summary: "Learn the interface and connect to your first data sources.",
        topics: [
          "Tableau Desktop, Public and Cloud overview",
          "Connecting to Excel, CSV and databases",
          "Dimensions, measures and data types",
          "Live connection versus extract",
          "Sheets, dashboards and stories",
        ],
      },
      {
        title: "Data Preparation and Joins",
        summary: "Combine and shape data so it is ready to visualise.",
        topics: [
          "Joins, unions and relationships",
          "Data blending",
          "Tableau Prep basics",
          "Pivoting and cleaning fields",
          "Hierarchies, groups and sets",
        ],
      },
      {
        title: "Core Charts and Visual Analysis",
        summary: "Choose the right chart and build it quickly.",
        topics: [
          "Bar, line, area and pie charts",
          "Scatter plots, histograms and box plots",
          "Maps and geographic data",
          "Heat maps and treemaps",
          "Marks card, filters and sorting",
        ],
      },
      {
        title: "Calculations and Parameters",
        summary: "Add analytical depth with calculated fields and interactivity.",
        topics: [
          "Calculated fields and logical functions",
          "Aggregations and date functions",
          "Level of Detail (LOD) expressions",
          "Table calculations",
          "Parameters and dynamic measures",
        ],
      },
      {
        title: "Advanced Analytics",
        summary: "Use built-in analytics to reveal trends and outliers.",
        topics: [
          "Trend lines and forecasting",
          "Reference lines and bands",
          "Clustering",
          "Dual-axis and combined charts",
          "Top N and ranking analysis",
        ],
      },
      {
        title: "Dashboards and Storytelling",
        summary: "Design dashboards that guide viewers to the right conclusion.",
        topics: [
          "Layout containers and responsive sizing",
          "Dashboard actions: filter, highlight, URL",
          "Story points",
          "Colour, typography and accessibility",
          "Performance optimisation",
        ],
      },
      {
        title: "Capstone Dashboard and Interview Preparation",
        summary: "Publish a full dashboard and prepare for Tableau interview questions.",
        topics: [
          "Defining the audience and KPIs",
          "End-to-end dashboard build",
          "Publishing to Tableau Public and Cloud",
          "Tableau interview questions",
          "Portfolio and resume guidance",
        ],
      },
    ],
    tools: [
      "Tableau Desktop",
      "Tableau Public",
      "Tableau Prep Builder",
      "Tableau Cloud",
      "Microsoft Excel",
      "SQL",
      "Google Sheets",
      "CSV and JSON data",
    ],
    projects: [
      {
        title: "Superstore Sales Dashboard",
        text: "Analyse sales, profit and discount patterns across categories and regions with interactive filters.",
        tags: ["Dashboards", "Filters"],
      },
      {
        title: "Geographic Performance Map",
        text: "Map branch or dealer performance across Punjab, Haryana and Himachal using filled maps.",
        tags: ["Maps", "Geo Analysis"],
      },
      {
        title: "Customer Profitability Analysis",
        text: "Use LOD expressions to compare customer value and identify low-margin accounts.",
        tags: ["LOD", "Calculations"],
      },
      {
        title: "Dynamic KPI Scorecard",
        text: "Let users switch measures and time periods with parameters on a single dashboard.",
        tags: ["Parameters", "KPIs"],
      },
      {
        title: "Data Story on Public Data",
        text: "Build a story-point narrative from an open dataset such as education or agriculture statistics.",
        tags: ["Story Points", "Tableau Public"],
      },
      {
        title: "Forecast and Trend Report",
        text: "Show trend lines, forecasts and outliers for monthly demand.",
        tags: ["Forecasting", "Analytics"],
      },
    ],
    careers: [
      {
        role: "Tableau Developer",
        work: "Designs dashboards, calculations and data sources for business teams.",
        hirers: "IT services, consulting and analytics companies",
      },
      {
        role: "Data Visualisation Analyst",
        work: "Turns datasets into clear visual reports and stories.",
        hirers: "Media, market research and corporate teams",
      },
      {
        role: "BI Analyst",
        work: "Gathers requirements and delivers dashboards for decision-making.",
        hirers: "Banks, retail chains and manufacturing firms",
      },
      {
        role: "Reporting Analyst",
        work: "Maintains recurring dashboards and KPI reports.",
        hirers: "Operations, finance and marketing departments",
      },
    ],
    whyNow: [
      "Tableau remains a standard requirement in many analytics roles, especially in larger companies and consulting teams.",
      "Visual storytelling is valued across functions, so a short course adds a skill that complements Excel, SQL or Python.",
    ],
    faqs: [
      {
        q: "Do I need coding or SQL knowledge?",
        a: "No. Tableau is largely visual, though basic SQL knowledge is useful. We cover the essentials you need.",
      },
      {
        q: "Should I learn Tableau or Power BI?",
        a: "Both are widely used. Many learners take one and pick up the other quickly, and we offer both courses.",
      },
      {
        q: "Which Tableau version will I use?",
        a: "You will work with Tableau Desktop and Tableau Public, and publish your portfolio work on Tableau Public.",
      },
      {
        q: "Will the course include LOD expressions?",
        a: "Yes. LOD expressions, table calculations and parameters are part of the calculations module.",
      },
    ],
    related: ["power-bi", "data-analytics", "data-science"],
  },
];
