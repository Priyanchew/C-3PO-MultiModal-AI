# 🤖 C-3PO MultiModal AI

C-3PO (Compact Plug-and-Play Proxy Optimization) is a **Perplexity-like multi-modal AI assistant** that integrates search, chat, image generation, document parsing, and various Hugging Face models—all in one place.

This isn't just an AI agent. It's your next-gen **knowledge navigator**—capable of **retrieving**, **creating**, and **conversing**, across text, image, audio, and documents.

---

## 🚀 Features

### 🧠 AI Assistant (Perplexity Style)
- Conversational assistant with access to **live search**
- Generates cited, grounded responses
- Asks clarifying questions and refines search dynamically

### 🔍 Retrieval-Augmented Generation (RAG)
- Uses **SearxNG** for web search
- Intelligent document chunking & semantic similarity search
- Integrated with **LangChain**, **ChromaDB**, and other tools

### 🧾 Document Understanding
- Drag-and-drop PDFs, URLs, scanned documents
- Parses and summarizes documents intelligently
- Supports chunking, token counting, and visual previews

### 🎨 Hugging Face Integration
- Text-to-Image generation with models like **Stable Diffusion**
- Text classification, sentiment, summarization, translation & more
- Powered by Transformers with plug-and-play model support

### 🧠 Whisper + Audio/Video Input
- Upload or record audio/video
- Transcribes and generates Q&A from audio content

### 🖼 Visual Chat
- Upload images, ask questions about them
- Visual grounding with captioning and VQA (Visual Question Answering)

---

## 🛠 Tech Stack

- **Frontend**: React, TypeScript, TailwindCSS
- **Backend**: Node.js, Express, TypeScript
- **AI Models**: HuggingFace Transformers, Stable Diffusion, Whisper
- **Search**: SearxNG
- **Orchestration**: LangChain, LlamaIndex
- **Database**: ChromaDB / Local JSON for vector search
- **Infra**: Docker, NGINX, Python Microservices

---

## 🧪 Demo Use Cases

- 🤖 Ask: *“Summarize the latest paper on Quantum Cryptography and generate an image inspired by its key themes.”*
- 📄 Upload a research PDF, and get: *“Slide-ready summaries + visuals.”*
- 🖼 Upload an image, and ask: *“What's happening here?”*
- 🔗 Paste a URL and ask: *“Summarize this page and translate it into French.”*

---

## 📂 Project Structure

```
C-3PO-MultiModal-AI/
├── src/
│   ├── agents/              # RAG + LLM orchestration
│   ├── huggingface/         # Image & NLP model integrations
│   ├── search/              # SearxNG controller
│   └── ui/                  # React frontend
├── searxng/                 # Search engine service
├── whisper/                 # Audio processing microservice
├── docker-compose.yml       # Spin it all up
```

---

## 🧰 Getting Started

### 🔧 Prerequisites
- Node.js, Python 3.9+, Docker

### ⚠️ Requirement: SearxNG Must Be Running

To enable live web search functionality, you **must have a SearxNG instance running** either:
- Locally using `docker-compose` in the `searxng/` directory
- Or connect to an existing remote instance by setting the `SEARXNG_HOST` environment variable
  
### 🐳 Spin it up with Docker

```bash
git clone https://github.com/Priyanchew/C-3PO-MultiModal-AI.git
cd C-3PO-MultiModal-AI
docker-compose up --build
```

> Want GPU support? Use the `docker-compose.gpu.yml` variant and enable CUDA in Hugging Face backends.

---

## 🛣 Roadmap

- [x] HuggingFace Integration
- [x] Web search (SearxNG)
- [x] PDF Summarization
- [x] Image Chat
- [ ] Voice Assistant
- [ ] GPT-4 / OpenRouter Multi-model integration
- [ ] Plugin system for 3rd-party tools

---

## 🧠 Inspiration

Inspired by **Perplexity**, **You.com**, and **ChatGPT**—but open-source, hackable, and designed for your custom workflows.

---

## 📜 License

MIT License

---
