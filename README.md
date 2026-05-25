# WebGPU LLM Examples with wllama

Uses wllama, WebGPU and llama.cpp for in-browser inference.

⚠️ experimental, demo, proof of concept, no support, not for production

## Setup

    bun install
    # or npm install

    cd models

    wget https://huggingface.co/prism-ml/Bonsai-4B-gguf/resolve/main/Bonsai-4B-Q1_0.gguf
    wget https://huggingface.co/prism-ml/Bonsai-8B-gguf/resolve/main/Bonsai-8B-Q1_0.gguf

    wget https://huggingface.co/tencent/HY-MT1.5-1.8B-GGUF/resolve/main/HY-MT1.5-1.8B-Q8_0.gguf

    wget https://huggingface.co/ggml-org/GLM-OCR-GGUF/resolve/main/GLM-OCR-Q8_0.gguf
    wget https://huggingface.co/ggml-org/GLM-OCR-GGUF/resolve/main/mmproj-GLM-OCR-Q8_0.gguf

    wget https://huggingface.co/staghado/LightOnOCR-2-1B-Q4_K_M-GGUF/resolve/main/LightOnOCR-2-1B-Q4_K_M.gguf
    wget https://huggingface.co/staghado/LightOnOCR-2-1B-Q4_K_M-GGUF/resolve/main/mmproj-LightOnOCR-2-1B-Q8_0.gguf

    wget https://huggingface.co/ggml-org/Qwen3-ASR-1.7B-GGUF/resolve/main/Qwen3-ASR-1.7B-Q8_0.gguf
    wget https://huggingface.co/ggml-org/Qwen3-ASR-1.7B-GGUF/resolve/main/mmproj-Qwen3-ASR-1.7B-Q8_0.gguf

    wget https://huggingface.co/nomic-ai/nomic-embed-text-v2-moe-GGUF/resolve/main/nomic-embed-text-v2-moe.Q4_K_M.gguf
    wget https://huggingface.co/MesTruck/STS-multilingual-mpnet-base-v2-GGUF/resolve/main/sts-multilingual-mpnet-base-v2.Q4_K_M.gguf

    wget https://huggingface.co/ggml-org/Qwen3.5-0.8B-GGUF/resolve/main/Qwen3.5-0.8B-Q4_0.gguf

    wget https://huggingface.co/unsloth/Qwen3.5-0.8B-GGUF/resolve/main/Qwen3.5-0.8B-UD-Q4_K_XL.gguf
    wget https://huggingface.co/unsloth/Qwen3.5-0.8B-GGUF/resolve/main/mmproj-BF16.gguf

    wget https://huggingface.co/unsloth/Qwen3-30B-A3B-GGUF/resolve/main/Qwen3-30B-A3B-UD-Q4_K_XL.gguf

    wget https://huggingface.co/LiquidAI/LFM2-24B-A2B-GGUF/resolve/main/LFM2-24B-A2B-Q4_K_M.gguf

Point your local webserver to the project root.

Launch your web browser:

- chromium --enable-unsafe-webgpu --enable-features=Vulkan
- firefox # set dom.webgpu.enabled to true in about:config
- firefox # set javascript.options.wasm_js_promise_integration to true in about:config

## URLs

- http://localhost/wllama_text.html
- http://localhost/wllama_bonsai_4b.html
- http://localhost/wllama_bonsai_8b.html
- http://localhost/wllama_translate.html
- http://localhost/wllama_ocr.html
- http://localhost/wllama_ocr2.html
- http://localhost/wllama_asr.html
- http://localhost/wllama_embeddings.html
- http://localhost/wllama_embeddings2.html
- http://localhost/wllama_qwen35_0-8b.html
- http://localhost/wllama_qwen3_30b_a3b.html
- http://localhost/wllama_lfm2_24b_a2b.html

## Links

- https://github.com/ngxson/wllama
- https://huggingface.co/prism-ml/Bonsai-4B-gguf
- https://huggingface.co/prism-ml/Bonsai-8B-gguf
- https://huggingface.co/tencent/HY-MT1.5-1.8B-GGUF
- https://huggingface.co/zai-org/GLM-OCR
- https://huggingface.co/Qwen/Qwen3-ASR-1.7B
- https://huggingface.co/nomic-ai/nomic-embed-text-v2-moe-GGUF
- https://huggingface.co/MesTruck/STS-multilingual-mpnet-base-v2-GGUF
- https://huggingface.co/Qwen/Qwen3.5-0.8B
- https://huggingface.co/unsloth/Qwen3.5-0.8B-GGUF
- https://huggingface.co/unsloth/Qwen3-30B-A3B-GGUF
- https://huggingface.co/LiquidAI/LFM2-24B-A2B-GGUF
