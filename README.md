# WebGPU LLM Examples with wllama

Uses wllama, WebGPU and llama.cpp for in-browser inference.

⚠️ experimental, demo, proof of concept, no support, not for production

## Setup

    bun install
    # or npm install

    cd models

    wget https://huggingface.co/prism-ml/Bonsai-8B-gguf/resolve/main/Bonsai-8B-Q1_0.gguf

    wget https://huggingface.co/tencent/HY-MT1.5-1.8B-GGUF/resolve/main/HY-MT1.5-1.8B-Q8_0.gguf

    wget https://huggingface.co/ggml-org/GLM-OCR-GGUF/resolve/main/GLM-OCR-Q8_0.gguf
    wget https://huggingface.co/ggml-org/GLM-OCR-GGUF/resolve/main/mmproj-GLM-OCR-Q8_0.gguf

    wget https://huggingface.co/ggml-org/Qwen3-ASR-1.7B-GGUF/resolve/main/Qwen3-ASR-1.7B-Q8_0.gguf
    wget https://huggingface.co/ggml-org/Qwen3-ASR-1.7B-GGUF/resolve/main/mmproj-Qwen3-ASR-1.7B-Q8_0.gguf

    wget https://huggingface.co/nomic-ai/nomic-embed-text-v2-moe-GGUF/resolve/main/nomic-embed-text-v2-moe.Q4_K_M.gguf
    wget https://huggingface.co/MesTruck/STS-multilingual-mpnet-base-v2-GGUF/resolve/main/sts-multilingual-mpnet-base-v2.Q4_K_M.gguf

Point your local webserver to the project root.

Launch your web browser:

- chromium --enable-unsafe-webgpu --enable-features=Vulkan
- firefox # set dom.webgpu.enabled to true in about:config
- firefox # set javascript.options.wasm_js_promise_integration to true in about:config

## URLs

- http://localhost/wllama_bonsai.html
- http://localhost/wllama_translate.html
- http://localhost/wllama_ocr.html
- http://localhost/wllama_asr.html
- http://localhost/wllama_embeddings.html
- http://localhost/wllama_embeddings2.html

## Links

- https://github.com/ngxson/wllama
- https://huggingface.co/prism-ml/Bonsai-8B-gguf
- https://huggingface.co/tencent/HY-MT1.5-1.8B-GGUF
- https://huggingface.co/zai-org/GLM-OCR
- https://huggingface.co/Qwen/Qwen3-ASR-1.7B
- https://huggingface.co/nomic-ai/nomic-embed-text-v2-moe-GGUF
- https://huggingface.co/MesTruck/STS-multilingual-mpnet-base-v2-GGUF
