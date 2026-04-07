# 🚀 AI Story Suite (User Story Generator + Evaluation)

A complete **AI-powered full-stack platform** that helps you **Generate** and **Evaluate User Stories** efficiently using modern technologies and intelligent APIs.

This project is divided into two major modules:

* 🔹 **User Story Generator (USGenerate)**
* 🔹 **User Story Evaluation**

---

# 🌐 Live Navigation

### 🔹 User Story Generator

👉 GitHub: https://github.com/Sonukumar-lab/User_Story_Generator

### 🔹 User Story Evaluation

👉 GitHub: https://github.com/Sonukumar-lab/User_Stories_Evaluation

---

# 🧠 Project Overview

This platform is designed to **simplify and streamline the software development process** by focusing on user stories.

## Key Features

✔ **AI-Powered User Story Generation**  
Automatically generate well-structured user stories using artificial intelligence.

✔ **ML-Based Evaluation**  
Evaluate user stories with machine learning metrics to ensure quality and completeness.

✔ **Requirement Quality Improvement**  
Suggest improvements to make software requirements clearer, more actionable, and testable.

✔ **Task Automation**  
Reduce repetitive work by automating parts of the user story creation and evaluation workflow.

## Workflow

The platform combines **AI generation** and **ML evaluation** into a seamless, end-to-end workflow for better efficiency and higher-quality requirements.

---

# ⚙️ Key Features

## 🔹 User Story Generator

* Select domain (Banking, Healthcare, E-commerce, etc.)
* AI-generated user stories
* Acceptance criteria included
* Controlled combinations (no repetition)
* Excel export functionality
* Clean UI with navigation support

---

## 🔹 User Story Evaluation

* Upload Excel file for evaluation
* AI/ML-based evaluation system
* Metrics calculation:

  * Accuracy
  * Precision
  * Recall
  * F1 Score
* Result table with comparison:

  * Actual vs Predicted
* Graph-based visualization

---

# 🏗️ Project Architecture

```
Frontend (HTML, CSS, JavaScript)
        ↓
REST API (Spring Boot Backend)
        ↓
AI Integration (Google Gemini API)
        ↓
Processing & Evaluation Logic
        ↓
Excel File Generation / Metrics Output
```

---

# 📁 Project Structure

## 🔹 User Story Generator Structure

```
User_Story_Generator/
project-root/
│
├── backend/
│   ├── controller/
│   ├── service/
│   ├── model/
│   ├── repository/
│   ├── util/
│   ├── config/
│   └── UsgeneratorApplication.java
│
├── frontend/
│   ├── index.html
│   ├── css/
│   ├── js/
│   └── assets/
│
└── README.md
```

---

## 🔹 User Story Evaluation Structure

```
User_Stories_Evaluation/
├── backend/
│   ├── controller/
│   ├── service/
│   ├── model/
│   ├── config/
│   ├── util/
│   ├── exception/
│   └── resources/
│
└── frontend/
    ├── css/
    ├── js/
    ├── assets/
    └── (root HTML files)
```

---

# 🔄 Workflow

1. User opens Home Page
2. Clicks on:

   * **Generate** → Opens Generator Project
   * **Evaluation** → Opens Evaluation Project
3. Generate user stories
4. Download Excel file
5. Upload file in Evaluation module
6. Get metrics & results

---

# 🛠️ Tech Stack

### Frontend

* HTML5
* CSS3
* JavaScript (Vanilla)

### Backend

* Spring Boot (Java)

### AI Integration

* Google Gemini API

### Other

* Excel Processing (Apache POI)
* REST APIs

---

# 🎯 Purpose of the Project

* Improve requirement engineering process
* Automate user story creation
* Provide measurable evaluation metrics
* Help developers & analysts save time

---

# 💡 Future Enhancements

* Dashboard integration (Single UI for both modules)
* Authentication system
* Real-time analytics
* Graphical dashboards
* AI improvement suggestions

---

# 👨‍💻 Author

**Sonu Kumar**
GitHub: https://github.com/Sonukumar-lab

---

# ⭐ Final Note

This project represents a **complete AI-driven product workflow**:

👉 Generate → Export → Evaluate → Improve

A perfect combination of **AI + ML + Full Stack Development** 🚀

---
